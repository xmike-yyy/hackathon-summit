from flask import Flask, render_template, jsonify, request
from visualize import graph
import time

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('page1.html', player1_budget='$10,000', player2_budget='$10,000')

@app.route('/results')
def results():
    return render_template('page2.html')

@app.route('/learn')
def learn():
    return render_template('page3.html')

@app.route('/about_us')
def about_us():
    return render_template('page4.html')

@app.route('/visualization', methods=['GET', 'POST'])
def visualization():
    if request.method == 'POST':
        data = request.get_json()
        selected_company = data.get('companyName')
        print(graph(selected_company))
        visualization_data = {'selected_company': selected_company}

        return render_template('page6.html', visualization_data=visualization_data)
    else:

        return render_template('page5.html')
@app.route('/page6')
def last():
    time.sleep(3)

    return render_template('page6.html')
if __name__ == '__main__':
    app.run(debug=True)
