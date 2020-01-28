var inputs = document.querySelectorAll("input");

for(var i=0;i<inputs.length;i++){
   var input=inputs[i];
    if (input.hasAttribute("disabled")){
   var label = input.parentNode; 
    }
   }
label.classList.add('disabled');
