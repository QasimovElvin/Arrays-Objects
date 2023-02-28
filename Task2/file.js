let num=35487
let sumOdd=0
let sumEven=0
while(num>0){
    sumOdd=sumOdd + (num %10)
    num = (num -(num%10))/10 
    sumEven=sumEven + (num %10)
    num = (num -(num%10))/10
}
console.log(sumEven*sumOdd)