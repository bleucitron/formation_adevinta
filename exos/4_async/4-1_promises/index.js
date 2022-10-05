'use strict';
console.log('Exos 4-1: Promesses');

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

/**
 * 1) Créer une Promesse qui renvoie au bout de 2s un nombre entier aléatoire
 * - le nombre doit être entre 0 et 9
 * - si ce nombre est pair, le résoudre
 * - sinon le rejeter
 * Utiliser setTimeout().
 * 2) Consommer la Promesse de 1) pour:
 * - afficher le nombre renvoyé quand elle résoud
 * - logguer un message d'erreur quand elle est rejetée

/**========================================================================
 *                            Calcul aléatoire
 *========================================================================**/
console.log('*** Calcul aléatoire ***');

/**
 * 1) En se servant de l'exercice précédent, créer une fonction qui renvoie une promesse
 * d'avoir un nombre aléatoire au bout de 2s
 * 2) Créer 3 nombres aléatoires, et calculer leur somme
 */

const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const n = Math.floor(Math.random() * 10);

    if (n % 2 === 0) {
      resolve(n);
    } else {
      reject(n);
    }
  }, 2000);
});

p.then(function (valeurPromise) {
  console.log('Cool', valeurPromise);
}).catch(function (err) {
  console.error('Pas cool', err);
});

/**========================================================================
 *                           [Bonus] Attente incertaine
 *========================================================================**/
console.log('*** [Bonus] Attente incertaine ***');

/**
 * 1) Créez une Promesse qui:
 * - crée un nombre aléatoire (delay) en 0 et 5000
 * - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
 * - au bout de delay ms pour résoudre le nombre delay
 * 2) Consommez la Promesse de sorte que si elle est rejetée,
 * on recommence jusqu'à ce qu'elle résolve
 */

function makePromise() {
  const p1 = new Promise(function (resolve, reject) {
    const delay = Math.floor(Math.random() * 5000);

    const t1 = setTimeout(function () {
      clearTimeout(t2);
      console.log('T1');
      resolve(delay);
    }, delay);

    const t2 = setTimeout(function () {
      clearTimeout(t1);
      console.log('T2');
      reject('Trop long...');
    }, 2000);
  });

  p1.then(function (vp) {
    console.log('cool', vp);
  }).catch(function (err) {
    console.error(err);
    makePromise();
  });
}

makePromise();
