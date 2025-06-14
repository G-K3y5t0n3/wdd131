const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

document.querySelector(".image").src = character.image;
document.querySelector(".name").textContent = character.name;
document.querySelector("#class").textContent = character.class;
document.querySelector("#level").textContent = character.level;
document.querySelector("#health").textContent = character.health;

const atkButton = document.querySelector("#attacked");

function damageTaken() {
    character.attacked();
    document.querySelector("#health").textContent = character.health;
    console.log('atkButton works!');
}

atkButton.addEventListener('click', damageTaken);

const lvlUpButton = document.querySelector("#levelup");

function characterLvlUp() {
    character.levelUp();
    document.querySelector("#level").textContent = character.level
    document.querySelector("#health").textContent = character.health;
    console.log('lvlUpButton works!');
}

lvlUpButton.addEventListener('click', characterLvlUp);