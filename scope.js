let bonus = 20;

function sum(first,second){
    let result = first + second + bonus;
    //console.log(result);
    if(result>9){
        let mood = "happy";
        mood = "fishy";
        mood = "gloomy";
        //console.log(mood);
    }
    console.log(mood);
    let day = "friday";
    console.log(day);
    // let day = "friday";
    return result;
}

const output = sum(3,7);
// console.log(bonus);
// console.log(output);