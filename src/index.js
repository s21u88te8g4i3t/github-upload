import { greet } from "./greet";

console.log('Sync start');

(async ()=>{
  console.log('Async start');
  console.log(await greet());
  console.log('Async end');
})();

console.log('Sync end');