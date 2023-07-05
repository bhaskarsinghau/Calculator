let string=""
let buttons=document.getElementsByClassName("btn")
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            try{
            string=eval(string)
            document.querySelector('input').value=string;
            }
            catch(error){
                string="Syntax Error !"
                document.querySelector('input').value=string;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string=" "
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'C'){
            string=string.substring(0,string.length - 1);
            document.querySelector('input').value=string
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML; 
        document.querySelector('input').value=string;
        }
    })
})
