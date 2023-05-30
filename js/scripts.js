const matrix = document.getElementById('FizzBuzzMatrix');

let listOfElements = '';

// start counting
for (let i = 1; i < 101; i++) {

    // prepare an element to print
    let elementToPrint = '';

    // prepare html code
    let classes = 'box';

    // if i is divisible by 3 add Fizz to elementToPrint
    if (!(i % 3)) {
        elementToPrint += 'Fizz'
        classes += ' fizz';
    }

    // if i is divisible by 5 add Buzz to elementToPrint
    if (!(i % 5)) {
        elementToPrint += 'Buzz'
        classes += ' buzz';
    }

    // if i is neither divisble by 3 nor 5 elementToPrint is empty => we can print i
    if (!elementToPrint) elementToPrint = i;

    console.log(elementToPrint); //print on console

    // build html for the element
    const listElement = `<div class="${classes}">${elementToPrint}</div>`;

    // add new html at the end of list
    listOfElements += listElement;
}

matrix.innerHTML = listOfElements;
