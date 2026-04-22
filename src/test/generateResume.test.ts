import { describe, expect, it } from "vitest";
import { buildResumeDocument } from "@/lib/generateResume";

describe("buildResumeDocument", () => {
  it("keeps the generated resume within two pages", () => {
    const doc = buildResumeDocument();

    expect(doc.getNumberOfPages()).toBeLessThanOrEqual(2);
  });
});