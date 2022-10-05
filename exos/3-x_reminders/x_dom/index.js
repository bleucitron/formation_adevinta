'use strict';

console.log('Exos DOM');

document.addEventListener(
  'DOMContentLoaded',
  function () {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);

        const div = document.createElement('div');
        div.textContent = tweets[0].full_text;
        document.body.append(div);

        const ol = document.createElement('ol');
        div.replaceWith(ol);

        tweets
          .map(function (tweet) {
            const li = document.createElement('li');
            const textDiv = document.createElement('div');
            const dateDiv = document.createElement('div');
            const authorDiv = document.createElement('div');

            textDiv.textContent = tweet.full_text;
            authorDiv.textContent = tweet.user.name;
            dateDiv.textContent = tweet.created_at;

            textDiv.classList.add('text');
            authorDiv.classList.add('author');
            dateDiv.classList.add('date');

            const ul = document.createElement('ul');
            tweet.entities.hashtags.map(function (hashtag) {
              const li = document.createElement('li');
              li.textContent = '#' + hashtag.text;
              ul.append(li);
            });

            li.classList.add('tweet');
            li.append(textDiv, ul, authorDiv, dateDiv);

            li.addEventListener('mouseenter', function () {
              console.log(tweet.id);
            });
            return li;
          })
          .forEach(function (li) {
            ol.append(li);
          });

        console.log('--- Question 5 ---');
        /**
         * - utiliser l'input pour enregistrer le nom de la personne dans le localStorage
         * - au chargement de la page, si le nom dans le localStorage existe, remplacer le texte du h1 par "Bonjour {nom}"
         */
        const input = document.querySelector('input');
        const h1 = document.querySelector('h1');

        const nom = localStorage.getItem('name');
        if (nom) {
          h1.textContent = nom;
        }

        input.addEventListener('input', function (e) {
          const value = e.target.value;
          localStorage.setItem('name', value);
          h1.textContent = value;
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
