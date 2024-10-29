for (var index = 0; index <= 1000; index++) {
    if (index < 2) {
        console.log('No primo:', index);
    }
    else {
        var esPrimo = true;
        for (var i = 2; i <= Math.sqrt(index); i++) {
            if (index % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            console.log('Numero primo:', index);
        }
        else {
            console.log('No primo:', index);
        }
    }
}
