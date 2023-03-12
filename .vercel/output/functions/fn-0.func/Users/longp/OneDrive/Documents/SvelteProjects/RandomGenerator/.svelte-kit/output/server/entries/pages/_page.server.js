const trailingSlash = "always";
async function load({ data, fetch }) {
  const urls = [
    "https://bcs-quotes.vercel.app/api/quotes",
    "https://lucifer-quotes.vercel.app/api/quotes",
    "https://strangerthings-quotes.vercel.app/api/quotes",
    "https://api.breakingbadquotes.xyz/v1/quotes"
  ];
  const rand_idx = Math.floor(Math.random() * urls.length);
  const rand_res = urls[rand_idx];
  const response = await fetch(rand_res);
  const quote = await response.json();
  switch (rand_idx) {
    case 0:
      quote[0].series = "Better Call Saul (2015)";
      break;
    case 1:
      quote[0].series = "Lucifer (2016)";
      break;
    case 2:
      quote[0].series = "Stranger Things (2016)";
      break;
    case 3:
      quote[0].series = "Breaking Bad (2019)";
    default:
      quote[0].series = "Unknown";
      break;
  }
  return { content: quote };
}
export {
  load,
  trailingSlash
};
