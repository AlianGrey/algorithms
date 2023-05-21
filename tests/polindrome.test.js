if (str = "Hello" === true) {
    throw new Error("Function don't work correctly!");
}

if (str = "Abba" !== true) {
    throw new Error("Function don't work correctly!");
}

if (str = "" === true) {
    throw new Error("Function don't work correctly!");
}

console.log("All tests passed ")