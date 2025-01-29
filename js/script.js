function hitung(){
    let berat = document.getElementById("inputbb").value;
    let tinggi = document.getElementById("inputtb").value;
    
    if (berat && tinggi){
        let tinggim = tinggi / 100; 
        let bmi = berat / (tinggim * tinggim); 
        let kategori = kategoriBMI(bmi);

        document.getElementById('resultbmi').innerHTML = `Hasil BMI = ${bmi.toFixed(2)}<br>Kategori = ${kategori}`;
    } else {
        document.getElementById('resultbmi').innerHTML = 'Mohon isi dengan benar';
    }
}

function kategoriBMI(bmi){
    if (bmi < 18.5){
        return 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Kelebihan berat badan';
    } else {
        return 'OBESITAS';
    }
}

function reset(){
    document.getElementById('inputbb').value = '';
    document.getElementById('inputtb').value = '';
    document.getElementById('inputage').value = '';
    document.getElementById('resultbmi').innerHTML = '0';
}