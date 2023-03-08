const fetchUsd = async (curr) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${curr}`
    );
    const data = await response.json();
    console.log(`USD ${data.market_data.current_price.rub} Руб`);
  } catch (e) {
    console.log(`USD 0 Руб`);
  }
};

const getUsdPrice = async () => {
  return await fetchUsd("usd");
};

getUsdPrice();
