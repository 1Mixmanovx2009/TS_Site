//1
function evenSum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(evenSum(7)); // 12
//2
// function booleanToNumber(value: boolean): number {
//     return value ? 1 : 0;
// }
// console.log(booleanToNumber(true)); // 1
// console.log(booleanToNumber(false)); // 0
//3
// function getFirstTwoLetters(name: string): string {
//     return name.slice(0, 2);
// }
// console.log(getFirstTwoLetters("Laylo")); // La
//4
// function roundUpNumber(num: number): number {
//     return Math.round(num + 2);
// }
// console.log(roundUpNumber(5.3)); // 7
//5
// function incrementAndConvert(num: number): string {
//     return (num + 1).toString();
// }
// console.log(incrementAndConvert(4)); // "5"
//6
// function printEachLetter(word: string): void {
//     for (const char of word) {
//         console.log(char);
//     }
// }
// printEachLetter("salom");
// // s
// // a
// // l
// // o
// // m
//7
// function reverseSequence(n: number): number[] {
//     const result: number[] = [];
//     for (let i = n; i >= -n; i--) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(reverseSequence(2)); // [2, 1, 0, -1, -2]
//8
// function numberToBoolean(num: number): boolean {
//     return num === 1;
// }
// console.log(numberToBoolean(1)); // true
// console.log(numberToBoolean(0)); // false
//9
// function introduce(name: string, nationality: string): string {
//     return `My name is ${name}. I'm ${nationality}`;
// }
// console.log(introduce("Laylo", "uzbek")); // My name is Laylo. I'm uzbek
