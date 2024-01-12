import requests
import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
import boto3
import mpld3
import time




headers = {
    'Content-Type': 'application/json'
}
company_tickers = {
    "Apple": "AAPL",
    "Microsoft Corporation": "MSFT",
    "Amazon.com": "AMZN",
    "Facebook": "FB",
    "Tesla": "TSLA",
    "Alphabet": "GOOGL",
    "Johnson & Johnson": "JNJ",
    "Procter & Gamble": "PG",
    "Visa": "V",
    "JP Morgan Chase & Co.": "JPM",
    "Coca-Cola": "KO",
    "Walmart": "WMT",
    "Bank of America": "BAC",
    "Intel Corporation": "INTC",
    "The Walt Disney Company": "DIS",
    "AT&T Inc.": "T",
    "Verizon Communications Inc.": "VZ",
    "Pfizer Inc.": "PFE",
    "Mastercard Incorporated": "MA",
    "Cisco Systems": "CSCO",
    "IBM": "IBM",
    "General Electric": "GE",
    "Nike Inc.": "NKE",
    "Goldman Sachs Group": "GS",
    "General Motors": "GM",
    "Netflix Inc.": "NFLX",
    "Abbott Laboratories": "ABT",
    "Starbucks Corporation": "SBUX",
    "Adobe Inc.": "ADBE",
    "Boeing Co.": "BA",
    "FedEx Corporation": "FDX",
    "Johnson Controls International": "JCI",
    "Kraft Heinz Co.": "KHC",
    "3M Company": "MMM",
    "Exxon Mobil Corp.": "XOM",
    "General Dynamics": "GD",
    "Oracle Corporation": "ORCL",
    "Hewlett Packard Enterprise": "HPE",
    "Caterpillar Inc.": "CAT",
    "Delta Air Lines": "DAL",
    "American Express Co.": "AXP",
    "JPMorgan Chase & Co.": "JPM",
    "Micron Technology": "MU",
    "Twitter Inc.": "TWTR",
    "Lockheed Martin": "LMT",
    "Wells Fargo & Co.": "WFC",
    "Lowe's Companies Inc.": "LOW",
    "Accenture plc": "ACN",
    "Verisign Inc.": "VRSN",
    "Biogen Inc.": "BIIB",
    "PepsiCo Inc.": "PEP",
    "Applied Materials Inc.": "AMAT",
    "Intuit Inc.": "INTU",
    "Capital One Financial Corp.": "COF",
    "McDonald's Corporation": "MCD",
    "Starbucks Corporation": "SBUX",
    "Yum! Brands Inc. (KFC, Pizza Hut, Taco Bell)": "YUM",
    "Chipotle Mexican Grill Inc.": "CMG",
}

def graph(company):
    matplotlib.pyplot.switch_backend('Agg') 

    requestResponse = requests.get(f"https://api.tiingo.com/tiingo/daily/{company_tickers[company].lower()}/prices?startDate=2023-1-11&endDate=2024-1-11&token=5e1b3f3e88565eddf07ea28af2295f0c5b589cb0", headers=headers)
    file = requestResponse.json()
    df = pd.DataFrame(file)
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)

    plt.figure(figsize=(18, 12))
    plt.scatter(df.index, df['close'])
    plt.title("Stock Price Scatter Plot", fontsize=20)
    plt.ylabel("Stock Price", fontsize=20)
    plt.xlabel("Date", fontsize=20)
    plt.savefig('stock.png')

    plt.figure(figsize=(18, 12))
    plt.scatter(df.index, df['volume'])
    plt.title("Volume Scatter Plot", fontsize=20)
    plt.ylabel("Volume", fontsize=20)
    plt.xlabel("Date", fontsize=20)
    plt.savefig('bank.png')
    s3 = boto3.resource('s3')
    s3.meta.client.upload_file('stock.png', 'mike-two-bucket', 'stock.png', ExtraArgs={'ACL':'public-read'})
    s3.meta.client.upload_file('bank.png', 'mike-two-bucket', 'bank.png', ExtraArgs={'ACL':'public-read'})
    time.sleep(3)

    print("we good!!!")
    return("generating")


