import {ChildProcess, exec} from "child_process";
let instructions : String[] = [
  "echo Fetching latest changes from https://github.com/Vencord/Vesktop [...]",
  "git fetch upstream",
  "echo Checkout main branch [...]",
  "git checkout main",
  "echo Merging upstream onto main branch [...]",
  "git merge upstream/main",
  "echo Building update [...]",
  "tsx scripts/build/build.mts",
  "echo Packaging update [...]",
  "electron-builder",
  "echo Locating and running installer [...]",
  "tsx scripts/run_installer.ts",
  "echo Close this window now to keep dist files.",
  "pause",
  "echo Cleaning up dist files [...]",
  "rm -r dist"
];
let instructionPointer: number = 0;
function runNext() {
  if (instructions[instructionPointer] == null) return;
  let child : ChildProcess = exec(`cmd /C ${instructions[instructionPointer]}`);
  child.on('exit',()=>{
    instructionPointer++;
    runNext();
  });
  child.stdout?.pipe(process.stdout);
  child.stderr?.pipe(process.stderr);
  if (child.stdin) process.stdin.pipe(child.stdin);
}
runNext();