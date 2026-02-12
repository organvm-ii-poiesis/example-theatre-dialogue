/**
 * Dialogue server for managing networked performances.
 *
 * The DialogueServer coordinates multiple clients in a shared
 * theatrical performance, managing scene state and synchronization.
 */

/** Server configuration. */
export interface ServerConfig {
  maxClients: number;
  sceneDuration: number; // seconds
}

/** Server state snapshot. */
export interface ServerState {
  activeClients: number;
  currentScene: string | null;
  scenesPlayed: number;
  isRunning: boolean;
}

/**
 * Server that coordinates a multi-client theatre dialogue session.
 */
export class DialogueServer {
  private config: ServerConfig;
  private clients: Set<string> = new Set();
  private currentScene: string | null = null;
  private scenesPlayed: number = 0;
  private running: boolean = false;

  constructor(config?: Partial<ServerConfig>) {
    this.config = {
      maxClients: config?.maxClients ?? 50,
      sceneDuration: config?.sceneDuration ?? 300,
    };
  }

  /** Return the current server state. */
  getState(): ServerState {
    return {
      activeClients: this.clients.size,
      currentScene: this.currentScene,
      scenesPlayed: this.scenesPlayed,
      isRunning: this.running,
    };
  }

  /** Start the server. */
  start(): boolean {
    if (this.running) return false;
    this.running = true;
    return true;
  }

  /** Stop the server. */
  stop(): boolean {
    if (!this.running) return false;
    this.running = false;
    this.currentScene = null;
    return true;
  }

  /**
   * Register a client.
   * @param clientId - Unique client identifier.
   * @returns True if registered, false if at capacity.
   */
  registerClient(clientId: string): boolean {
    if (!this.running) return false;
    if (this.clients.size >= this.config.maxClients) return false;
    this.clients.add(clientId);
    return true;
  }

  /**
   * Remove a client.
   * @param clientId - The client to remove.
   * @returns True if the client was found and removed.
   */
  removeClient(clientId: string): boolean {
    return this.clients.delete(clientId);
  }

  /**
   * Set the active scene for all clients.
   * @param sceneId - The scene to broadcast.
   */
  setScene(sceneId: string): void {
    this.currentScene = sceneId;
    this.scenesPlayed++;
  }

  /** Return the list of connected client IDs. */
  getClients(): string[] {
    return [...this.clients];
  }
}
