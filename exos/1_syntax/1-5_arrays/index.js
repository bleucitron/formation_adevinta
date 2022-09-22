'use strict';
console.log('Exos 1-5: Tableaux');

/**========================================================================
 *                           Pop 'n Push
 *========================================================================**/
console.log("*** Pop 'n Push ***");

const nombres = [5, 6, 1, 2, 3, 4, 7];
/**
 * 1) Enlevez des éléments de 'nombres' pour ne garder que [1, 2, 3]
 * 2) Ajoutez des éléments dans 'nombres' pour faire [0, 1, 2, 3, 4, 5, 6]
 */

nombres.pop();
nombres.pop();
nombres.shift();
nombres.shift();
nombres.push(4, 5, 6);
nombres.unshift(0);
console.log('Nombres', nombres);

/**========================================================================
 *                           A7
 *========================================================================**/
console.log('*** A7 ***');

const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/**
 * 1) Logguez chacune des valeurs du tableau speeds dans la console avec une boucle for
 * 2) Faire de même avec une boucle .forEach()
 */

for (let i = 0; i < speeds.length; i++) {
  console.log(speeds[i]);
}

function moins5(n) {
  return n - 5;
}

speeds.forEach(function (speed) {
  console.log(speed);
  const vitesseCorrigee = moins5(speed);
  if (vitesseCorrigee > 130) {
    console.log('Trop vite');
  }
});

speeds.filter(s => moins5(s) > 130).forEach(s => console.log(s, 'trop vite'));

speeds
  .map(moins5)
  .filter(s => s > 130)
  .forEach(s => console.log(s, 'trop vite'));

/**
 * 3) Créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
 * 4) Changer la boucle de la question 2 pour corriger chaque vitesse avec la fonction 'moins5'.
 * Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
 */

/**========================================================================
 *                           Conversions
 *========================================================================**/
console.log('*** Conversions ***');

/**
 * 1) Créez un nouveau tableau avec les vitesses en m/s, en utilisant une boucle for.
 * 2) Même chose, en utilisant une boucle for of.
 * 3) Même chose, en utilisant .map().
 */
const kmHtoms = 1000 / 3600; // conversion de km/h à m/s

const t1 = [];
for (let i = 0; i < speeds.length; i++) {
  const s = speeds[i];
  t1.push(s * kmHtoms);
}
console.log('T1', t1);

const t2 = [];
for (let speed of speeds) {
  t2.push(speed * kmHtoms);
}
console.log('T2', t2);

const t3 = speeds.map(speed => speed * kmHtoms);
console.log('T3', t3);

/**
 * 4) Créez un tableau filtré (avec .filter) avec uniquement les vitesses en km/h supérieures à 130 km/h
 */

const t4 = speeds.filter(speed => speed > 130);
console.log('T4', t4);

/**
 * 5) Créez une fonction pour transformer une vitesse en km/h en vitesse en noeud;
 * 6) Utilisez cette fonction pour créer un tableau des vitesses en noeuds
 */

function toNoeud(s) {
  return s / ndTokmH;
}

const ndTokmH = 1.852; // 1 noeud vaut 1.852 km/h

const t5 = speeds.map(toNoeud);
console.log('T5', t5);

/**========================================================================
 *                           [Bonus] Pokemons
 *========================================================================**/
console.log('*** [Bonus] Pokemons ***');

/**
 * 1) Trouvez toutes les types uniques de Pokemons à partir du tableau de données pokemons
 */
import { pokemons } from '../../utils/index.js';

console.log('Pokemons', pokemons[0]);

const types = pokemons.map(p => p.types.map(e => e.type.name)).flat();
const uniqueTypes = Array.from(new Set(types));

// const uniqueTypes = [];

// types.forEach(type => {
//   if (!uniqueTypes.includes(type)) {
//     uniqueTypes.push(type);
//   }
// });

console.log('Types', types);
console.log('uniqueTypes', uniqueTypes);
