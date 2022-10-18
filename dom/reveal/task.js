const revealArr = [...document.querySelectorAll('.reveal')];
// console.log(revealArr);

   
      
      window.addEventListener('scroll', function() {
        
         revealArr.forEach((reveal) => {
           const revealHeight = window.innerHeight; // почему window
           const {top, bottom} = reveal.getBoundingClientRect();
           
           if (revealHeight < bottom || 0 > top) {
             reveal.classList.remove('reveal_active');
           } else {
             reveal.classList.add('reveal_active');
           }
      });
 });
      
      
    