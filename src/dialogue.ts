/**
 * Dialogue management for theatrical performances.
 *
 * Provides the DialogueManager for scripting, advancing, and
 * branching dialogue sequences between characters.
 */

/** A single line of dialogue. */
export interface DialogueLine {
  lineId: number;
  character: string;
  text: string;
  emotion: string;
  direction?: string;
}

/** A scene containing a sequence of dialogue lines. */
export interface DialogueScene {
  sceneId: string;
  title: string;
  lines: DialogueLine[];
  branches: Record<string, string>; // choice -> next sceneId
}

/**
 * Manages dialogue sequences for interactive theatre.
 *
 * Supports linear progression through scenes, branching choices,
 * and character emotion tracking across the performance.
 */
export class DialogueManager {
  private scenes: Map<string, DialogueScene> = new Map();
  private currentSceneId: string | null = null;
  private currentLineIndex: number = 0;
  private characterEmotions: Map<string, string> = new Map();

  /** Return the number of loaded scenes. */
  get sceneCount(): number {
    return this.scenes.size;
  }

  /** Return the current scene ID. */
  get activeScene(): string | null {
    return this.currentSceneId;
  }

  /**
   * Add a scene to the dialogue manager.
   * @param scene - The scene to register.
   */
  addScene(scene: DialogueScene): void {
    this.scenes.set(scene.sceneId, scene);
  }

  /**
   * Start a scene by its ID.
   * @param sceneId - The scene to begin.
   * @returns The first dialogue line, or null if scene not found.
   */
  startScene(sceneId: string): DialogueLine | null {
    const scene = this.scenes.get(sceneId);
    if (!scene || scene.lines.length === 0) return null;

    this.currentSceneId = sceneId;
    this.currentLineIndex = 0;
    const line = scene.lines[0];
    this.characterEmotions.set(line.character, line.emotion);
    return line;
  }

  /**
   * Advance to the next line in the current scene.
   * @returns The next line, or null if at end of scene.
   */
  advance(): DialogueLine | null {
    if (!this.currentSceneId) return null;

    const scene = this.scenes.get(this.currentSceneId);
    if (!scene) return null;

    this.currentLineIndex++;
    if (this.currentLineIndex >= scene.lines.length) return null;

    const line = scene.lines[this.currentLineIndex];
    this.characterEmotions.set(line.character, line.emotion);
    return line;
  }

  /**
   * Make a branching choice in the current scene.
   * @param choice - The choice identifier.
   * @returns The first line of the branched scene, or null.
   */
  chooseBranch(choice: string): DialogueLine | null {
    if (!this.currentSceneId) return null;

    const scene = this.scenes.get(this.currentSceneId);
    if (!scene) return null;

    const nextSceneId = scene.branches[choice];
    if (!nextSceneId) return null;

    return this.startScene(nextSceneId);
  }

  /**
   * Get the current emotion of a character.
   * @param character - The character name.
   * @returns The emotion string, or "neutral" if unknown.
   */
  getCharacterEmotion(character: string): string {
    return this.characterEmotions.get(character) ?? "neutral";
  }

  /**
   * Get all available branches for the current scene.
   * @returns Record of choice labels to scene IDs.
   */
  getAvailableBranches(): Record<string, string> {
    if (!this.currentSceneId) return {};
    const scene = this.scenes.get(this.currentSceneId);
    return scene?.branches ?? {};
  }
}
