document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const birthdate = new Date(document.getElementById('birthdate').value);
        const gender = document.getElementById('gender').value;
        const dayOfWeek = birthdate.getDay(); // 0 (Sunday) to 6 (Saturday)
        let akanName;
       if(gender == "select")
       {
        alert("Please Select Gender ");
       }
       else if (gender === 'male') {
        akanName = akanMaleName(dayOfWeek);
        } else {
        akanName = akanFemaleName(dayOfWeek);
    }
    displayResult(akanName);

    });
});

function akanMaleName(dayOfWeek) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    return maleNames[dayOfWeek];
}

function akanFemaleName(dayOfWeek) {
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    return femaleNames[dayOfWeek];
}
function displayResult(akanName) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Heloo Your Akan name is: <strong>${akanName} !!!</strong></p>`;
}