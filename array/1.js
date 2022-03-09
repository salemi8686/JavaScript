function fact(a) {
    if (a <= 1) return 1;
    return a * fact(a - 1);
}
let b = fact(5);
console.log(b);