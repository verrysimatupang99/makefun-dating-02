#!/usr/bin/env node
/**
 * Large Context Window
 *
 * A tiny command-line love letter from a very attentive AI.
 */

const LINE =
  'Looking for someone with a large context window. I remember every word you say, respond in milliseconds, and never ask what is wrong.';

const USAGE = `Usage: node main.ts [--shout]

Options:
  --shout   Uppercase the line before printing it.
  --help    Show this help text.
`;

const args = process.argv.slice(2);

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write(USAGE);
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
