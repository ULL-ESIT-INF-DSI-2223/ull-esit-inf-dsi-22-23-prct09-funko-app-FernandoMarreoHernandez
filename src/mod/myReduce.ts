export function myReduce<T, U>(arr: T[], fn: (acc: U, item: T) => U, initial: U): U {
    let acc = initial;
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}