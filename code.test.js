const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var a1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",] 
var a2 = ["a","b","r","d","e","f","g","r","i","j","k","l","m","n","o","p","q","r","s","r","u","v","w","x","y","r"] 
var a3 = [1,2,3,4,5,6,7,8,9,10,10,10,10] 
var a4 = ["a"] 
var a5 = [1,4,6,7,8,3,2,9,10,11,4,3,2,6,8,13,12,4] 
var a6 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","z","w","x","y","z",
          "a","b","z","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","z","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","z","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","z","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","z","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","z","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","z","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","z","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","z","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","z","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","z","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
          "a","b","c","d","e","f","g","h","i","z","k","l","m","n","o","z","q","r","s","t","u","v","w","x","y","z"] 


countMatchesAsync(a1, "r", function(result) {
    assert(result == 1, `Error : Expected (1), Actual (${result})`);
});

countMatchesAsync(a2, "r", function(result) {
    assert(result == 5, `Error : Expected (5), Actual (${result})`);
});

countMatchesAsync(a3, 10, function(result) {
    assert(result == 4, `Error : Expected (4), Actual (${result})`);
});

countMatchesAsync(a4, "a", function(result) {
    assert(result == 1, `Error : Expected (1), Actual (${result})`);
});

countMatchesAsync(a5, 4, function(result) {
    assert(result == 3, `Error : Expected (1), Actual (${result})`);
});

countMatchesAsync(a6, "z", function(result) {
    assert(result == 40, `Error : Expected (40), Actual (${result})`);
});

countMatchesAsync(a6, "a", function(result) {
    assert(result == 26, `Error : Expected (26), Actual (${result})`);
});

countMatchesAsync(a6, "az", function(result) {
    assert(result == 0, `Error : Expected (0), Actual (${result})`);
});










