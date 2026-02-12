import { describe, it, expect } from "vitest";
import { DialogueClient } from "../src/client.js";
import type { DialogueScene } from "../src/dialogue.js";

const testScene: DialogueScene = {
  sceneId: "test",
  title: "Test Scene",
  lines: [
    { lineId: 0, character: "Narrator", text: "Welcome", emotion: "warm" },
    { lineId: 1, character: "Actor", text: "Hello audience", emotion: "excited" },
  ],
  branches: {},
};

describe("DialogueClient", () => {
  it("creates with default config", () => {
    const client = new DialogueClient();
    expect(client.role).toBe("audience");
    expect(client.isConnected).toBe(false);
  });

  it("connects and records interaction", () => {
    const client = new DialogueClient({ clientId: "test-1" });
    const msg = client.connect();
    expect(msg).toContain("test-1");
    expect(client.isConnected).toBe(true);
    expect(client.interactionCount).toBe(1);
  });

  it("cannot start scene when disconnected", () => {
    const client = new DialogueClient();
    client.loadScene(testScene);
    expect(client.startScene("test")).toBeNull();
  });

  it("starts scene when connected", () => {
    const client = new DialogueClient();
    client.connect();
    client.loadScene(testScene);
    const line = client.startScene("test");
    expect(line).not.toBeNull();
    expect(line!.character).toBe("Narrator");
  });

  it("advances through dialogue", () => {
    const client = new DialogueClient();
    client.connect();
    client.loadScene(testScene);
    client.startScene("test");
    const line = client.advance();
    expect(line!.character).toBe("Actor");
  });

  it("disconnects cleanly", () => {
    const client = new DialogueClient();
    client.connect();
    client.disconnect();
    expect(client.isConnected).toBe(false);
  });
});
