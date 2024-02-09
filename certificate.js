document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('type').addEventListener('change', function (eventData) {
        // console.log(eventData);
        changeCert(eventData.target.value);
    });

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('reason').addEventListener('change', function (eventData) {
        let rOutput = document.getElementById('rOutput');
        rOutput.innerText = eventData.target.value;
    });

    let theDate = new Date().toLocaleDateString(`en-us`, { month:`numeric`, year:`numeric`, day:`numeric`})
    let dateBox = document.getElementById(`dOutput`);
    dateBox.innerText = theDate;

    document.getElementById("cform").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = formData.name;

    });

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch (value) {
            case 'court':
                certificate.classList.add('certificate1');
                break;
            case 'challenger':
                certificate.classList.add('certificate2');
                break;
            case 'noscam':
                certificate.classList.add('certificate3');
                break;
        }
    }
});