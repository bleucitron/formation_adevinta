'use strict';
console.log('Exos 1-4: Fonctions');

/**========================================================================
 *                           Bonjour
 *========================================================================**/
console.log('*** Bonjour ***');

/**
 * 1) Créer une fonction 'direBonjour' qui:
 * - prend un 'nom' en entrée
 * - renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
 *
 * 2) Utiliser cette fonction avec votre prénom en logguant son résultat
 */

function direBonjour(nom) {
  return 'Bonjour ' + nom;
}

console.log(direBonjour('Romain'));
/**========================================================================
 *                           Somme
 *========================================================================**/
console.log('*** Somme ***');

/**
 * 1) Créer une fonction 'somme' qui:
 * - prend 2 nombres en arguments
 * - renvoie la somme des deux nombres.
 *
 * 2) Utiliser cette fonction sur deux nombres de votre choix
 */

function somme(a, b) {
  return a + b;
}
console.log(somme(2, 5));

/**========================================================================
 *                           Pourcentage
 *========================================================================**/
console.log('*** Pourcentage ***');

/**
 * 1) Créez une fonction "calculer" qui:
 * - prend un nombre en entrée
 * - renvoie ce nombre augmenté de 13%
 *
 * 2) Utilisez cette fonction sur un nombre de votre choix,
 * et afficher son résultat dans la console
 */

function calculer(n, p) {
  return n * (1 + p / 100);
}

/**
 * 3) Modifier la fonction "calculer" pour pouvoir choisir également le pourcentage appliqué
 */

console.log(calculer(100, 13));
/**========================================================================
 *                           [Bonus] Limite
 *========================================================================**/
console.log('*** [Bonus] Limite ***');

/**
 * 1) Créer une fonction 'limit' qui:
 * - prend en entrée un nombre de départ
 * - divise ce nombre par 2 jusqu'à ce que le nombre soit plus petit que 1 / 1_000_000
 * - renvoie le nombre de fois où on a divisé.
 */

function limit(n, l, t) {
  let nb = 0;
  while (n - l > 1 / t) {
    n = (n - l) / 2;
    nb++;
  }

  return nb;
}

console.log(limit(10_000_000, 5000, 1_000));

/**
 * Dans la question précédente, la limite était 0, et la tolérance 1 / 1_000_000
 * 2) Modifier la fonction 'limit' pour pouvoir fournir en entrée:
 * - une limite
 * - une tolérance
 */

/**
 * 3) Modifier la fonction "limit" pour faire la même chose sans aucune boucle.
 */

/**========================================================================
 *                           [Bonus] Say Hello
 *========================================================================**/
console.log('*** [Bonus] Say Hello ***');

const languages = ['fr', 'es', 'de', 'it', 'jp'];

/**
 * 1) Créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
 * et qui, en fonction de la langue, renvoie une fonction anonyme.
 * - la fonction anonyme doit prendre en entrée un 'name'
 * - la fonction anonyme doit renvoyer une string de type "Bonjour [name]"
 * - si on ne passe pas de langue, ou si la langue n'est pas reconnue, utiliser l'anglais par défaut
 * 2) Utiliser "prepareHello" pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues
 * 3) Tester les fonctions créées
 */

function prepareHello(lang) {
  switch (lang) {
    case 'fr': {
      return nom => 'Bonjour ' + nom;
    }
    case 'es': {
      return nom => 'Hola ' + nom;
    }
    default: {
      return nom => 'Hello ' + nom;
    }
  }

  // if (lang === 'fr') {
  //   return function (nom) {
  //     return 'Bonjour ' + nom;
  //   };
  // } else if (lang === 'es') {
  //   return function (nom) {
  //     return 'Hola ' + nom;
  //   };
  // } else {
  //   return function (nom) {
  //     return 'Hello ' + nom;
  //   };
  // }
}

const fonctions = [];

for (let i = 0; i < languages.length; i++) {
  fonctions.push(prepareHello(languages[i]));
}

console.log(fonctions[0]('Romain'));
console.log(fonctions[1]('Romain'));
console.log(fonctions[2]('Romain'));
console.log(fonctions[3]('Romain'));
