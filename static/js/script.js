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

  var budget1 = document.getElementById('player1Budget');
  var budget2 = document.getElementById('player2Budget');
  var finalizeButton = document.getElementById('finalizeButton')
  var underInvest = document.getElementById('underInvest')
  var verified = false;
  let p1 = new Array(12);
    let p2 = new Array(12);
    let p1f = new Array(12);
    let p2f = new Array(12);


document.getElementById('calculateButton').addEventListener('click', function() {
    // Simplified JavaScript to fetch values from stock inputs

    budget1.textContent = '$10,000'; // Or use innerHTML if you need to include HTML tags
    budget1.style.color = 'white';
  
    budget2.textContent = '$10,000'; // Or use innerHTML if you need to include HTML tags
    budget2.style.color = 'white';

    underInvest.innerHTML = "";

    

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

    p1[7] = document.getElementById('player1CostcoStocks').value * costcoStock['2020'];
    p2[7] = document.getElementById('player2CostcoStocks').value * costcoStock['2020'];

    p1[8] = document.getElementById('player1TargetStocks').value * targetStock['2020'];
    p2[8] = document.getElementById('player2TargetStocks').value * targetStock['2020'];

    p1[9] = document.getElementById('player1DominoesStocks').value * dominosStock['2020'];
    p2[9] = document.getElementById('player2DominoesStocks').value * dominosStock['2020'];

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
        finalizeButton.style.backgroundColor = 'red';

    } else if (totalp1 > player1Budget){
        budget1.innerHTML = 'Overbudget';
        budget1.style.color = 'red';

        budget2.innerHTML = 10000 - totalp2;
        verified = false;
        finalizeButton.style.backgroundColor = 'red';

    } else if (totalp2 > player2Budget) {
        budget2.style.color = 'red';
        budget2.innerHTML = 'Overbudget';

        budget1.innerHTML = 10000 - totalp1;

        verified = false;
        finalizeButton.style.backgroundColor = 'red';

    } else if (totalp1 < 9500 || totalp2 < 9500) {
        underInvest.innerHTML = 'Invest more! Make sure both Players have less than 500 remaining.';
        underInvest.style.color = "orange"
        verified = false;
        finalizeButton.style.backgroundColor = 'orange';

        budget1.innerHTML = 10000 - totalp1;
        budget2.innerHTML = 10000 - totalp2;

    } else {
        verified = true;
        finalizeButton.style.backgroundColor = 'green';
        

        budget1.innerHTML = 10000 - totalp1;
        budget2.innerHTML = 10000 - totalp2;
    }
       
});


function navigateToPage2() {
    // Use window.location to navigate to page2.html

    

    p1f[0] = document.getElementById('player1AppleStocks').value * appleStock['2023'] - p1[0];
    p2f[0] = document.getElementById('player2AppleStocks').value * appleStock['2023'] - p2[0];


   // Google
    p1f[1] = document.getElementById('player1GoogleStocks').value * googleStock['2023'] - p1[1];
    p2f[1] = document.getElementById('player2GoogleStocks').value * googleStock['2023'] - p2[1];

    // Amazon
    p1f[2] = document.getElementById('player1AmazonStocks').value * amazonStock['2023'] - p1[2];
    p2f[2] = document.getElementById('player2AmazonStocks').value * amazonStock['2023'] - p2[2];

    // Capital One
    p1f[3] = document.getElementById('player1CapitalOneStocks').value * capitalOneStock['2023'] - p1[3];
    p2f[3] = document.getElementById('player2CapitalOneStocks').value * capitalOneStock['2023'] - p2[3];

    // JP Morgan
    p1f[4] = document.getElementById('player1jpMorganStocks').value * jpMorganStock['2023'] - p1[4];
    p2f[4] = document.getElementById('player2jpMorganStocks').value * jpMorganStock['2023'] - p2[4];

    // Niko
    p1f[5] = document.getElementById('player1MSStocks').value * nikoStock['2023'] - p1[5];
    p2f[5] = document.getElementById('player2MSStocks').value * nikoStock['2023'] - p2[5];

    // Walmart
    p1f[6] = document.getElementById('player1WalmartStocks').value * walmartStock['2023'] - p1[6];
    p2f[6] = document.getElementById('player2WalmartStocks').value * walmartStock['2023'] - p2[6];

    // Target
    p1f[7] = document.getElementById('player1CostcoStocks').value * targetStock['2023'] - p1[7];
    p2f[7] = document.getElementById('player2CostcoStocks').value * targetStock['2023'] - p2[7];

    // Costco
    p1f[8] = document.getElementById('player1TargetStocks').value * costcoStock['2023'] - p1[8];
    p2f[8] = document.getElementById('player2TargetStocks').value * costcoStock['2023'] - p2[8];

    // Dominoes
    p1f[9] = document.getElementById('player1DominoesStocks').value * dominosStock['2023'] - p1[9];
    p2f[9] = document.getElementById('player2DominoesStocks').value * dominosStock['2023'] - p2[9];

    // McDonald's
    p1f[10] = document.getElementById('player1mcDStocks').value * mcdonaldsStock['2023'] - p1[10];
    p2f[10] = document.getElementById('player2mcDStocks').value * mcdonaldsStock['2023'] - p2[10];

    // Chipotle
    p1f[11] = document.getElementById('player1ChipotleStocks').value * chipotleStock['2023'] - p1[11];
    p2f[11] = document.getElementById('player2ChipotleStocks').value * chipotleStock['2023'] - p2[11];

    
 localStorage.setItem('p1f', JSON.stringify(p1f));
 localStorage.setItem('p2f', JSON.stringify(p2f));


}

function navigateToLearn(){
    window.location.href = 'page3.html';
}

function aboutUs(){
    window.location.href = 'page4.html'
}



document.getElementById('finalizeButton').addEventListener('click', function() {
    if(verified === true){
        navigateToPage2();
    } else {
        console.log ("Verification failed");
    }
});

