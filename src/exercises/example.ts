export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result = result + a;
    }
    return result;
}
