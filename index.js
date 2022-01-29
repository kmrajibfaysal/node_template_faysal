const fib = (n) => {
    if (n === 1) {
        return [0, 1];
    }
    const arr = fib(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
};
