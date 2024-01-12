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
  const dominosStock = {
    name: 'Dominoes',
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

document.getElementById('calculateButton').addEventListener('click', function() {
    // Simplified JavaScript to fetch values from stock inputs

    var p1Apple = document.getElementById('player1AppleStocks').value;
    var p2Apple = document.getElementById('player2AppleStocks').value;
    var p1Google = document.getElementById('player1GoogleStocks').value;
    var p2Google = document.getElementById('player2GoogleStocks').value;
    var p1Amazon = document.getElementById('player1AmazonStocks').value;
    var p2Amazon = document.getElementById('player2AmazonStocks').value;

    var p1CapitalOne = document.getElementById('player1CapitalOneStocks').value;
    var p2CapitalOne = document.getElementById('player2CapitalOneStocks').value;
    var p1JPMorgan = document.getElementById('player1jpMorganStocks').value;
    var p2JPMorgan = document.getElementById('player2jpMorganStocks').value;
    var p1MS = document.getElementById('player1MSStocks').value;
    var p2MS = document.getElementById('player2MSStocks').value;

    var p1Walmart = document.getElementById('player1WalmartStocks').value;
    var p2Walmart = document.getElementById('player2WalmartStocks').value;
    var p1Costco = document.getElementById('player1CostcoStocks').value;
    var p2Costco = document.getElementById('player2CostcoStocks').value;
    var p1Target = document.getElementById('player1TargetStocks').value;
    var p2Target = document.getElementById('player2TargetStocks').value;

    var p1FiveGuys = document.getElementById('player1FiveGuysStocks').value;
    var p2FiveGuys = document.getElementById('player2FiveGuysStocks').value;
    var p1McD = document.getElementById('player1mcDStocks').value;
    var p2McD = document.getElementById('player2mcDStocks').value;
    var p1Chipotle = document.getElementById('player1ChipotleStocks').value;
    var p2Chipotle = document.getElementById('player2ChipotleStocks').value;

    var player1Budget = 10000;
    
});
  
