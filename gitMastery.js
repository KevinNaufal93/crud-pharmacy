const numbersAddition = (num1, num2) => {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return "Not a number brog";
    } else {
        return num1 + num2;
    }
}

console.log(numbersAddition(3, "2"));