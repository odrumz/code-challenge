//should return ok if the speed is less than or equal to 70
//return demerits point per speed input > 70
// If demerits point is more than 12 points lisense suspenede

function speeddetector(speedin){
    let response = "";
    if(speedin < 0)
    {
        response = "null";

    }else if(speedin >= 0 && speedin <= 70){
        response = "Ok";
        
        let perPoint = 5;

        let diff = speedin  - 70;

        demerits = Math.floor(diff / perPoint);
        if(demerits > 12){
            response = "License Suspended" + demerits;
        

    }
    return response;
}}
console.log(speeddetector(98))