function convertCADtoUSD(cadAmount, exchangeRate) {
    if (isNaN(cadAmount) || isNaN(exchangeRate)) {
      console.log("Invalid input. Please provide valid numbers.");
      return;
    }
  
    const usdAmount = cadAmount * exchangeRate;
  
    return usdAmount;
  }
  const cadAmount = 100;
  const exchangeRate = 0.78;
  
  const usdAmount = convertCADtoUSD(cadAmount, exchangeRate);
  
  console.log(`${cadAmount} CAD is equal to ${usdAmount.toFixed(2)} USD at an exchange rate of ${exchangeRate}.`);
  