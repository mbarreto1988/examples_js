function ajustarNumeroAlRango(rangeStar, rangeEnd, numberToRound) {
    if(typeof rangeStar !== 'number' || typeof rangeEnd !== 'number' || typeof numberToRound !== 'number'){
        // throw new Error("All parameters must be numeric.");        
        console.log("All parameters must be numeric.");        
    }

    if(rangeStar === rangeEnd){
        // throw new Error("rangeStar y rangeEnd no pueden ser iguales");
        console.log("rangeStar y rangeEnd no pueden ser iguales");
    }

    let initialDistance = Math.abs(numberToRound - rangeStar)
    let finalDistance = Math.abs(numberToRound - rangeEnd)

    if(initialDistance < finalDistance){
        console.log(rangeStar);
        return rangeStar
    } else {
        console.log(rangeEnd);
        return rangeEnd
    }
}

ajustarNumeroAlRango(100, 300, 89)


