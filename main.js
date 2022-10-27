document.addEventListener('DOMContentLoaded', () => {
    let nevRegex = /[a-zA-z]{1,}/;
    let teljesNev = document.getElementById('teljesNev');
    let orszag = document.getElementById('orszag');
    let varos = document.getElementById('varos');

    let utcaRegex = /[a-zA-z 0-9]{1,}/;
    let utca = document.getElementById('utcaHazSzam');
    let irSzam = document.getElementById('irSzam');

    let kartyaRegex = /^[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}-{1}[0-9]{4}$/;
    let kSzam = document.getElementById('kartyaSzam');

    let kodRegex = /^[0-9]{3}$/;
    let kod = document.getElementById('kod');

    let kNevRegex = /^[a-zA-Z ]{1,}$/;
    let kNev = document.getElementById('kartyaNev');

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
            document.getElementById('varosKiir').textContent = "Legalább 1 betűnek kell lennie a városban";
            document.getElementById('varosKiir').style.color = "red";
        } else{
            document.getElementById('varosKiir').textContent = "";
        }

        if(!utcaRegex.test(utca.value)){
            document.getElementById('utcaKiir').textContent = "Legalább 1 betűnek kell lennie a lakcímben";
            document.getElementById('utcaKiir').style.color = "red";
        } else{
            document.getElementById('utcaKiir').textContent = "";
        }

        if(!utcaRegex.test(irSzam.value)){
            document.getElementById('irSzamKiir').textContent = "Legalább 1 karakternek kell lennie az irányítószámban";
            document.getElementById('irSzamKiir').style.color = "red";
        } else{
            document.getElementById('irSzamKiir').textContent = "";
        }

        if(!kartyaRegex.test(kSzam.value)){
            document.getElementById('kSzamKiir').textContent = "4x4 számjegy kell kötőjellel elválasztva";
            document.getElementById('kSzamKiir').style.color = "red";
        } else{
            document.getElementById('kSzamKiir').textContent = "";
        }

        if(!kodRegex.test(kod.value)){
            document.getElementById('kodKiir').textContent = "Pontosan 3 számjegy kell";
            document.getElementById('kodKiir').style.color = "red";
        } else{
            document.getElementById('kodKiir').textContent = "";
        }

        if(!kNevRegex.test(kNev.value)){
            document.getElementById('kNevKiir').textContent = "Angol abc betűi lehetnek";
            document.getElementById('kNevKiir').style.color = "red";
        } else{
            document.getElementById('kNevKiir').textContent = "";
        }
    })
})

