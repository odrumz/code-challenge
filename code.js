
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
function Grade(Gradetype){

    let finalresult = ""

    if(Gradetype > 79){
         finalresult = "A";
    }else if(Gradetype >= 60 && Gradetype < 79){
        finalresult = "B";
    }else if(Gradetype > 49 && Gradetype < 59){
        finalresult = "C";
    }else if( Gradetype >=40 && Gradetype < 49){
        finalresult = "D";
    }else if( Gradetype >= 0 && Gradetype <40) {
        finalresult = "E";
    }
    return finalresult

}
console.log(Grade(4));