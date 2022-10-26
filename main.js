document.addEventListener('DOMContentLoaded', () => {
    let nevRegex = /[a-zA-z]{1,}/;
    let teljesNev = document.getElementById('teljesNev');
    let orszag = document.getElementById('orszag');
    let varos = document.getElementById('varos');

    document.getElementById('fizetes').addEventListener('click', () => {
        if(!nevRegex.test(teljesNev.value)){
            document.getElementById('teljesNevKiir').textContent = "Legalább 1 betűnek kell lennie a névben";
            document.getElementById('teljesNevKiir').style.color = "red";
        } else{
            document.getElementById('teljesNevKiir').textContent = "";
        }

        if(!nevRegex.test(orszag.value)){
            document.getElementById('orszagKiir').textContent = "Legalább 1 betűnek kell lennie az országban";
            document.getElementById('orszagKiir').style.color = "red";
        } else{
            document.getElementById('orszagKiir').textContent = "";
        }

        if(!nevRegex.test(varos.value)){
            document.getElementById('orszagKiir').textContent = "Legalább 1 betűnek kell lennie az országban";
            document.getElementById('orszagKiir').style.color = "red";
        } else{
            document.getElementById('orszagKiir').textContent = "";
        }
    })
})

