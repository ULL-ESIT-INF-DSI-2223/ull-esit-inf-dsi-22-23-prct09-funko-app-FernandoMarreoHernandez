export function myMap<T, U>(arr: T[], fn: (item: T) => U): U[] {
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;  
}