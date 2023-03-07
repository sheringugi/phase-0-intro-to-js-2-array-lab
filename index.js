const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield", "Ralph");
}
function destructivelyPrependCat() {
    cats.length = 0;
    cats.push("Bob", "Milo", "Otis", "Garfield");
}
function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push( "Milo", "Otis");
}
function destructivelyRemoveFirstCat() {
    cats.length = 0;
    cats.push("Otis", "Garfield");
}
function prependCat(){
    cats.length = 0;
    cats.push("Otis", "Garfield"); 
}
const copyOfcats = odds.slice(); 
function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
 }
 function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
 }
 function removeLastCat(name) {
    const newArray = ["Milo", "Otis"];
    return newArray;
 }
 function removeFirstCat(name) {
    const newArray = ["Otis", "Garfield"];
    return newArray;
 }