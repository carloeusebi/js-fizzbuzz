# FIZZBUZZ
## By Carlo Eusebi
<hr>

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
<hr>
BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, append, ecc)<br><br>
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
<hr>

## Steps


1. _Grab an element from the DOM_
1. Generate a number = 1;
1. **FOR** 100 times, while number < 101  :
    - Prepare a string element to print;
    - **IF** number is divisible by 3 (number % 3 === 0);
        - add Fizz to element;
    - **IF** number is divisible by 5 (number % 5 === 0);
        - add Buzz to element (if element was _'Fizz'_ now it is _'FizzBuzz'_)
    - **IF** element is empty (was neither div by 3 nor by 5)
        - element is number
    - Print element;
    - Increase number by 1;
    - _repeat_