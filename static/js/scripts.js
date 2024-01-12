var sp500Companies = [
    "Apple", "Microsoft Corporation", "Amazon.com", "Facebook",
    "Tesla", "Alphabet", "Johnson & Johnson", "Procter & Gamble",
    "Visa", "JP Morgan Chase & Co.", "Coca-Cola", "Walmart",
    "Bank of America", "Intel Corporation", "The Walt Disney Company",
    "AT&T Inc.", "Verizon Communications Inc.", "Pfizer Inc.", "Mastercard Incorporated",
    "Cisco Systems", "IBM", "General Electric", "Nike Inc.",
    "Goldman Sachs Group", "General Motors", "Netflix Inc.", "Abbott Laboratories",
    "Starbucks Corporation", "Adobe Inc.", "Boeing Co.", "FedEx Corporation",
    "Johnson Controls International", "Kraft Heinz Co.", "3M Company", "Exxon Mobil Corp.",
    "General Dynamics", "Oracle Corporation", "Hewlett Packard Enterprise", "Caterpillar Inc.",
    "Delta Air Lines", "American Express Co.", "Facebook", "JPMorgan Chase & Co.",
    "Micron Technology", "Twitter Inc.", "Lockheed Martin", "Wells Fargo & Co.",
    "Lowe's Companies Inc.", "Accenture plc", "Verisign Inc.", "Biogen Inc.",
    "PepsiCo Inc.", "Applied Materials Inc.", "Mastercard Incorporated", "Intuit Inc.",
    "Capital One Financial Corp.", "McDonald's Corporation", "Starbucks Corporation",
    "Yum! Brands Inc. (KFC, Pizza Hut, Taco Bell)", "Chipotle Mexican Grill Inc.",
];
let sortedCompanies = sp500Companies.sort();

let input = document.getElementById("companyAutocomplete");

input.addEventListener("keyup", (e) => {
    removeElements();
    for (let i of sortedCompanies) {

        if (
            i.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value != ""
        ) {
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();

    let selectedCompany = input.value;
    sendSelectionToPython(selectedCompany);
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });

}
document.addEventListener('DOMContentLoaded', function () {

    var selectCompanyBtn = document.getElementById('selectCompanyBtn');

    selectCompanyBtn.addEventListener('click', function (event) {
        event.preventDefault();

        var companyName = document.getElementById('companyAutocomplete').value;

        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/visualization', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify({ companyName: companyName }));

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response.message); 
            }
        };

    });

});
function aboutUs(){
    window.location.href = 'page4.html'
}
document.getElementById('aboutUsButton').addEventListener('click', function() {
    aboutUs()
});



