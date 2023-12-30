function maxMin(arr){
    return{
        max: Math.max(...arr),
        min: Math.min(...arr),
    };
}

const array = [2,4,5,6,7,8];
console.log(maxMin(array));