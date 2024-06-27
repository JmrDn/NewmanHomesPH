const header = document.querySelector('header');
const logo = document.querySelector('header .logo');
const homeNav = document.getElementById('home-nav');
const martinVilleHomesUnitB = document.getElementById('martin-ville-homes-unit-b');
const martinVilleOpenHouseUnitB = document.getElementById('matin-ville-open-house-unit-b');
const seeAllNewsAndEvents = document.getElementById('see-all');
const anvayaCove = document.getElementById('anvaya-cove');
const fraserPlace = document.getElementById('fraser-place');


logo.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

homeNav.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

if (martinVilleHomesUnitB != null){
    martinVilleHomesUnitB.addEventListener('click',function(){
        window.location.href="../Modules/Our properties/For Sale/martinvillehomes.html"
    });
}

anvayaCove.addEventListener('click', function(){
    window.location.href="../Modules/Our properties/For Sale/anvaya-cove.html"
});

if (fraserPlace != null){
    fraserPlace.addEventListener('click', function(){
        window.location.href="../Modules/Our properties/For Sale/fraser-place.html"
    });
}

if (martinVilleOpenHouseUnitB != null){
    martinVilleOpenHouseUnitB.addEventListener('click',function(){
        window.location.href="../Modules/News and Events/Contents/martin-ville-open-house.html"
    });
    
}
if (seeAllNewsAndEvents != null){
    seeAllNewsAndEvents.addEventListener('click',function(){
        window.location.href="../Modules/News and Events/newsandevent.html"
    });
}


window.addEventListener('scroll', function() {
    var section2 = document.getElementById('second');
    var section3 = document.getElementById('third');
    var footer = this.document.querySelector('footer');

    if (section2 != null && section3 != null && footer != null){
        // Get the positions of the sections relative to the viewport
        var section2Bottom = section2.getBoundingClientRect().bottom;
        var section3Bottom = section3.getBoundingClientRect().bottom;
        var footerBottom = footer.getBoundingClientRect().bottom;
    
        // Check if the bottom of section 1 is in view
        if (section2Bottom<= window.innerHeight && section2Bottom >= 0||
                section3Bottom <= window.innerHeight && section3Bottom >= 0 ||
                footerBottom <= window.innerHeight && footerBottom >= 0) {
                    
            // If section 1 bottom is in view, change the color of the nav
            header.style.background = "linear-gradient(to right, #4E7AA8, #042455, #000F22)";
        } else {
            // If section 1 bottom is not in view, revert to the original color
            header.style.background = "transparent";
        }
    }
  });

  let firstTitleValue = document.getElementById('first-title');
  let secondTitleValue = document.getElementById('second-title');

 if (firstTitleValue != null && secondTitleValue != null){
    firstTitleValue.style.display = 'flex';
    secondTitleValue.style.disply = 'none';
  
   
  
    function changeTextFirstValue(){
      firstTitleValue.style.display = 'flex';
      secondTitleValue.style.display = "none";
    }
  
    function changeTextSecondValue(){
      secondTitleValue.style.display = "flex"
      firstTitleValue.style.display = 'none';
  
    }
  
    window.setInterval(changeTextFirstValue, 4000);
    window.setInterval(changeTextSecondValue, 8000);
 }


//Section 2
let isDown = false;
let startX;
let scrollLeft;

document.querySelector('.content-container').addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - document.querySelector('.content-container').offsetLeft;
    scrollLeft = document.querySelector('.content-container').scrollLeft;
});

document.querySelector('.content-container').addEventListener('mouseleave', () => {
    isDown = false;
});

document.querySelector('.content-container').addEventListener('mouseup', () => {
    isDown = false;
});

document.querySelector('.content-container').addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - document.querySelector('.content-container').offsetLeft;
    const walk = (x - startX) * 3; // Adjust this multiplier for desired drag speed
    document.querySelector('.content-container').scrollLeft = scrollLeft - walk;
});

//Section 3

let isDownS3 = false;
let startXS3;
let scrollLeftS3;

const newsAndEventsContainer = document.querySelector('.news-and-events-container');

if (newsAndEventsContainer != null){
    newsAndEventsContainer.addEventListener('mousedown', (e) => {
        isDownS3 = true;
        startXS3 = e.pageX - document.querySelector('.news-and-events-container').offsetLeft;
        scrollLeftS3 = document.querySelector('.news-and-events-container').scrollLeft;
    });

    newsAndEventsContainer.addEventListener('mouseleave', () => {
        isDownS3 = false;
    });
    
    newsAndEventsContainer.addEventListener('mouseup', () => {
        isDownS3 = false;
    });
    
    newsAndEventsContainer.addEventListener('mousemove', (e) => {
        if (!isDownS3) return;
        e.preventDefault();
        const x = e.pageX - document.querySelector('.news-and-events-container').offsetLeft;
        const walk = (x - startXS3) * 3; // Adjust this multiplier for desired drag speed
        document.querySelector(' .news-and-events-container').scrollLeft = scrollLeftS3 - walk;
    });
    
}


