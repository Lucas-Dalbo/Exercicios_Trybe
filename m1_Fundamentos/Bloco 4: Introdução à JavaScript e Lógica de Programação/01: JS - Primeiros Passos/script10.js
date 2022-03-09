const price;
const sell;
const fullPrice = price*1.2;
const gain = sell - fullPrice;

if ( price < 0 || sell < 0 ) {
    console.log("Erro. Insira valores válidos");
}
else {
    console.log(1000*(gain));
}