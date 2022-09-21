'use strict';
console.log('Exos 1-3: Boucles');

/**========================================================================
 *                           Assurance vie
 *========================================================================**/
console.log('*** Assurance vie ***');

/**
 * 1) Créez une variable money, l'initialiser à 10000
 * 2) Créez une boucle for qui multiplie money par 1.02 tous les 6 mois pendant 30 ans
 * 3) Afficher le résultat
 */

let money = 10000;

for (let i = 0; i <= 30; i += 0.5) {
  money *= 1.02;
}
console.log('money', money);

/**========================================================================
 *                           Paires
 *========================================================================**/
console.log('*** Paires ***');

/**
 * 1) Affichez toutes les paires possibles de nombres entre 0 et 9.
 * (1, 2) et (2, 1) sont considérées 2 paires différentes.
 */

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    console.log('I', i, 'J', j);
  }
}

/**========================================================================
 *                           Carte Bleue
 *========================================================================**/
console.log('*** Carte bleue ***');

/**
 * 1) Créez une variable argent, l'initialiser à 1000
 * 2) Créez une variable cout, l'initialiser à 30
 * 3) À l'aide d'une boucle while, déduire de la variable argent le cout,
 * en vérifiant que l'opération soit toujours possible
 * 4) Combien d'opérations ont pu être effectuées avant de ne plus pouvoir payer ?
 */

let argent = 1000;
const cout = 30;
let nb = 0;

while (argent >= cout) {
  argent -= 30;
  nb++;
}

console.log('Argent restant', argent);
console.log('Nb', nb);

/**
 * Bonus 1) Comment retrouver le résultat précédent avec une boucle for ?
 * Bonus 2) Comment retrouver ce résultat précédent sans aucune boucle ?
 */
let argent2 = 1000;
const cout2 = 30;
let nb2 = 0;

for (let money2 = 1000; money2 >= cout; money2 -= cout2) {
  nb2++;
}
console.log('Argent restant', argent2);
console.log('Nb', nb2);

console.log(Math.trunc(1000 / 30));

/**========================================================================
 *                           [Bonus] Mastercard
 *========================================================================**/
console.log('*** [Bonus] Mastercard ***');

/**
 * 1) Reproduisez l'exercice précédent, avec le changement suivant:
 * - après chaque opération le coût augmente de 5%
 * tant que l'argent restant est plus grand strictement que 500
 * - sinon, le coût diminue de 15%
 * - le coût ne peut pas être plus grand que 45 ni plus petit que 15
 *
 * Combien reste t'il d'argent à la fin des achats ?
 * Combien de fois a t'on payé plus que 30€ ? Moins que 30€ ?
 */
