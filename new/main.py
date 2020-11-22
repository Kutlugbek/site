from flask import Flask, render_template, redirect, request

app = Flask(__name__)

file = open('main.txt', 'r', encoding='utf-8')
row = ''
words = list()

for row in file:
	text = row.split('/')[0]
	words.append(text)

@app.route('/', methods=["POST", "GET"])
def index():
	global words
	if request.method == "POST":
		word = request.form["nm"]
		if word in words:
			return render_template("index.html")
		else:
			return render_template("noneindex.html")
	else:
		return render_template("base.html")

if __name__ == "__main__":
	app.run(debug=True)