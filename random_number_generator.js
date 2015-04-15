/**
 * Created by lee00531 on 3/12/2015.
 */
var data = [
    {
        id : 0,
        value : "a",
        weight : 1
    }
]; // Can be loaded or typed in
var maxNumber = 10; // Defined with input

var value = Math.floor((Math.random() * 10) + 1);
var text = "";
for (i = 0; i < maxNumber; i++) {
    value = Math.floor((Math.random() * 10) + 1);
    text += "The number is " + value + "<br>";
}

console.log (text);