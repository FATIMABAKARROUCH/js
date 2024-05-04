////EX1 (practice part!)

//1-->



function moyenne(x,y,z,o){
    let p = document.getElementById("p1");
    let somme = (x + y + z + o );

    p.innerHTML = `le moyenne des 4 nombres est : ${somme/4}`
}
moyenne(10,20,30,40)
//moyenne(parseInt(prompt("enter number1")),parseInt(prompt("enter number2")),parseInt(prompt("enter number3")),parseInt(prompt("enter number4")))


//2-->

// function mode(A){
//     if(A%2 ===0 && A%3 ===0){
//         console.log(true) 
//     }else{
//         console.log(false) 
//     }

// }
// mode(parseInt(prompt(`enter number : `)))

//3 -->

function calculer(a,b){
    let sum = 0;
    for(i =Math.min(a,b); i <= Math.max(a,b); i++ ){
        if (i>0){
            sum += i
        }
    }
    console.log(sum)

    
}
calculer(4,6);



//4-->
