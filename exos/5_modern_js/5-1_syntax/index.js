'use strict';
console.log('Exos 5-1: Syntaxes modernes');

/**========================================================================
 *                           Arrows
 *========================================================================**/
console.log('*** Arrows ***');

/**
 * Transformez ces fonctions en leur équivalent fléché
 */

// function bjr() {
//   console.log('Bonjour !');
// }

const bjr = () => console.log('Bonjour !');

// function plus10(x) {
//   return x + 10;
// }

const plus10 = x => x + 10;

// function addition(x, y) {
//   return x + y;
// }

const addition = (x, y) => x + y;

// function multiplex(x, y) {
//   console.log('result', x * y);
//   return x * y;
// }

const multiplex = (x, y) => {
  console.log('result', x * y);
  return x * y;
};

// function createPerson(nom, prenom) {
//   return {
//     nom: nom,
//     prenom: prenom,
//   };
// }

const createPerson = (nom, prenom) => ({ nom, prenom });

/**========================================================================
 *                           Destructure moi !
 *========================================================================**/

const movie = {
  name: 'Les aristochats',
  released: 1970,
  studio: 'Disney',
};

const game = {
  name: 'Starcraft',
  released: 1998,
  studio: 'Blizzard',
  genre: 'rts',
  platforms: ['pc', 'mac'],
};

const years = [1978, 1986, 2011, 2018, 2021];

/**
 * Simplifier les assignations suivantes
 */

// const name = movie.name;
// const released = movie.released;
// const studio = movie.studio;

const { name, released, studio } = movie;

// const nom = game.name;
// const date = game.released;
// const other = {
//   studio: game.studio,
//   genre: game.genre,
//   platforms: ['pc', 'mac', 'n64'],
// };

const { name: nom, released: date, ...rest } = game;
const other = { ...rest, platforms: ['pc', 'mac', 'n64'] };

// const firstYear = years[0];
// const secondYear = years[1];
// const otherYears = [years[2], years[3], years[4]];

const [firstYear, secondYear, ...otherYears] = years;

/**========================================================================
 *                           Fuuu-sion !
 *========================================================================**/

const l1 = [1, 2, 3];
const l2 = [4, 5, 6];
const l3 = [7, 8, 9];
const l4 = [10, 11, 12];

const adminInfos = {
  firstName: 'Paul',
  familyName: 'McCartney',
  birthDate: '1942-06-19',
  nationality: 'uk',
};
const musicInfos = {
  bands: ['The Beatles', 'The Wings'],
  instruments: ['bass', 'guitar', 'piano'],
};

/**
 * Simplifier les assignations suivantes
 */

// const allLs = l1.concat(l2).concat(l3).concat(l4);

const allLs = [...l1, ...l2, ...l3, ...l4];

// const paul = {
//   firstName: adminInfos.firstName,
//   familyName: adminInfos.familyName,
//   birthDate: adminInfos.birthDate,
//   nationality: adminInfos.nationality,
//   bands: musicInfos.bands,
//   instruments: musicInfos.instruments,
// };

const paul = {
  ...adminInfos,
  ...musicInfos,
};

/**========================================================================
 *                           All at once
 *========================================================================**/

/**
 * Tirer profit au maximum des syntaxes modernes pour simplifier la définition de cette fonction
 */

// function clone(personne, nbAnnees) {
//   console.log('Nom', personne.nom);
//   console.log('Prénom', personne.prenom);
//   console.log('Âge', personne.age);
//   console.log('nbAnnees', nbAnnees);

//   if (!nbAnnees) {
//     nbAnnees = 1;
//   }

//   const leClone = {
//     nom: personne.nom,
//     prenom: personne.prenom,
//     age: personne.age + nbAnnees,
//   };

//   return leClone;
// }

const clone = (personne, nbAnnees = 1) => {
  const { nom, prenom, age } = personne;

  console.log('Nom', nom);
  console.log('Prénom', prenom);
  console.log('Âge', age);
  console.log('nbAnnees', nbAnnees);

  const clone = {
    ...personne,
    age: age + nbAnnees,
  };

  return clone;
};
