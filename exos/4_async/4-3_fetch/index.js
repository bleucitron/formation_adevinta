'use strict';
console.log('Exos 4-3: Fetch');

/**========================================================================
 *                           Meta HTML
 *========================================================================**/
console.log('*** Meta HTML ***');

/**
 * 1) Utilisez fetch pour récupérer la page test.html
 * - utiliser .text()
 * 2) Affichez le contenu de la page récupérée dans un <p>
 */

fetch('./test.html').then(async function (resp) {
  const content = await resp.text();
  const p = document.createElement('p');
  p.textContent = content;
  document.body.append(p);
});

/**========================================================================
 *                           Star Wars
 *========================================================================**/
console.log('*** Star Wars ***');

/**
 * 1) Utilisez fetch pour récupérer les données contenues à cette adresse
 * - utilisez .json()
 * 2) Affichez les infos principales du personnage dans votre page
 */
const starWarsUrl = 'https://swapi.dev/api/people/1/';
fetch('https://swapi.dev/api/people/1/').then(async function (resp) {
  const data = await resp.json();
  const p = document.createElement('p');
  p.textContent = data.name + data.height;
  document.body.append(p);
});

/**
 * Bonus) Créez une fonction qui permet de récupérer les infos de n'importe quel personnage:
 * - en entrée, fournir un numéro
 * - en sortie, renvoyer les infos traitées (= passées par .json())
 * Affichez dans la page les infos des 5 premiers personnages
 */

const baseStarWarsUrl = 'https://swapi.dev/api/people/';

function getPerso(nb) {
  return fetch(baseStarWarsUrl + nb).then(function (resp) {
    return resp.json();
  });
}

[1, 2, 3, 4, 5].forEach(function (n) {
  getPerso(n).then(perso => {
    const p = document.createElement('p');
    p.textContent = perso.name + perso.height;
    document.body.append(p);
  });
});

/**========================================================================
 *                           Svelte
 *========================================================================**/
console.log('*** Svelte ***');

/**
 * 1) Comptez le nombre de tweets dont le texte inclut "Svelte" à l'adresse suivante.
 */

const tweetsUrl =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';
