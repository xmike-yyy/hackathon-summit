// Apple
const appleStock = {
    name: 'Apple',
    2020: 75,
    2023: 130
  };
  
  // Google
  const googleStock = {
    name: 'Google',
    2020: 68,
    2023: 88
  };
  
  // Amazon
  const amazonStock = {
    name: 'Amazon',
    2020: 94,
    2023: 84
  };
  
  // Capital One
  const capitalOneStock = {
    name: 'Capital One',
    2020: 102,
    2023: 50000
  };
  
  // JP Morgan
  const jpMorganStock = {
    name: 'JP Morgan',
    2020: 138,
    2023: 137
  };
  
  // Niko
  const nikoStock = {
    name: 'Niko',
    2020: 50,
    2023: 85
  };
  
  // Walmart
  const walmartStock = {
    name: 'Walmart',
    2020: 119,
    2023: 141
  };
  
  // Target
  const targetStock = {
    name: 'Target',
    2020: 129,
    2023: 149
  };
  
  // Costco
  const costcoStock = {
    name: 'Costco',
    2020: 290,
    2023: 456
  };
  
  // Dominoes
  const fiveGuysStock = {
    name: 'Five Guys',
    2020: 290,
    2023: 346
  };
  
  // McDonald's
  const mcdonaldsStock = {
    name: "McDonald's",
    2020: 198,
    2023: 263
  };
  
  // Chipotle
  const chipotleStock = {
    name: 'Chipotle',
    2020: 850,
    2023: 1400
  };

 var budget1 = document.getElementById('player1Budget');
  var budget2 = document.getElementById('player2Budget');
  var verified = false;


document.getElementById('calculateButton').addEventListener('click', function() {
    // Simplified JavaScript to fetch values from stock inputs

    budget1.textContent = '$10,000'; // Or use innerHTML if you need to include HTML tags
    budget1.style.color = 'white';
  
    budget2.textContent = '$10,000'; // Or use innerHTML if you need to include HTML tags
    budget2.style.color = 'white';

    let p1 = new Array(12);
    let p2 = new Array(12);

    p1[0] = document.getElementById('player1AppleStocks').value * appleStock['2020'];
    p2[0] = document.getElementById('player2AppleStocks').value * appleStock['2020'];

    p1[1] = document.getElementById('player1GoogleStocks').value * googleStock['2020'];
    p2[1] = document.getElementById('player2GoogleStocks').value * googleStock['2020'];

    p1[2] = document.getElementById('player1AmazonStocks').value * amazonStock['2020'];
    p2[2] = document.getElementById('player2AmazonStocks').value * amazonStock['2020'];

    p1[3] = document.getElementById('player1CapitalOneStocks').value * capitalOneStock['2020'];
    p2[3] = document.getElementById('player2CapitalOneStocks').value * capitalOneStock['2020'];

    p1[4] = document.getElementById('player1jpMorganStocks').value * jpMorganStock['2020'];
    p2[4] = document.getElementById('player2jpMorganStocks').value * jpMorganStock['2020'];

    p1[5] = document.getElementById('player1MSStocks').value * nikoStock['2020'];
    p2[5] = document.getElementById('player2MSStocks').value * nikoStock['2020'];

    p1[6] = document.getElementById('player1WalmartStocks').value * walmartStock['2020'];
    p2[6] = document.getElementById('player2WalmartStocks').value * walmartStock['2020'];

    p1[7] = document.getElementById('player1CostcoStocks').value * targetStock['2020'];
    p2[7] = document.getElementById('player2CostcoStocks').value * targetStock['2020'];

    p1[8] = document.getElementById('player1TargetStocks').value * costcoStock['2020'];
    p2[8] = document.getElementById('player2TargetStocks').value * costcoStock['2020'];

    p1[9] = document.getElementById('player1FiveGuysStocks').value * dominosStock['2020'];
    p2[9] = document.getElementById('player2FiveGuysStocks').value * dominosStock['2020'];

    p1[10] = document.getElementById('player1mcDStocks').value * mcdonaldsStock['2020'];
    p2[10] = document.getElementById('player2mcDStocks').value * mcdonaldsStock['2020'];

    p1[11] = document.getElementById('player1ChipotleStocks').value * chipotleStock['2020'];
    p2[11] = document.getElementById('player2ChipotleStocks').value * chipotleStock['2020'];

    var player1Budget = 10000;
    var player2Budget = 10000;

    var totalp1 = 0, totalp2 = 0;

    p1.forEach(function(input) {
        totalp1 += input;
    });

    p2.forEach(function(input) {
        totalp2 += input;
    });



    if(totalp1 > player1Budget && totalp2 > player2Budget){
        budget1.innerHTML = 'Overbudget';
        budget2.innerHTML = 'Overbudget';
        budget1.style.color = 'red';
        budget2.style.color = 'red';
        verified = false;
    } else if (totalp1 > player1Budget){
        budget1.innerHTML = 'Overbudget';
        budget1.style.color = 'red';

        budget2.innerHTML = 10000 - totalp2;
        verified = false;
    } else if (totalp2 > player2Budget) {
        budget2.style.color = 'red';
        budget2.innerHTML = 'Overbudget';

        budget1.innerHTML = 10000 - totalp1;
        verified = false;
    } else {
        verified = true;

        budget1.innerHTML = 10000 - totalp1;
        budget2.innerHTML = 10000 - totalp2;
    }
       
});
  
function navigateToPage2() {
    // Use window.location to navigate to page2.html
    window.location.href = 'page2.html';
  }

/*let budget = 10000;
  const minimumInv = 1000;
  const maximumInv = 5000;
  const check = true

  function calculateStocks() {
    // Get the value entered in the input box
    const player1AppleStocksInput = document.getElementById('player1AppleStocks');
    const player1AppleStocksValue = parseInt(player1AppleStocksInput.value, 10);

    // Check if the entered value is a valid number
    if (!isNaN(player1AppleStocksValue)) {
      // Perform the calculations
      const investment = player1AppleStocksValue * 75; // Assuming stock price for Apple is $75
      if (investment < minimumInv && investment < maximumInv) {
      const remainingBudget = budget - investment;
      }

      // Check if remaining budget is within the specified range
      if (check) {
        // Update the budget variable
        budget = remainingBudget;
}
  }}*/
