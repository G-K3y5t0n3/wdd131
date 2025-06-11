const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
hp: 48,
attack: 48,
defense: 48,
special_attack: 48,
special_defense: 48,
speed: 48
},
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
// return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
}
};

document.querySelector("#name").textContent = ditto.name;
document.querySelector("#ability").textContent = ditto.abilities;
let dittoImg = document.querySelector("#ditto");
dittoImg.src = ditto.sprite;

dittoImg.addEventListener("click", toggleImg); 

function toggleImg () {
    if (dittoImg.classList.contains("shiny")) {
        dittoImg.classList.remove("shiny");
        dittoImg.src = ditto.sprite;
    } 
    else {
        dittoImg.classList.add("shiny");
        dittoImg.src = ditto.transform();
    }
}