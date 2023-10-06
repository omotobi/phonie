const mtnNumbers = [ "0803", "0806", "0813", "0810", "0816", "0814", "0903", "0906", "0703", "0704", "0706", "0702"]
const gloNumbers = ["0805", "0807", "0811", "0815", "0705", "0905", "0915"]
const airNumbers = ["0802", "0808", "0812", "0708", "0701", "0902", "0901", "0907"]
const etiNumbers = ["0809", "0817", "0818", "0908", "0909"]

const num = document.getElementById("number");
const names = document.getElementById("name");
const input = document.getElementById("name-input")
const main = document.getElementById("main-form");
const mtnDisplay = document.getElementById("mtn");
const gloDisplay = document.getElementById("glo");
const airtelDisplay = document.getElementById("airtel");
const etisalatDisplay = document.getElementById("9mobile");

function check(){
    event.preventDefault()
    if(num.value === ""){
        alert("Please enter a valid number")
    }else{
        let number = num.value.slice(0,4)
        names.innerText = `Hello ${input.value} `
        if(mtnNumbers.includes(number)){
            main.style.display = "none";
            mtnDisplay.style.display = "block";
        }else if(gloNumbers.includes(number)){
            main.style.display ="none";
            gloDisplay.style.display = "block";
        }else if(airNumbers.includes(number)){
            main.style.display ="none";
            airtelDisplay.style.display = "block";
        }else if(etiNumbers.includes(number)){
            main.style.display ="none";
            etisalatDisplay.style.display = "block";
        }else{
            alert("Please check the number you entered, it seems to be incorrect")
        }
        
    }
  
}