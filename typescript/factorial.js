let a = 5;

function fact(b) {
    if (b === 1) return 1;
    return b * fact(b - 1);
}
console.log(fact(a));