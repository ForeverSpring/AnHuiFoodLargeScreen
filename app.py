from flask import Flask, render_template, jsonify
import util.sqlConnect as sql
import entity.foodentity

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/search/<position>')
def search(position):
    result = sql.SqlUtil.getFoodData(position)
    return jsonify([food.__dict__ for food in result])


@app.route('/introduce/<foodName>')
def introduce(foodName):
    result = sql.SqlUtil.getFoodIntroduce(foodName)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=False)
