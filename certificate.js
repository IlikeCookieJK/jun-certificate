document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        changeCert(eventData.target.value);
        console.log(changeCert(eventData.target.value))
    });

    // process form Data
    document.getElementById("cForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;

      });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');
    
    //changeCert has a problem for me
    
    // certificate.classList.add('number1');
    
    function changeCert(value){
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch(value){
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