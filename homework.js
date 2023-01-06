'use strict';

function BinarioADecimal(num) {
   var array = num.split('');
   var sum = 0;
   for(var i = 0; i < array.length; i ++) {
     sum = sum + parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
   }
return sum;
}

function DecimalABinario(num) {
if(num <= 0) return '0'; 

var binario = [];

while(num > 0) {
  binario.unshift(num%2);
   num = Math.floor(num/2);
}
return binario.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
