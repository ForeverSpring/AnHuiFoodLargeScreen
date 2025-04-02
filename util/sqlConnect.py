import sqlite3
from entity import foodentity

class SqlUtil:
    def getFoodData(position):
        conn = sqlite3.connect(r'database\anhui_food.db')
        cur = conn.cursor()
        cur.execute('SELECT * FROM food WHERE position = ?', (position,))
        results = cur.fetchall()
        ret=[]
        for(result) in results:
            ret.append(foodentity.Food(result[0],result[1],result[2],result[3],result[4]))
        cur.close()
        conn.close()
        return ret
