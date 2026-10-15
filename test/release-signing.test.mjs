import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const script = readFileSync(
  new URL("../android/app/build.gradle", import.meta.url), "utf8",
);

function signingBlock(name) {
  const start = script.indexOf("    buildTypes {");
  assert.ok(start >= 0, "Gradle must define buildTypes");
  const match = script.slice(start).match(new RegExp(
    "\\b" + name + "\\s*\\{([\\s\\S]*?)\\n\\s*\\}", "m"
  ));
  assert.ok(match, name + " build type must be present");
  return match[1];
}

test("debug variant may use repository-owned debug signing", () => {
  assert.match(signingBlock("debug"), /signingConfig\s+signingConfigs\.debug/);
});

test("release variant cannot use public debug signing key", () => {
  const release = signingBlock("release");
  assert.doesNotMatch(release, /signingConfig\s+signingConfigs\.debug/);
  // Distributable builds must receive a private signing identity separately.
  assert.doesNotMatch(release, /\bstorePassword\b|\bkeyPassword\b/);
});
