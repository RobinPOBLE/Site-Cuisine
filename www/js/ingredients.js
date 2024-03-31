const minus = document.getElementsByClassName("minus_button")[0];
const plus = document.getElementsByClassName("plus_button")[0];
const number = document.getElementsByClassName("ingredients_button")[0];

const ingredient = document.getElementsByClassName("Ingredient_tile");
const infos = document.getElementsByClassName("Ingredient_tile_content");
const ingr_number = document.getElementsByClassName("count");

let v = number.value;

minus.addEventListener("click",decrease);
plus.addEventListener("click",increase);

loadNumbers();

/*
    décrémenter la valeur du input ou il y a le nombre de personnes
*/
function decrease() {
    let new_v = parseInt(v);
    if (v>1) {
        new_v=new_v-1;
    };
    v = new_v.toString();
    number.value=v;
    loadNumbers();
}

/*
    incrémenter la valeur du input ou il y a le nombre de personnes
*/
function increase() {
    let new_v = parseInt(v);
    if (v<50) {
        new_v=new_v+1;
    };
    v = new_v.toString();
    number.value=v;
    loadNumbers();
}

/*
    update les nombres d'ingrédients
*/
function loadNumbers() {
    for (let i=0; i<infos.length; i+=1) {
        let cur_n=parseFloat(infos[i].getAttribute("data-IngredientCount"));
        console.log("cur_n :",cur_n,"\nvalue :",number.value)
        ingr_number[i].textContent=(Math.round(cur_n*number.value*100)/100).toString();
    }
}