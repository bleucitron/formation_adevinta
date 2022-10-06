export default function createLi(tweet) {
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
  return li;
}
