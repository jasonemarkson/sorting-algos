// if input is divisible by 3 with no remainder, than return true, if not return false

const powerOfThree = num => {
    let currentQuotient = num;
    // 1) edge case ensure integer is positive and not zero
    if (currentQuotient === 1) {
        return true
    }
    // 2) conditional

    while (currentQuotient > 0) {
        currentQuotient = currentQuotient / 3;
        if (currentQuotient === 1) {
            return true
        }
    }
    return false
}

console.log("powerof3", powerOfThree(3))