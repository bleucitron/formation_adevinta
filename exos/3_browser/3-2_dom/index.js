'use strict';
console.log('Exos 3-2: DOM');

const i = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(i);
}, 5000);
/**========================================================================
 *                           Chirugie
 *========================================================================**/
console.log('*** Chirurgie ***');

/**
 * 1) Changez le texte et la couleur du background de l'élément avec l'id 'coucou'
 * 2) Comptez les éléments de type 'i'
 * 3) Comptez les 'i' gris, bleus, et rouge
 * 4) Supprimez les éléments avec la classe 'inutile', ainsi que les i bleus et rouge
 * 5) Créez un élément de type 'p', avec:
 * - votre ville en textContent
 * - la classe 'blue'
 * - ajoutez cet élément en dernier enfant du footer
 * 6) Créez un élément de type 'h3', avec:
 * - 'Infos' en textContent
 * - la classe 'red'
 * - ajoutez cet élément en premier enfant du footer
 * Bonus) Créez 15 éléments de type 'div', avec la classe 'numero'.
 * - Ajoutez en textContent de ces éléments leur numero (entre 1 et 15) et ajoutez les à la 2e section
 */

const coucou = document.getElementById('coucou');
coucou.style.color = 'orange';
coucou.style.backgroundColor = 'darkblue';
coucou.style.padding = '1rem';

const iElements = document.querySelectorAll('i');
console.log(iElements.length);

const redElements = document.querySelectorAll('.red');
const nRed = redElements.length;

const blueElements = document.querySelectorAll('.blue');
const nBlue = blueElements.length;

console.log({
  total: iElements.length,
  nRed,
  nBlue,
  nGrey: iElements.length - nRed - nBlue,
});

redElements.forEach(e => {
  e.remove();
});
blueElements.forEach(e => {
  e.remove();
});

const inutiles = document.querySelectorAll('.inutile');
inutiles.forEach(e => {
  e.remove();
});

const footer = document.querySelector('footer');

const ville = document.createElement('p');
ville.textContent = 'Bordeaux';
ville.classList.add('blue');

footer.append(ville);

const h3 = document.createElement('h3');
h3.textContent = 'Infos';
h3.classList.add('red');

footer.prepend(h3);

const sections = document.querySelectorAll('section');
const section1 = sections[0];
const section2 = sections[1];
for (let i = 1; i <= 15; i++) {
  const n = document.createElement('div');
  n.classList.add('numero');
  n.textContent = i;

  section2.append(n);
}

// const toRemove = document.querySelectorAll('.inutile, .red, .blue');
// toRemove.forEach(e => {
//   e.remove();
// });

/**========================================================================
 *                           [BONUS] Article
 *========================================================================**/
console.log('*** [BONUS] Article ***');

/**
 * 1) Déplacer l'article dans la 1ère section
 * 2) Reproduire programmatiquement l'élément d'article, et l'ajouter à la 2e section
 */

const article = document.querySelector('article');
section1.append(article);

function createArticle(title) {
  const a = document.createElement('article');
  const newH3 = document.createElement('h3');
  newH3.textContent = title;

  const div = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  div.classList.add('content');
  div.append(p1, p2);
  p1.textContent = "Les cornichons c'est bon";
  p2.textContent = 'Mais moins que les pates';

  const newFooter = document.createElement('footer');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');

  newFooter.append(div1, div2);
  div1.textContent = 'Paul P.';
  div1.classList.add('author');
  div2.textContent = 'Une autre date';
  div2.classList.add('date');

  a.append(newH3, div, newFooter);

  return a;
}

section1.append(createArticle('Hello'));
section1.append(createArticle('Cava ?'));
section1.append(createArticle('OUI'));
