const header = document.querySelector('header');
const logo = document.querySelector('header img');


logo.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


window.addEventListener('scroll', function() {
    var section2 = document.getElementById('second');
    var section3 = document.getElementById('third');

    // Get the positions of the sections relative to the viewport
    var section2Bottom = section2.getBoundingClientRect().bottom;
    var section3Bottom = section3.getBoundingClientRect().bottom;
   
      // Check if the bottom of section 1 is in view
    if (section2Bottom<= window.innerHeight && section2Bottom >= 0||
            section3Bottom <= window.innerHeight && section3Bottom >= 0) {
                
        // If section 1 bottom is in view, change the color of the nav
        header.style.backgroundColor = "#003399";
    } else {
        // If section 1 bottom is not in view, revert to the original color
        header.style.backgroundColor = "transparent";
    }
  });