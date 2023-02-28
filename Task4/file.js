let num=6637
let counter=0
if(n==1 || num==0){
    console.log("ne sade ne murekkeb")
}
else{
    for(let i=2;i<num; i++){
        console.log(i)
            if(num%i==0){
                counter++;
                break;
            }
        }
        if(counter>=1){
            console.log("murekkeb")}
        else{
            console.log("sade")
        }
                
            

