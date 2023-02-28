let num=39576
let max=0
while(num>0){
    let digit = num%10
 num= Math.floor(num/10)
    if(digit>max){
        max=digit
    }
}
console.log(max)