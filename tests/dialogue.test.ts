import { describe, it, expect } from "vitest";
import { DialogueManager, type DialogueScene } from "../src/dialogue.js";

function makeScene(id: string, lineCount: number, branches: Record<string, string> = {}): DialogueScene {
  const lines = Array.from({ length: lineCount }, (_, i) => ({
    lineId: i,
    character: i % 2 === 0 ? "Alice" : "Bob",
    text: `Line ${i} of scene ${id}`,
    emotion: i % 2 === 0 ? "curious" : "thoughtful",
  }));
  return { sceneId: id, title: `Scene ${id}`, lines, branches };
}

describe("DialogueManager", () => {
  it("starts with zero scenes", () => {
    const mgr = new DialogueManager();
    expect(mgr.sceneCount).toBe(0);
  });

  it("adds scenes and tracks count", () => {
    const mgr = new DialogueManager();
    mgr.addScene(makeScene("s1", 3));
    mgr.addScene(makeScene("s2", 2));
    expect(mgr.sceneCount).toBe(2);
  });

  it("starts a scene and returns first line", () => {
    const mgr = new DialogueManager();
    mgr.addScene(makeScene("s1", 3));
    const line = mgr.startScene("s1");
    expect(line).not.toBeNull();
    expect(line!.lineId).toBe(0);
    expect(line!.character).toBe("Alice");
  });

  it("returns null for unknown scene", () => {
    const mgr = new DialogueManager();
    expect(mgr.startScene("unknown")).toBeNull();
  });

  it("advances through lines sequentially", () => {
    const mgr = new DialogueManager();
    mgr.addScene(makeScene("s1", 3));
    mgr.startScene("s1");
    const second = mgr.advance();
    expect(second!.lineId).toBe(1);
    const third = mgr.advance();
    expect(third!.lineId).toBe(2);
    expect(mgr.advance()).toBeNull();
  });

  it("branches to another scene", () => {
    const mgr = new DialogueManager();
    mgr.addScene(makeScene("s1", 2, { "go_left": "s2" }));
    mgr.addScene(makeScene("s2", 1));
    mgr.startScene("s1");
    const line = mgr.chooseBranch("go_left");
    expect(line).not.toBeNull();
    expect(mgr.activeScene).toBe("s2");
  });

  it("tracks character emotions", () => {
    const mgr = new DialogueManager();
    mgr.addScene(makeScene("s1", 2));
    mgr.startScene("s1");
    expect(mgr.getCharacterEmotion("Alice")).toBe("curious");
    mgr.advance();
    expect(mgr.getCharacterEmotion("Bob")).toBe("thoughtful");
  });
});
