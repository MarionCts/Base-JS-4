// Exo 1

const tableau = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    console.log(`${tableau[i]}`);
}

// Exo 2

const tab = [10, 65, 78, 45];
let somme = 0;

function sommeTableau() {
    for(let i = 0 ; i < tab.length ; i++) {
        somme += tab[i];
    }
}

sommeTableau()

console.log(`${somme}`);

// Exo 3

const tableauMots = ["je", "tableau", "inconstitutionnellement"];
let motGagnant = tableauMots[1];

function motPlusLong() {
 for (let i = 0; i < tableauMots.length; i++) {
    if (tableauMots[i].length > motGagnant.length) {
        motGagnant = tableauMots[i];
    }; 
 }
}

motPlusLong();

console.log(`Le mot le plus long du tableau est : ${motGagnant}.`)

// Exo 4

function inverserChaine() {
    let chaine = "vice-versa";
    let inverser = chaine.split('').reverse('').join('');
    console.log(`${inverser}`);
}

inverserChaine();

// Exo 5

