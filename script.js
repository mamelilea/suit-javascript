var tanya = true;
while(tanya){
// menangkap pilihan player
var p = prompt('pilihlah diantara gunting, batu dan kertas :');

// menangkap pilihan komputer yang random
var komputer = Math.random();
if(komputer <0.333){
    komputer = 'gunting';
} else if (komputer > 0.3333 && komputer < 0.666){
    komputer = 'batu'
} else {
    komputer = 'kertas'
}
console.log(komputer);


// menentukan rules
var hasil = '';
if(p == komputer){
    hasil = 'SERI!';
} else if (p == 'gunting'){
    hasil = (komputer == 'batu') ? 'KALAH!' : 'MENANG!';
} else if(p == 'batu'){
    hasil = (komputer == 'kertas') ? 'KALAH!' : 'MENANG!';
} else if (p == 'kertas'){
    hasil = (komputer == 'gunting') ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'memasukkan pilihan yang salah';
}



// tampilkan hasilnya 
alert('kamu memilih ' + p + ' dan komputer memilih ' + komputer + '\nMaka hasilnya adalah kamu ' + hasil);

tanya = confirm('lagi?');

}
alert('terimakasih sudah bermain.')