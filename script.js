const key1 = document.getElementsByClassName(".key1");
const key2 = document.getElementsByClassName("key2");
const key3 = document.getElementsByClassName("key3");
const key4 = document.getElementsByClassName("key4");
const key5 = document.getElementsByClassName("key5");
const key6 = document.getElementsByClassName("key6");
const key7 = document.getElementsByClassName("key7");
const key8 = document.getElementsByClassName("key8");
const key9 = document.getElementsByClassName("key9");
const key0 = document.getElementsByClassName("key0");
const keyclear = document.getElementsByClassName("keyclear");
const key1add= document.getElementsByClassName("keyadd");
const keysubt = document.getElementsByClassName("keysubt");
const keymultiply = document.getElementsByClassName("keymultiply");
const keydivide =dividedocument.getElementsByClassName("keydivide");
const keyequals = document.getElementsByClassName("keyequals");
const display = document.getElementsByClassName("display");

key1.addEventListener("click", function() {
    display.innerText += "1";

});

addEventListener('keypress', (event) => {
   
    if (event.key >= '0' && event.key <= '9') {
        display.innerText += `${event.key}`;
        
        event.preventDefault();
        
        
        console.log(event.key);
    }
    
   
    else if (['+', '-', '*', '/'].includes(event.key)) {
        display.innerText += `${event.key}`;
     
        event.preventDefault();
        
     
        console.log(event.key);
    }
    

    else if (event.key === 'Enter') {
        display.innerText = eval(display.innerText) 
        
        event.preventDefault();
        
        
        console.log('Enter');
    }
    
 
    else if (event.key === 'c') {
        display.innerText= ""
            event.preventDefault();
        
    }
})
