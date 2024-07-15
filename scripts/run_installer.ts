import {walk} from "@root/walk";
import {ChildProcess, exec} from "child_process";
let child : ChildProcess;
walk("dist",async (err,file)=>{
  if (err || child) return;
  console.log(file)
  if (file.startsWith("dist\\Vesktop Setup") && file.endsWith(".exe")) {
    child = exec(`cmd /C "${file}"`);
    child.stdout?.pipe(process.stdout);
  }
});