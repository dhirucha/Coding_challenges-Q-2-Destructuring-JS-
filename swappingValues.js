
//swap the values without temp variable
function swap(a, b){
    [a,b] = [b,a]
    return [a,b]
}

let x = 1;
let y = 2;
[x,y] = swap(x,y);
console.log(`Values befor swapping = ${1} and ${2}`);
console.log(`Values after swapping = ${x} and ${y}`);


