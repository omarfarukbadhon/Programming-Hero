function evenOdd(number){
    if(number % 2 === 0){
        number = number / 2;
        return number;
    }else{
        number = number*2;
        return number;
    }
} 


const result = evenOdd(221);
console.log(result);


