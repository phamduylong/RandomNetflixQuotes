async function load({ data, fetch }) {
  let api = "https://lucifer-quotes.vercel.app/api/quotes";
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
