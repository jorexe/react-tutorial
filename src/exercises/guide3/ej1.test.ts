import { spyConsoleLog } from "../lib/print"
import { printRange } from "./ej1"

describe("exercise 1 tests", () => {
    it("should print numbers between 2 and 5", () => {
        // This function spies on console.log so we can test it
        const spy = spyConsoleLog();

        printRange(2, 5);
        
        // The next line will check for the following calls in your function:
        // console.log(2)
        // console.log(3)
        // console.log(4)
        spy.expectToPrint(2, 3, 4);
    });
});
