function calculateTime(n) {
    let date1 = new Date();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let date2 = new Date();
    let elapsedTime = date2.getTime() - date1.getTime();
    return elapsedTime / 1000;
}

// Test cases
calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);
