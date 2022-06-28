// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

let number = 100;
for (var i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
let sum_multiples = 1000;
sum = 0
for (let i = 0; i < sum_multiples; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
        console.log(sum);
    }
}

//3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
let number_range = 20;
for (let i = 0; i < number_range; i++) {
    if (i % 2 != 0) {
        console.log(i + " is odd");
    }
    else if (i % 2 == 0) {
        console.log(i + " is even");
    }
}

// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
let num = [-2, 4, -5, 6, 0]
var largest = Math.max.apply(0, num);
for (let i = 0; i < num.length; i++) {
    if (largest < num) {
        largest = num[i];
    }
}
console.log(largest);

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let num_one = 10;
let num_two = 40;

if (num_one > num_two) {
    console.log(num_one);
}
else {
    console.log(num_two);
}

//6. Write a JavaScript program to find leap years from 2000 to 2022
function find_leap_years(start_year, end_year) {
    let year_range = []

    for (let i = start_year; i <= end_year; i++) {
        year_range.push(i);
    }

    var new_year_range = [];

    year_range.forEach(
        function (year) {
            if (test_leap_year(year))
                new_year_range.push(year);
        }
    );
    return new_year_range;
}

function test_leap_year(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0)) {
        return year;
    }
}
console.log(find_leap_years(2000,2022));
