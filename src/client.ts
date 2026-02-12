/**
 * Dialogue client for audience/performer interaction.
 *
 * Provides the DialogueClient that connects to a dialogue server
 * and enables audience members to participate in the performance.
 */

import { DialogueManager, type DialogueLine, type DialogueScene } from "./dialogue.js";

/** Client configuration. */
export interface ClientConfig {
  clientId: string;
  role: "audience" | "performer";
  autoAdvance: boolean;
}

/**
 * Client for participating in a networked theatre dialogue.
 *
 * Wraps a DialogueManager with connection state and interaction
 * capabilities for audience or performer roles.
 */
export class DialogueClient {
  private config: ClientConfig;
  private manager: DialogueManager;
  private connected: boolean = false;
  private interactions: Array<{ action: string; timestamp: number; data: unknown }> = [];

  constructor(config: Partial<ClientConfig> = {}) {
    this.config = {
      clientId: config.clientId ?? `client-${Date.now()}`,
      role: config.role ?? "audience",
      autoAdvance: config.autoAdvance ?? false,
    };
    this.manager = new DialogueManager();
  }

  /** Return the client ID. */
  get clientId(): string {
    return this.config.clientId;
  }

  /** Return whether the client is connected. */
  get isConnected(): boolean {
    return this.connected;
  }

  /** Return the client's role. */
  get role(): string {
    return this.config.role;
  }

  /** Return the number of recorded interactions. */
  get interactionCount(): number {
    return this.interactions.length;
  }

  /**
   * Connect to the dialogue session.
   * @returns Connection status message.
   */
  connect(): string {
    this.connected = true;
    this.recordInteraction("connect", { role: this.config.role });
    return `${this.config.clientId} connected as ${this.config.role}`;
  }

  /**
   * Load a scene into the client's dialogue manager.
   * @param scene - The scene data to load.
   */
  loadScene(scene: DialogueScene): void {
    this.manager.addScene(scene);
    this.recordInteraction("load_scene", { sceneId: scene.sceneId });
  }

  /**
   * Begin a scene and get the first line.
   * @param sceneId - The scene to start.
   * @returns The first dialogue line, or null.
   */
  startScene(sceneId: string): DialogueLine | null {
    if (!this.connected) return null;
    const line = this.manager.startScene(sceneId);
    if (line) {
      this.recordInteraction("start_scene", { sceneId, lineId: line.lineId });
    }
    return line;
  }

  /**
   * Advance to the next line.
   * @returns The next line, or null.
   */
  advance(): DialogueLine | null {
    if (!this.connected) return null;
    const line = this.manager.advance();
    if (line) {
      this.recordInteraction("advance", { lineId: line.lineId });
    }
    return line;
  }

  /**
   * Make a branching choice.
   * @param choice - The choice to make.
   * @returns The first line of the branched scene, or null.
   */
  choose(choice: string): DialogueLine | null {
    if (!this.connected) return null;
    this.recordInteraction("choose", { choice });
    return this.manager.chooseBranch(choice);
  }

  /** Disconnect from the session. */
  disconnect(): void {
    this.connected = false;
    this.recordInteraction("disconnect", {});
  }

  /** Get all recorded interactions. */
  getInteractions(): Array<{ action: string; timestamp: number; data: unknown }> {
    return [...this.interactions];
  }

  private recordInteraction(action: string, data: unknown): void {
    this.interactions.push({ action, timestamp: Date.now(), data });
  }
}
