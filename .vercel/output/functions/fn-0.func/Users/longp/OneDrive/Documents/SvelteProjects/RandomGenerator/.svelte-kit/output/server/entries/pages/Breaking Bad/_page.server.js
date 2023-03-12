async function load({ data, fetch }) {
  let api = "https://api.breakingbadquotes.xyz/v1/quotes";
  const response = await fetch(api, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const quote = await response.json();
  return {
    content: quote
  };
}
export {
  load
};
