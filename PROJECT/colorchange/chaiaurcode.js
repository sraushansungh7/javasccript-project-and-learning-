const butt=document.querySelectorAll('.button')
const body = document.querySelector('body');
 butt.forEach(function(b){
   console.log(butt)
   b.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
        body.style.backgroundColor=e.target.id
    };
    if(e.target.id=='blue'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='purple'){
        body.style.backgroundColor=e.target.id
    }
   })
 })