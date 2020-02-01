var nama = '';
var peran = 'Penyihir';

if (nama==""){
    console.log('Masukan nama dulu ya')
}else{
if (peran=='Ksatria'){
    console.log('Halo Ksatria'+' '+ nama +' ,kamu dapat menyerang dengan senjatamu!')
} else if (peran=='Tabib'){
    console.log('Halo Tabib'+' '+ nama +' ,kamu akan membantu temanmu yang terluka.')
} else if (peran=='Penyihir'){
    console.log('Halo Penyihir'+' '+ nama +' ciptakan keajaiban yang membantu kemenanganmu!')
} else if (peran==''){
    console.log('Halo'+' '+nama, 'Pilih peranmu untuk memulai game!')
} else {
    console.log('Halo'+ ' ' + nama + ' ,pilih job yang sesuai')
}
}