// import { functionThatSayHi, sayBye as showBye } from "./module1.js";

// console.log(showBye());
import * as module1 from "./module1.js";
import sayAloha from "./module2.js";

console.log(module1.functionThatSayHi());
console.log("--------");
console.log(sayAloha());
