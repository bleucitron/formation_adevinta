export function isFrenchTweet(tweet) {
  if (!tweet.lang) return false;

  return tweet.lang.startsWith("po");
}
