import sqlite3
from entity import foodentity


class SqlUtil:
    def getFoodData(position):
        conn = sqlite3.connect(r'database\anhui_food.db')
        cur = conn.cursor()
        cur.execute('SELECT * FROM food WHERE position = ?', (position,))
        results = cur.fetchall()
        ret = []
        for (result) in results:
            ret.append(foodentity.Food(
                result[0], result[1], result[2], result[3], result[4], result[5]))
        cur.close()
        conn.close()
        return ret

    def getFoodIntroduce(foodName):
        conn = sqlite3.connect(r'database\anhui_food.db')
        cur = conn.cursor()
        cur.execute('SELECT * FROM food WHERE name = ?', (foodName,))
        results = cur.fetchall()
        ret = ''
        for (result) in results:
            ret = result[5]
        cur.close()
        conn.close()
        return ret

    def saveFoodData(foodList):
        conn = sqlite3.connect(r'database\anhui_food.db')
        cur = conn.cursor()
        for food in foodList:
            # Check if the food item already exists
            cur.execute(
                'SELECT * FROM food WHERE name = ? AND position = ?', (food.name, food.position))
            existing_food = cur.fetchone()
            if existing_food:
                # If it exists, update the existing record
                cur.execute('UPDATE food SET price = ?, goodreview = ?, dish = ?,introduce=? WHERE name = ? AND position = ?',
                            (food.price, food.goodview, food.dish, food.name, food.position, food.introduce))
            else:
                # If it doesn't exist, insert a new record
                cur.execute('INSERT INTO food (name, position, price, goodreview, dish, introduce) VALUES (?, ?, ?, ?,?, ?)',
                            (food.name, food.position, food.price, food.goodview, food.dish, food.introduce))
        conn.commit()
        cur.close()
        conn.close()

    def clearFoodData():
        conn = sqlite3.connect(r'database\anhui_food.db')
        cur = conn.cursor()
        cur.execute('DELETE FROM food')
        conn.commit()
        cur.close()
        conn.close()
