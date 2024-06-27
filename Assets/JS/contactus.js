const submitBtn = document.querySelector('button');

document.getElementById('checkbox').addEventListener('change', function() {
    if (this.checked) {
        submitBtn.disabled = false;
     
    } else {
        submitBtn.disabled = true;
       
    }
});







