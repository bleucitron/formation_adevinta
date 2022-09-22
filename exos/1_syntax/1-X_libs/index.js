'use strict';
console.log('Exos 1-6: Libs');

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

function lanceDés(min, max) {
  const n = Math.floor(Math.random() * (max - min + 1)) + min;

  return n;
}

console.log(lanceDés(4, 8));

let has4 = false;
let has8 = false;
for (let i = 0; i < 10000; i++) {
  const n = lanceDés(4, 8);

  if (n === 8) {
    has8 = true;
  }
  if (n === 4) {
    has4 = true;
  }
  if (n < 4 || n > 8) {
    console.error('Erreur', n);
  }
}
console.log('has4', has4);
console.log('has8', has8);

/**
 * 1) Créer une fonction 'lanceDés' qui renvoie un nombre entre 1 et 6.
 *
 * Utiliser
 * - Math.random() (donne un nombre aléatoire >= 0 et < 1)
 * - Math.floor() (tronque le nombre qu'on lui fournit)
 *
 *
 * 2) Utiliser cette fonction pour obtenir un nombre aléatoire entre 1 et 6
 */

/**
 * 3) Modifier la fonction "lanceDés" pour pouvoir choisir la taille du dé (limites inférieures et supérieures)
 */

/**========================================================================
 *                           Noms
 *========================================================================**/
console.log('*** Noms ***');

/**
 * 1) Ajoutez 2 ou 3 personnes au tableaux "personnes", en utilisant .push()
 */
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

personnes.push(
  {
    nom: 'Michel',
    date: '2008-06-21',
  },
  {
    nom: 'Rose',
    date: '1943-03-12',
  },
);

/**
 * 2) Créez un nouveau tableau contenant uniquement les noms des personnes en minuscules,
 * en utilisant .map() et .toLowerCase()
 */

const names = personnes.map(personne => personne.nom.toLowerCase());
console.log('Names', names);

/**
 * 3) Créez un nouveau tableau contenant uniquement les années de naissance,
 * en utilisant .map() et .getFullYear()
 * - transformez la string de date en object Date
 */

const dates = personnes.map(personne => new Date(personne.date).getFullYear());
console.log('Dates', dates);

/**
 * 4) Créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 * et renvoie l'âge en années
 * - un âge est une simple durée, soit la différence entre 2 dates.
 * - commencez par calculer l'âge en millisecondes
 */

function calculerAge(dateString) {
  const ageEnMs = new Date() - new Date(dateString);

  return Math.floor(ageEnMs / 1000 / 60 / 60 / 24 / 365.25);
}

console.log('age', calculerAge(personnes[0].date));

/**
 * 5) À partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges.
 */

const ages = personnes.map(p => calculerAge(p.date));
console.log('ages', ages);

/**========================================================================
 *                           [Bonus] Mot de passe
 *========================================================================**/
console.log('*** [Bonus] Mot de passe ***');

/**
 * 1) En utilisant la fonction "lanceDés", créez une fonction `getLetter`
 * qui renvoie une lettre aléatoire parmi les lettres de l'alphabet.
 * Vous pouvez utiliser la string "letters".
 */

const letters = 'abcdefghijklmnopqrstuvwxyz';

const letter = letters[lanceDés(0, letters.length - 1)];
console.log('Lettre', letter);

/**
 * 2) Créez une fonction "makePassword" qui:
 * - en entrée prend un nombre 'size'
 * - renvoie un string de longueur 'size' construite avec des lettres au hasard
 *
 * Utiliser une boucle for et la fonction "getLetter".
 */

function makePassword(size) {
  let mdp = '';
  for (let i = 1; i <= size; i++) {
    const position = lanceDés(0, letters.length - 1);
    const letter = letters[position];
    mdp += letter;
  }

  return mdp;
}

console.log(makePassword(10));

/**
 * Bonus) Créer une fonction 'makeStrongerPassword' qui:
 * - en entrée prend un nombre 'size' et un booléen 'withNumbers'
 * - renvoie une chaine de caractères avec des lettres aléatoires, selon les règles suivantes.
 *
 * Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
 * Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
 */

function makeStrongerPassword(size, withNumber) {
  let mdp = '';

  if (size < 8) {
    console.warn('Trop simple');
  }

  for (let i = 1; i <= size; i++) {
    if (withNumber && i % 2 === 1) {
      mdp += lanceDés(0, 9);
    } else {
      const position = lanceDés(0, letters.length - 1);
      const letter = letters[position];
      mdp += letter;
    }
  }

  return mdp;
}

console.log(makeStrongerPassword(5, true));
console.log(makeStrongerPassword(5, false));
