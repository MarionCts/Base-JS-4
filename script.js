// Exo 1

const tableau = [1, 2, 3, 4, 5];

for (let i = 0; i < tableau.length; i++) {
    console.log(`${tableau[i]}`);
}

// Exo 2

const tab = [10, 65, 78, 45];
let somme = 0;

function sommeTableau(tableau) {
    for(let i = 0 ; i < tableau.length ; i++) {
        somme += tableau[i];
    }
    return somme;
}

console.log(`${sommeTableau(tab)}`);

// Exo 3

const tableauMots = ["je", "tableau", "anticonstitutionnellement"];
let motGagnant = tableauMots[0];

function motPlusLong(tableau) {
 for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].length > motGagnant.length) { // on compare la longueur du mot actuel du tableau avec la longueur du mot précédent dans le tableau
        motGagnant = tableau[i];
    }; 
 }
}

motPlusLong(tableauMots);

console.log(`Le mot le plus long du tableau est : ${motGagnant}.`)

// Exo 4

function inverserChaine() {
    let chaine = "vice-versa";
    let inverser = chaine.split('').reverse('').join(''); // on déconstruit les lettres du mots dans un tableau, dont on inverser l'ordre, puis qu'on rassemble en une chaîne de caractères
    console.log(`${inverser}`);
}

inverserChaine();

// Exo 5

const motChaine = "Perroquet";
const voyelles = ["a", "e", "i", "o", "u", "y"];
let nombreVoyelles = 0;

function compterVoyelles() {
    let comptage = motChaine.split('');
    for (let i = 0; i < comptage.length; i++) {
        if (voyelles.includes(comptage[i])) { 
            nombreVoyelles++; // on parcourt le tableau voyelles et si le mot décompensé de comptage en contient une, alors on rajoute +1 à nombreVoyelles
        } 
    }
}

compterVoyelles();

console.log(`Il y a ${nombreVoyelles} voyelles dans le mot ${motChaine}.`);

// Exo 6

const tableauPairs = [5, 4, 6, 78, 95, 59, 41, 12, 15, 32];
let tableauFinal = [];

function nombrePairs(tableau) {
    for (let i = 0 ; i < tableau.length ; i++) {
        if (tableau[i] % 2 === 0) {
            tableauFinal.push(tableau[i]);
        }
    }
    return tableauFinal;
}


console.log(nombrePairs(tableauPairs));

// Exo 7

const aliments = {
    fruit: "nectarines",
    legume: "petits pois",
    viande: "poulet"
};

const compteur = [];

function compterProprietes() {
    return Object.keys(aliments).length;
}

console.log(compterProprietes(aliments));

// Exo 8

let produitsFinis = [];

let produits = [
{ nom: "Stylo", prix: 2 },
{ nom: "Cahier", prix: 5 },
{ nom: "Gomme", prix: 1 }
];

function extraireNoms (tableau) {
    for (let objet of tableau) {
        produitsFinis.push(objet.nom);
        
    }
}

extraireNoms(produits);

console.log(`${produitsFinis}`);

// Exo 9

let resultat = 1;

function factorielle(n) {
    for (let i = 1 ; i <= n; i++) {
        resultat *= i;
        
    }
    return resultat;
}

console.log(`${factorielle(5)}`);


// Exo 10

const tableauLettres = ["a", "b", "c"];

function estTrie(tableau) {
    
    for (let i = 0; i < (tableau.length - 1); i++) {
        if (tableau[i] > tableau[i + 1]) {
            return false;
        } 
    }
    return true;
}

console.log(estTrie(tableauLettres));