'use strict';
console.log('Exos 3-4: Stockage');

/**========================================================================
 *                           Who are you  ?
 *========================================================================**/
console.log('*** Who are you ? ***');

const id = localStorage.getItem('id')
  ? JSON.parse(localStorage.getItem('id'))
  : {};

const nameSpan = document.querySelector('#hello span:first-of-type');
const familyNameSpan = document.querySelector('#hello span:last-of-type');
nameSpan.textContent = id.name;
familyNameSpan.textContent = id.familyName;

console.log(nameSpan);
const input = document.querySelector('#name');
input.addEventListener('input', e => {
  const value = e.target.value;
  nameSpan.textContent = value;

  id.name = e.target.value;
  localStorage.setItem('id', JSON.stringify(id));
});

const familyInput = document.querySelector('#familyName');
familyInput.addEventListener('input', e => {
  const value = e.target.value;
  familyNameSpan.textContent = value;

  id.familyName = e.target.value;
  localStorage.setItem('id', JSON.stringify(id));
});

/**
 * 1) Utilisez l'input pour stocker votre nom dans le localStorage
 * 2) Affichez dans le <span> de l'élément #hello le nom lu depuis le localStorage
 * 3) Modifiez votre code pour également stocker le nom de famille, le tout devant être stocké dans un même objet {name, familyName}
 */

/**========================================================================
 *                           [Bonus] Contrôle parental
 *========================================================================**/
console.log('*** [Bonus] Contrôle parental ***');

/**
 * 1) Affichez le temps total passé sur la page
 */

let time = localStorage.getItem('time') ?? 0;

const timeSpan = document.querySelector('#time span');
timeSpan.textContent = time;

setInterval(() => {
  time++;
  localStorage.setItem('time', time);
  timeSpan.textContent = time;
}, 1000);
