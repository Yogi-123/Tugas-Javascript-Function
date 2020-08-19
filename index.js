// function pembelian produk
function salam (nama , produk) {
    console.log("terimakasih kepada" ,nama ,"telah membeli", produk )
}
console.log(salam("yogi", "masker"))

//function celcius fahrenheit
function celciusbynineperfive (number) {
    return number * 9/5 ;
}

function celciustofahrenheit (celcius) {
    return celciusbynineperfive (celcius) + 32;
}

celciustofahrenheit (5)

//function fahrenheit celcius
function fahrenheitby32 (number) {
    return number - 32;
}

function fahrenheittocelcius (fahrenheit) {
    return fahrenheitby32 (fahrenheit) * 5/9;
}

fahrenheittocelcius (70)

// function menghitung umur kucing

