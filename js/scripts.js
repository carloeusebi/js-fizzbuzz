console.log('JSOK');

// start counting
for (let i = 1; i < 101; i++) {

    // prepare an element to print
    let elementToPrint = '';

    // if i is divisible by 3 add Fizz to elementToPrint
    if (!(i % 3)) elementToPrint += 'Fizz';

    // if i is divisible by 5 add Buzz to elementToPrint
    if (!(i % 5)) elementToPrint += 'Buzz';

    // if i is neither divisble by 3 nor 5 elementToPrint is empty => we can print i
    if (!elementToPrint) elementToPrint = i;

    console.log(elementToPrint);
}