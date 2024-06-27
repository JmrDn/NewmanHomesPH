
const backBtn = document.querySelectorAll('.selected-item-container .main-item-container .title-container .back-container');

const martinville = document.getElementById("martin-ville");
const ghPhase1 = document.getElementById('GHPhase1');
const ghPhase2 = document.getElementById('GHPhase2');
const upHomes = document.getElementById('up-homes');
const levitownParkRow = document.getElementById('levitown-park-row');
const staRita = document.getElementById('sta-rita');
const sumakwelHomes = document.getElementById('sumakwel-homes');


function showItemSelected(property){
    let propertySelected = property.toString();


    document.querySelector('.selected-item-container').style.display = 'flex';
    let selectedMartinvile = document.querySelector('.selected-item-container .selected-martinville-homes');
    let selectedGHPhase1= document.querySelector('.selected-item-container .selected-ghphase1');
    let selectedGHPhase2= document.querySelector('.selected-item-container .selected-ghphase2');
    let selectedUpHomes= document.querySelector('.selected-item-container .selected-uphomes');
    let selectedLevitownParkRow= document.querySelector('.selected-item-container .selected-levitown-park-row');
    let selectedStaRita= document.querySelector('.selected-item-container .selected-sta-rita');
    let selectedSumakwelHomes= document.querySelector('.selected-item-container .selected-sumakwel-homes');

    if (propertySelected === "martinville"){
 
        selectedMartinvile.style.display = 'flex';
        selectedGHPhase1.style.display = 'none';
        selectedGHPhase2.style.display = 'none';
        selectedUpHomes.style.display = 'none';
        selectedLevitownParkRow.style.display = 'none';
        selectedStaRita.style.display = 'none';
        selectedSumakwelHomes.style.display = 'none';
    }
    else if (propertySelected === "ghphase1"){

        selectedMartinvile.style.display = 'none';
        selectedGHPhase1.style.display = 'flex';
        selectedGHPhase2.style.display = 'none';
        selectedUpHomes.style.display = 'none';
        selectedLevitownParkRow.style.display = 'none';
        selectedStaRita.style.display = 'none';
        selectedSumakwelHomes.style.display = 'none';
    }
    else if (propertySelected === "ghphase2"){

        selectedMartinvile.style.display = 'none';
        selectedGHPhase1.style.display = 'none';
        selectedGHPhase2.style.display = 'flex';
        selectedUpHomes.style.display = 'none';
        selectedLevitownParkRow.style.display = 'none';
        selectedStaRita.style.display = 'none';
        selectedSumakwelHomes.style.display = 'none';
    }
    else if (propertySelected === "uphomes"){

        selectedMartinvile.style.display = 'none';
        selectedGHPhase1.style.display = 'none';
        selectedGHPhase2.style.display = 'none';
        selectedUpHomes.style.display = 'flex';
        selectedLevitownParkRow.style.display = 'none';
        selectedStaRita.style.display = 'none';
        selectedSumakwelHomes.style.display = 'none';
    }
    else if (propertySelected === "levitown-park-row"){

        selectedMartinvile.style.display = 'none';
        selectedGHPhase1.style.display = 'none';
        selectedGHPhase2.style.display = 'none';
        selectedUpHomes.style.display = 'none';
        selectedLevitownParkRow.style.display = 'flex';
        selectedStaRita.style.display = 'none';
        selectedSumakwelHomes.style.display = 'none';
    }
    else if (propertySelected === "sta-rita"){

        selectedMartinvile.style.display = 'none';
        selectedGHPhase1.style.display = 'none';
        selectedGHPhase2.style.display = 'none';
        selectedUpHomes.style.display = 'none';
        selectedLevitownParkRow.style.display = 'none';
        selectedStaRita.style.display = 'flex';
        selectedSumakwelHomes.style.display = 'none';
    }

    else if (propertySelected === "sumakwel-homes"){

        selectedMartinvile.style.display = 'none';
        selectedGHPhase1.style.display = 'none';
        selectedGHPhase2.style.display = 'none';
        selectedUpHomes.style.display = 'none';
        selectedLevitownParkRow.style.display = 'none';
        selectedStaRita.style.display = 'none';
        selectedSumakwelHomes.style.display = 'flex';
    }

};

function hideItemSelected(){
    document.querySelector('.selected-item-container').style.display='none';

  
};

backBtn.forEach(backBtn => {
    backBtn.addEventListener('click', function(){
        hideItemSelected();
    });
});

martinville.addEventListener('click', function(){

    showItemSelected("martinville");
    

});

ghPhase1.addEventListener('click', function(){

    showItemSelected("ghphase1");
    

});

ghPhase2.addEventListener('click', function(){

    showItemSelected("ghphase2");
    

});

upHomes.addEventListener('click', function(){

    showItemSelected("uphomes");
    

});

levitownParkRow.addEventListener('click', function(){

    showItemSelected("levitown-park-row");
    
});

staRita.addEventListener('click', function(){

    showItemSelected("sta-rita");

});

sumakwelHomes.addEventListener('click', function(){

    showItemSelected("sumakwel-homes");

});

document.querySelector('#martinville-homes-unita').addEventListener('click',function(){
 
    localStorage.setItem('property-name', 'Unit A');
    localStorage.setItem('isBrochure', 'false');
    window.location.href ="../../Modules/Our properties/For Sale/martinvillehomes.html";
});

document.querySelector('#martinville-homes-unitb').addEventListener('click',function(){
 
    localStorage.setItem('property-name', 'Unit B');
    localStorage.setItem('isBrochure', 'true');
    window.location.href ="../../Modules/Our properties/For Sale/martinvillehomes.html";
});

document.querySelector('#martinville-homes-unitc').addEventListener('click',function(){
 
    localStorage.setItem('property-name', 'Unit C');
    localStorage.setItem('isBrochure', 'false');
    window.location.href ="../../Modules/Our properties/For Sale/martinvillehomes.html";
});

document.querySelector("#anvaya-cove").addEventListener("click", function(){
    localStorage.setItem('isBrochure', 'false');
    window.location.href="../../Modules/Our properties/For Sale/anvaya-cove.html";
});

document.querySelector("#fraser-place").addEventListener("click", function(){
    localStorage.setItem('isBrochure', 'false');
    window.location.href="../../Modules/Our properties/For Sale/fraser-place.html";
});

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-container button');
const propertiesItem = document.querySelectorAll('.list-of-properties-container .item');

// Define the filterItems function
const filterItems = (e) => {

    // Remove active-filter class from all buttons
    document.querySelectorAll(".filter-container  .active-filter")
        .forEach(btn => btn.classList.remove("active-filter"));

    e.target.classList.add("active-filter");

    propertiesItem.forEach(item =>{
        item.classList.add("hide");

        if (item.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            item.classList.remove("hide");
        }
    })
}

// Attach the click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterItems));

  // Get all dropdown items
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  // Loop through each dropdown item and add event listener
  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {

       
      // Get the text content of the clicked item
      const buttonText = this.textContent.trim();

      propertiesItem.forEach(item =>{
        item.classList.add("hide");

        if (item.dataset.name === this.dataset.name || this.dataset.name === "all"){
            item.classList.remove("hide");
        }
    })
      
      // Update the text of the button with the clicked item's text
      const btn = document.querySelector('.btn');
      btn.textContent = buttonText;
    });
  });

  
 

