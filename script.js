let hr= document.getElementById("Hari");
let jm= document.getElementById("Jam");
let mn= document.getElementById("Menit");
let dt= document.getElementById("Detik");

let tanggal = new Date(2025, 3, 24);
let waktu= tanggal.getTime();

function Countdown(){
    let tglsekarang= new Date();
    let waktusekarang= tglsekarang.getTime();
    let sisawaktu= waktu - waktusekarang;
    let satumenit= 60* 1000;
    let satujam= 60* satumenit;
    let satuhari= 24* satujam;

    let tambah = (angka)=> (angka<10? `0${angka}` :angka);

    if (waktu< waktusekarang){
        clearInterval(i);
        document.querySelector(".Countdown").innerHTML='<h1>Waktu Telah Berakhir</h1>';

    }else{
        let sisahari= Math.floor(sisawaktu/satuhari);
        let sisajam= Math.floor((sisawaktu% satuhari)/ satujam);
        let sisamenit= Math.floor((sisawaktu% satujam)/ satumenit);
        let sisadetik= Math.floor((sisawaktu% satumenit)/ 1000);

        hr.textContent=tambah(sisahari);
        jm.textContent=tambah(sisajam);
        mn.textContent=tambah(sisamenit);
        dt.textContent=tambah(sisadetik);
    }
}
let i= setInterval(Countdown, 1000);
Countdown();