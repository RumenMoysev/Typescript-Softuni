function printAndSum(num1: number, num2: number): void {
    let numsArr: number[] = [];
    let sum: number = 0;

    for(num1; num1<=num2; num1++) {
        numsArr.push(num1);
        sum += num1;
    }

    console.log(numsArr.join(' '));
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);