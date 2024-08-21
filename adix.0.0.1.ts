/*  
     ________
    /  ____  \
   /  |____|  \
  /    ____    \
 /    /    \    \
/____/      \____\

Welcome to 
Adix, a UI library for Javascript, writen in typescript.Aphla Edition.
learn more at cleancode.dev/adix/aphla.html

*/

var Adix = {
    One:function(Selector){
        document.querySelector(Selector);
     },
     More:function(Selector){
        document.querySelectorAll(Selector);
    }

}
var Wights = {  //UI features like modal and tabs
  
 

 
 modal:function(code){
        
        var modal = document.createElement("modalwindow");// create element(where the modal lives)
        modal.setAttribute("id","modal");// give it a id  attridute
        modal.innerHTML = code; //put the window in the element
        document.body.appendChild(modal);// make it a child of the body tag
        function Delete(){ //funition to remove the modal.
            document.body.removeChild(modal);       
         }

        
        modal.addEventListener('click',Delete);//listen for a click to close the window.

    }
}

var Animate = { // animate  elements
   shown:false,
    hide: function(ele){     // hide
        document.body.removeChild(ele);
        Animate.shown = false;
    },
    show: function(ele){    //show
        document.body.appendChild(ele);
        Animate.shown = true;
    },
    toggle: function(ele){      //toggle, means if hiden show or if shown hide.
       if(Animate.shown =false ) {
        document.body.appendChild(ele);
        Animate.shown = true;
       }
        
        else{
            document.body.removeChild(ele);
            Animate.shown = false;
        }
    }

}


 

