//punto 1
function findMax(lista){
    let mayor = 0;
    for (let i = 0; i < lista.length; i++) {        
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
    }
    return mayor;    
}

//punto 2
function includes(lista, num){
    for (let i = 0; i < lista.length; i++) {        
        if (lista[i] == num) {
            return true;
        }
    }
    return false;
}

//punto 3
function sum(lista){
    let sum = 0;
    for (let i = 0; i < lista.length; i++) {        
        sum += lista[i];
    }
    return sum;
}

//punto 4
function missingNumbers(lista){
    let l2 = [];
    let min = lista[0];
    let max = findMax(lista);
    for (let i = 0; i < lista.length; i++) {        
        if(lista[i] < min){
            min = lista[i];
        }      
    }
    for (let i = min; i < max-1; i++) {        
        if(includes(lista, i) == false){
            l2.push(i);
        }
    }
    return l2;
}

//console.log(findMax([10, 4, 9, 2, 2, 6]))
//console.log(includes([10, 4, 9, 2, 2, 6], 6));
//console.log(sum([10, 10, 10, 1]));
//console.log(missingNumbers([10, 4, 9, 2, 2, 6]));
