
    let result = document.querySelector(".result");
    let display = document.querySelector(".display");
    let allitems = document.querySelectorAll(".item");
    let inputs =  [...allitems]


inputs.forEach( (elem) => elem.addEventListener("click", operate));
 function operate(e){
    //console.log(this.innerText);
    switch(this.innerText){
        
        case "delete":
            
            let deleteNumber = Array.from(display.innerText); 
            let deleted = deleteNumber.pop();
            display.innerText = deleteNumber.join(""); 
            break;

        case "clear":
            display.innerText = "";
            result.innerText = "";
            break;

        case "=":
           result.innerText = eval(display.innerText);
           break;

        default:
           display.innerText += this.innerText;   
    }
} 

