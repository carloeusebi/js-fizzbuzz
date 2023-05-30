console.log('JSOK');

// start counting
for (let i = 1; i < 101; i++) {

    // if i is divisible by 5
    if (!(i % 5)) {

        if (!(i % 3)) {

            // if i is also divisble by 3 print FizzBuzz
            console.log('FizzBuzz');
        } else {

            // else means it is ONLY divisible by 5
            console.log('Buzz');
        }
    } else if (!(i % 3)) {

        // else if it is ONLY divisble by 3
        console.log('Fizz');
    } else {

        // else if it neither divisble by 5 nor 3
        console.log(i);
    }
}