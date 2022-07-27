/**
 * Rounds a number
 * 
 * @param num number to be rounded
 * @returns the number rounded with two decimals
 */
export function round(num: number): number {
    return Math.round(num * 100) / 100
}
