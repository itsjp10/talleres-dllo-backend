function mapVocal(item){
    if (item == "a" || item == "e" || item == "i" || item == "o" || item == "u" ){
        return item;
    }else{
        return true;
    }
}

function reduceVocal(acum, actual){
    if (actual != true){
        return acum + 1;
    }
    return acum
}

function reduceConsonante(acum, actual){
    if (actual == true){
        return acum + 1;
    }
    return acum
}

function desglosarString(pal, opcion){
    pal = pal.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    var vector = pal.split("")
    vector = vector.map(mapVocal);
    if (opcion == "vocales"){        
        return vector.reduce(reduceVocal, 0);
    }
    if (opcion == "consonantes"){        
        return vector.reduce(reduceConsonante, 0);
    }
}

function twoSum(numeros, num) {
    const index1 = numeros.findIndex((item1, idx1) => {
        return numeros.slice(idx1 + 1).some(item2 => item1 + item2 === num);
    });

    const item1 = numeros[index1];
    const index2 = numeros.slice(index1 + 1).findIndex(item2 => item1 + item2 === num);

    if (index2 !== -1) {
        return [index1, index1 + 1 + index2];
    }

    return [];
}


function conversionRomana(romano) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    function convertir(romano) {
        if (romano.length === 0) return 0;
        const valorActual = valores[romano[0]];
        const valorSiguiente = romano.length > 1 ? valores[romano[1]] : 0;

        if (valorSiguiente > valorActual) {
            return valorSiguiente - valorActual + convertir(romano.slice(2));
        } else {
            return valorActual + convertir(romano.slice(1));
        }
    }
    return convertir(romano.toUpperCase());
}


//console.log(desglosarString("iiiiiiiiiiiii", "vocales"));
//console.log(twoSum([3, 4, 2], 6))
console.log(conversionRomana("MXMVII"));