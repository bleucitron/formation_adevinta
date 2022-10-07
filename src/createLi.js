export default function createLi(tweet) {
  const {
    full_text: text,
    user,
    created_at: createdAt,
    entities: { hashtags },
  } = tweet;

  const li = document.createElement("li");
  const textDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const authorDiv = document.createElement("div");

  textDiv.textContent = text;
  authorDiv.textContent = user.name;
  dateDiv.textContent = createdAt;

  textDiv.classList.add("text");
  authorDiv.classList.add("author");
  dateDiv.classList.add("date");

  const ul = document.createElement("ul");
  hashtags.forEach(function (hashtag) {
    const li = document.createElement("li");
    li.textContent = "#" + hashtag.text;
    ul.append(li);
  });

  li.classList.add("tweet");
  li.append(textDiv, ul, authorDiv, dateDiv);
  return li;
}
