function guessNumber() {

const play =  document.getElementById("play_button");
const enter = document.getElementById("enter");
const start = document.getElementById("start")
const father = document.querySelector("#left img");

let number = Math.floor(Math.random()*100) ;
let counter = 20;

play.addEventListener("click", () => {
    const guess =  document.getElementById("number").value;
    
    if (guess < 1 || guess > 100){
        alert("Number must be between 1 to 100")
    }
    else{
        if(guess < number){
            if(counter > 1){
                father.setAttribute("src", "./img/higharrow.png" );
                counter --;
                start.innerHTML= `${counter} chances remain`
                enter.innerHTML= "Enter a Higher Value"
            }

            else{
                father.setAttribute("src", "https://media.giphy.com/media/l4FGGafcOHmrlQxG0/giphy.gif")
                start.innerHTML = `The Number was ${number}`
                enter.innerHTML = "GAME OVER... Rest in Peace!"
            }
        }
        else if(guess > number){
            if(counter > 1){
                father.setAttribute("src", "./img/lowarrow.png" )
                counter--;
                start.innerHTML= `${counter} chances remain`
                enter.innerHTML= "Enter a Lower Value"

            }
            else{
                father.setAttribute("src", "https://media.giphy.com/media/l4FGGafcOHmrlQxG0/giphy.gif")
                start.innerHTML = `The Number was ${number}`
                enter.innerHTML = "GAME OVER... Rest in Peace!"
            }
        }
        else {
            father.setAttribute("src", "https://media.giphy.com/media/QBRNHGamXCKd94OIs4/giphy.gif")
            start.innerHTML = "CONGRATS"
            enter.innerHTML = `The Number is ${number}`
        }
        
    }
});
}
const restart =  document.getElementById("restart_button");
restart.addEventListener("click", () => {
    window.location.reload()
})

guessNumber ();



































// restart.addEventListener("click", () => {
//     window.location.reload()
// })