'use strict';
console.log('Exos 4-2: async / await');

/**========================================================================
 *                           Copycat
 *========================================================================**/
console.log('*** Copycat ***');

/**
 * 1) Reprendre les exercices de 4-1, mais avec unniquement async/await
 */

/**
 * 1) Créer une Promesse qui renvoie un nombre aléatoire au bout de 2 secondes.
 * - si ce nombre est pair, le résoudre
 * - sinon le rejeter
 * Utiliser setTimeout().
 * 2) Consommer la Promesse de 1) pour:
 * - afficher le nombre renvoyé quand elle résoud
 * - logguer un message d'erreur quand elle est rejetée
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

async function consomme() {
  try {
    const n = await p;
    console.log('Nombre', n);
  } catch (error) {
    console.error('blabla', error);
  }
}

consomme();
