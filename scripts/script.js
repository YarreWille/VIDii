const eeveeArray = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "glaceon", "leafeon", "sylveon"];
const lastEevee = document.querySelector("article.pokedex-rechts button:first-of-type");
const nextEevee = document.querySelector("article.pokedex-rechts button:nth-of-type(2)");
const img = document.querySelector("section.scherm-links section");
const body = document.querySelector("body");
const tekst = document.querySelector("article.pokedex-rechts section:first-of-type > p");
const name = document.querySelector(".keys > section > p");

const tekstArray = [
"Type: Normal\nGeneration: 1\nBio: Evolves into 1 of 8 different pokemon if exposed to certain stones, rocks, leveled up with high friendship or certain moves.\nMore:https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pokémon)",
"Type: Water\nGeneration: 1\nBio: It evolves from an Eevee that is exposed to a Water Stone.\nMore:https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pokémon)",
"Type: Thunder\nGeneration: 1\nBio: It evolves from an Eevee that is exposed to a Thunder Stone.\nMore:https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pokémon)",
"Type: Fire\nGeneration: 1\nBio: It evolves from an Eevee that is exposed to a Fire Stone.\nMore: https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pokémon)",
"Type: Psychic\nGeneration: 2\nBio: It evolves when it is raised to a friendship of 220 or higher and gains a level during the daytime or with a Sun Shard.\nMore:https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pokémon)",
"Type: Dark\nGeneration: 2\nBio: It evolves when it is raised to a friendship of 220 or higher and gains a level during the nighttime or with a Moon Shard.\nMore:https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pokémon)",
"Type: Ice\nGeneration: 4\nBio: Glaceon evolves from Eevee when it is leveled up near an ice-covered rock or exposed to an Ice Stone.\nMore:https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pokémon)",
"Type: Grass\nGeneration: 4\nBio: When an Eevee is leveled up near a large, mossy rock or exposed to a Leaf Stone, it will evolve into this Pokemon.\nMore:https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pokémon)",
"Type: Fairy\nGeneration: 6\nBio: It evolves when leveled up with a Fairy-type move and at least two Affection hearts or at least 160 base happiness.\nMore:https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pokémon)"];

const nameArray = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "glaceon", "leafeon", "sylveon"];

let currentNumb = 0;

const removeData = () => {
    img.classList.remove(`${eeveeArray[currentNumb]}`);
    body.classList.remove(`${eeveeArray[currentNumb]}`);
    tekst.classList.remove("text-typewriter");
}

const addData = () => {
    img.classList.add(`${eeveeArray[currentNumb]}`);
    body.classList.add(`${eeveeArray[currentNumb]}`);
    tekst.textContent = `${tekstArray[currentNumb]}`;
   	name.textContent = `${nameArray[currentNumb]}`;
    
	setTimeout(() => { tekst.classList.add("text-typewriter");}, 250);
}

const changeLastEevee = () => {
    removeData();

    if (currentNumb === 0) {
        currentNumb = eeveeArray.length - 1;
    } else {
        currentNumb--;
    }
    addData();
}

const changeNextEevee = () => {
    removeData();

    if (currentNumb === eeveeArray.length - 1) {
        currentNumb = 0;
    } else {
        currentNumb++;
    }
    addData();
}

lastEevee.addEventListener("click", () => {
    changeLastEevee();
});

nextEevee.addEventListener("click", () => {
    changeNextEevee();
});


