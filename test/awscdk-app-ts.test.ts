import { Testing } from "projen";
import { AwsCdkTypeScriptApp } from "../src";

describe("AwsCdkTypeScriptApp", () => {
  it("", () => {
    // Given
    const project = new AwsCdkTypeScriptApp({
      cdkVersion: "2.1.0",
      ...defaultOptions,
    });

    // Then
    expect(project.formatTask.description).toEqual("Format with prettier");
  });

  it("Should recreate conflicting dependabot pull requests", () => {
    // Given
    const project = new AwsCdkTypeScriptApp({
      cdkVersion: "2.1.0",
      ...defaultOptions,
    });

    // When
    const mergify = Testing.synth(project)[".mergify.yml"];

    // Then
    expect(mergify).toContain(
      [
        "  - name: Recreate conflicting dependabot pull requests",
        "    conditions:",
        "      - author=dependabot[bot]",
        "      - conflict",
        "      - -closed",
        "    actions:",
        "      comment:",
        '        message: "@dependabot recreate"',
      ].join("\n")
    );
  });
});

const defaultOptions = {
  authorName: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  clobber: false,
  defaultReleaseBranch: "main",
  jest: false,
  name: "test-project",
  repositoryUrl: "https://github.com/pepperize/projen-awscdk-app-ts.git",
} as const;
