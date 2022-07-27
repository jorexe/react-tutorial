/**
 * This function is a helper that returns a function that compares calls on a spy, unwrapping the arguments
 */
export function spyConsoleLog() {
    const spy = jest.spyOn(console, 'log');
    return { expectToPrint: (...args: any[]) => {
        expect(spy.mock.calls.flatMap(a => a)).toEqual(args);
    } };
}