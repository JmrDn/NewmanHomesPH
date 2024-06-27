
const FRASER_PLACE = document.getElementById('fracer-place');
const ANVAYA_COVE = document.getElementById('anvaya-cove');

if (FRASER_PLACE != null){
    FRASER_PLACE.addEventListener('click', function(){
        window.location.href ="../../Our properties/For Sale/fraser-place.html";
    });
}

if (ANVAYA_COVE != null){
    ANVAYA_COVE.addEventListener('click', function(){
        window.location.href ="../../Our properties/For Sale/anvaya-cove.html";
        console.log("anvaya cove clicked");
    });
}

const backBtn = document.querySelectorAll('.selected-item-container .main-item-container .title-container .back-container');
const martinville = document.getElementById("martin-ville");


function showItemSelected(property){
    let propertySelected = property.toString();


    document.querySelector('.selected-item-container').style.display = 'flex';
    let selectedMartinvile = document.querySelector('.selected-item-container .selected-martinville-homes');


    if (propertySelected === "martinville"){
 
        selectedMartinvile.style.display = 'flex';
    
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

if (martinville != null){
    martinville.addEventListener('click', function(){

        showItemSelected("martinville");
        
    
    });
}

const martinVilleUnitA = document.querySelector('#martinville-homes-unita');
const martinVilleUnitB = document.querySelector('#martinville-homes-unitb');
const martinVilleUnitC = document.querySelector('#martinville-homes-unitc');

if (martinVilleUnitA != null){
    martinVilleUnitA.addEventListener('click',function(){
 
        localStorage.setItem('property-name', 'Unit A');
        localStorage.setItem('isBrochure', 'false');
        window.location.href ="../../Our properties/For Sale/martinvillehomes.html";
    });
    
}

if (martinVilleUnitB != null){
    martinVilleUnitB.addEventListener('click',function(){
 
        localStorage.setItem('property-name', 'Unit B');
        localStorage.setItem('isBrochure', 'true');
        window.location.href ="../../Our properties/For Sale/martinvillehomes.html";
    });
}

if (martinVilleUnitC != null){
    martinVilleUnitC.addEventListener('click',function(){
 
        localStorage.setItem('property-name', 'Unit C');
        localStorage.setItem('isBrochure', 'false');
        window.location.href ="../../Our properties/For Sale/martinvillehomes.html";
    });
}

const isBrochure = localStorage.getItem('isBrochure');
const brochure = document.querySelector('.details-container .brochure');
const brochureLine = document.querySelector('.details-container .brochure-line');

console.log(isBrochure);


function displayBrochure (){
    brochure.style.display = 'flex';
    brochure.style.flexDirection = 'column';
    brochureLine.style.display = 'flex';

}

function hideBrochure (){   
    brochure.style.display = 'none';
    brochureLine.style.display = 'none';
}

if (isBrochure === 'true'){
    displayBrochure();
}
else if (isBrochure === 'false'){
    hideBrochure();
}
else if (isBrochure === null){
    hideBrochure();
}









