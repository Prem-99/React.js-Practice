let arr = [1,2,3,4];



const finalvalue = arr.reduce((accumulated,currentvalue)=>{
    console.log(accumulated,currentvalue)
    return currentvalue+accumulated;
},0)
console.log(finalvalue)