var content = document.querySelector("#ul-nav");
var menu = document.querySelector("#display-menu");
var button = document.querySelector("#btn-menu");
var activatedClass = 'menu-active';

menu.innerHTML = content.innerHTML;

button.addEventListener('click', function(e) {
    e.preventDefault();
    if (this.parentNode.classList.contains(activatedClass)) 
    {
        this.parentNode.classList.remove(activatedClass);      
    }
    else{
        this.parentNode.classList.add(activatedClass);   
    }
    
});

