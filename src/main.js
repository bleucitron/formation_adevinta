import getJson from "./getJson.js";
import { isFrenchTweet } from "./utils.js";
import createOl from "./createOl.js";
import createFilterButton from "./createFilterButton.js";
import createTrackingButton from "./createTrackingButton.js";

const urls = [
  "https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json",
  "https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json",
];
const promises = urls.map(getJson);

Promise.all(promises)
  .then(function (tweets) {
    tweets = tweets.flat();
    console.log("Le tableau de tweet", tweets);

    let isFr = false;

    let ol = createOl(tweets);
    const filterButton = createFilterButton({
      label: "Filtre",
      handleClick: () => {
        const tweetsToDisplay = isFr ? tweets : tweets.filter(isFrenchTweet);

        const newOl = createOl(tweetsToDisplay);
        isFr = !isFr;
        ol.replaceWith(newOl);
        ol = newOl;
      },
    });

    const trackingButton = createTrackingButton();

    document.body.append(trackingButton);
    document.body.append(filterButton);
    document.body.append(ol);

    // ### BONUS : LOCALSTORAGE ###

    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
  })
  .catch(function (e) {
    console.error(e);
  });
