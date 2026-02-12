/**
 * Example Theatre Dialogue
 *
 * An interactive dialogue system for theatrical performances.
 * Provides dialogue management, character state tracking, and
 * a client-server architecture for networked performances.
 */

export { DialogueManager, type DialogueLine, type DialogueScene } from "./dialogue.js";
export { DialogueClient, type ClientConfig } from "./client.js";
export { DialogueServer, type ServerConfig, type ServerState } from "./server.js";
