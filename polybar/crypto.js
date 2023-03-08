const currArr = ["ethereum"];

const fetchPrice = async (curr) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${curr}`
    );
    const data = await response.json();
    console.log(`ETH $${data.market_data.current_price.usd}`);
  } catch (e) {
    console.log(`ETH $0`);
  }
};

currArr.forEach(async (curr) => {
  return await fetchPrice(curr);
});
