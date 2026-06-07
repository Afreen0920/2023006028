import { Log } from "./Log";

async function test() {
  await Log(
    "frontend",
    "info",
    "component",
    "Testing logger middleware"
  );
}

test();