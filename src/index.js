module.exports = function toReadable(number) {
    let arr = [
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
        ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        ["hundred", "thousand"]
    ];
    if (number <= 10) {
        return arr[0][number];
    } else if (number > 10 && number < 20) {
        return arr[1][number - 11];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return arr[2][number / 10 - 2];
        } else {
            return arr[2][Math.ceil(number / 10) - 3] + " " + arr[0][number % 10];
        }
    } else if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return arr[0][Math.ceil(number / 100)] + " " + arr[3][0];
        } else if (number % 100 >= 1 && number % 100 <= 10) {
            return arr[0][Math.ceil(number / 100) - 1] + " " + arr[3][0] + " " + arr[0][number % 100];
        } else if (number % 100 > 10 && number % 100 < 20) {
            return arr[0][Math.ceil(number / 100) - 1] + " " + "hundred" + " " + arr[1][(number % 100) - 11];
        } else if (number % 100 >= 20 && number % 10 === 0) {
            return arr[0][Math.ceil(number / 100) - 1] + " " + "hundred" + " " + arr[2][Math.ceil(((number % 100) / 10)) - 2];
        } else if (number % 100 > 20) {
            return arr[0][Math.ceil(number / 100) - 1] + " " + "hundred" + " " + arr[2][Math.ceil(((number % 100) / 10)) - 3] + " " + arr[0][(number % 100) % 10];
        }
    }
}
