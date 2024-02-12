document.addEventListener("DOMContentLoaded", function () {
    // if (document.querySelectorAll('.button') !== null) {
    //     let buttons = document.querySelectorAll('.button');
    //     buttons.forEach(button => button.addEventListener('click', processForm))
    // }

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

    let theDate = new Date().toLocaleDateString(`en-us`, { month: `numeric`, year: `numeric`, day: `numeric` })
    let dateBox = document.getElementById(`dOutput`);
    dateBox.innerText = theDate;
    
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('UwUnameOutput');
        nameOutput.innerText = uwu(eventData.target.value);
    });

    document.getElementById('reason').addEventListener('change', function (eventData) {
        let rOutput = document.getElementById('UwUrOutput');
        rOutput.innerText = uwu(eventData.target.value);
    });

    // document.getElementById("cform").addEventListener("submit", function (eventData) {
    //     eventData.preventDefault(); //stop page reload when form is submitted
    //     var formData = new FormData(eventData.target);
    //     formData = Object.fromEntries(formData);

    //     //update certificate information when form is submitted:
    //     let nameOutput = document.getElementById('nameOutput');
    //     nameOutput.innerText = formData.name;

    // });

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = "";
        switch (value) {
            case 'court':
                document.getElementById(`certImg`).innerHTML = '<img src="certificates/Court.png" alt="Court Certificate" id="Cert1" class=""></img>';
                certificate.classList.add
                    ('certificate1');
                    document.getElementById(`texts`).innerHTML = `<span id="nameOutput" class="cname">Name</span><span id="rOutput" class="crea">Reason(s)</span>`
                break;
            case 'challenger':
                document.getElementById(`certImg`).innerHTML = '<img src="certificates/challenger.png" alt="Challenger Certificate" id="Cert1" class=""></img>';
                certificate.classList.add('certificate2');
                document.getElementById(`texts`).innerHTML = `<span id="nameOutput" class="cname">Name</span><span id="rOutput" class="crea">Reason(s)</span>`
                break;
            case 'noscam':
                document.getElementById(`certImg`).innerHTML = '<img src="certificates/legit.png" alt="Real Certificate" id="Cert1" class=""></img>';
                certificate.classList.add('certificate3');
                document.getElementById(`texts`).innerHTML = `<span id="nameOutput" class="cname">Name</span><span id="rOutput" class="crea">Reason(s)</span>`
                break;
            case `UwU`:
                document.getElementById(`certImg`).innerHTML = '<img src="certificates/uwu.png" alt="UwU Certificate" id="Cert1" class=""></img>';
                certificate.classList.add('certificate4');
                document.getElementById(`texts`).innerHTML = `<span id="UwUnameOutput" class="cname">Name</span><span id="UwUrOutput" class="crea">Reason(s)</span>`
                break;
        }
    }

    document.getElementById('UwUname').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('UwUnameOutput');
        nameOutput.innerText = uwu(eventData.target.value);
    });

    document.getElementById('UwUreason').addEventListener('change', function (eventData) {
        let rOutput = document.getElementById('UwUrOutput');
        rOutput.innerText = uwu(eventData.target.value);
    });

    function uwu(xx) {
        let uwu = xx.split(``);
        const y = uwu.length;
        for (i = 0; i < y; i++) {
            let x = uwu[i];
            if (x === `r`) {
                uwu.push(`w`)
            } else if (x === `l`) {
                uwu.push(`w`)
            } else if (x === `L`) {
                uwu.push(`W`)
            } else if (x === `R`) {
                uwu.push(`W`)
            } else {
                uwu.push(x);
            }
            if (i === y) {
                break;
            }
        }
        for (i = 0; i < uwu.length; i++) {
            uwu.shift();
            if (i === y) {
                break;
            }
        }
        return uwu.join(``);
    }

});