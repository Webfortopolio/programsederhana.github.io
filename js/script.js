alert('Selamat Datang di Program sederhana Komandan');
var nama = prompt('Silahkan masukkan nama Komandan');
alert('Haloo, Selamat datang komandan ' + nama);
var kabar = confirm(`Bagaimana kabar komandan ${nama}?`);

if (kabar == true) {
    alert(`Alhamdulillah Jika kabar komandan ${nama} Baik-baik Saja`);
}
else{
    alert('kenapa komandan ? :( , Komandan Sakit kah ? :(');
}

alert('Hehehe... :) ini merupakan program ke dua aku yang aku buat untuk komandan :)');
alert(`Ternyata Komandan ${nama} Suka dengan program buatan ku :)`);
alert('Jadi Malu aku :) wkwkwk....');
alert('Hmmmm.... Karena ini Program kedua ku');
var kuis = confirm(`Apakah Komandan ${nama} Mau main tebak-tebakkan?`);
if ( kuis == true) {
    alert('Asikk... !!! :) Kita main tebak-tebakan wkwwkwk');
}
else{
    alert('Yah.... :( Kenapa gak mau komandan?');
}

alert('Pernyataan tebak-tebakan Pertama');
var kuis1 = prompt('Pintu, pintu apa yang di dobrak ama 10 orang gak kebuka-buka?');
if ( kuis1 == 'pintu geser') {
    alert('Yeayyy.... komandan Benar..  :)');
}
else{
    alert('tetod.... jawaban komandan salah');
}

confirm('Komandan mau tau jawabanya?');
alert('Jawabanya adalah.....');
alert('Pintu Geser ... !!! wkwkwk :)');

alert('Sebelumnya terima kasih karena sudah ingin bermain tebak-tebakan bersama saya komandan :)');
alert('Sebagai Rasa terima kasih, saya ada hadiah untuk komandan ' + nama);
confirm('Komandan ingin melihat hadiahnya? :)');


var myImage = new Image(300, 300);
	myImage.src = 'gambar1.jpg';
	x = document.getElementById("gambar");
	x.appendChild(myImage);