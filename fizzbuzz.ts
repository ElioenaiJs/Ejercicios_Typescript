const A = 5;
const B = 3;

for (let index = 1; index <= 100; index++) {
    if (index % A === 0 && index % B === 0) {
        console.log('fizzbuzz');
    } else if (index % A === 0) {
        console.log('fizz');
    } else if (index % B === 0) {
        console.log('buzz');
    } else {
        console.log(index);
    }
}