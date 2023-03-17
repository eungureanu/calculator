function add(...args) {
    let add = 0;
    for (arg of args) {
        add += arg;
    }
    return add;
}

function substract(first, ...args) {
    let diff = first;
    for (arg of args) {
        diff -= arg;
    }
    return diff;
}

function multiply(...args) {
    let product = 1;
    for (arg of args) {
        product *= arg;
    }
    return product;
}

function divide(first, ...args) {
    let quotient = first;
    for (arg of args) {
        quotient /= arg;
    }
    return quotient;
}
