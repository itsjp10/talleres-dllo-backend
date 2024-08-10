function convertidorTemp(c){
    return c * 9/5 + 32;
}

function resolvedor(a, b, c, signo){
    if(signo == "+"){
        return (-b + Math.sqrt(b*b - 4*a*c))/2*a;
    }else{
        return (-b - Math.sqrt(b*b - 4*a*c))/2*a;
    }
}

function mejorParidad(num){
    return num%2==0;
}

function peorParidad(num){
    if(num == 0){
        let par;
        par = true;
        return par;
    }else if(num == 1){
        let par;
        par = false;
        return par;
    }else if(num == 2){
        let par;
        par = true;
        return par;
    }else if(num == 3){
        let par;
        par = false;
        return par;
    }else if(num == 4){
        let par;
        par = true;
        return par;
    }else if(num == 5){
        let par;
        par = false;
        return par;
    }else if(num == 6){
        let par;
        par = true;
        return par;
    }else if(num == 7){
        let par;
        par = false;
        return par;
    }else if(num == 8){
        let par;
        par = true;
        return par;
    }else if(num == 9){
        let par;
        par = false;
        return par;
    }else if(num == 10){
        let par;
        par = true;
        return par;
    }
}

//console.log(convertidorTemp(30));
//console.log(resolvedor(1, 5, 4, "+"));
//console.log(mejorParidad(5));
//console.log(peorParidad(10));

