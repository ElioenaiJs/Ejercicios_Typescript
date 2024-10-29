var A = 5;
var B = 3;
for (var index = 1; index <= 100; index++) {
    if (index % A === 0 && index % B === 0) {
        console.log('fizzbuzz');
    }
    else if (index % A === 0) {
        console.log('fizz');
    }
    else if (index % B === 0) {
        console.log('buzz');
    }
    else {
        console.log(index);
    }
}
