import util.sqlConnect as sql
import pandas as pd
from entity import foodentity

# 清除原有数据
sql.SqlUtil.clearFoodData()
# 读取Excel表格
df = pd.read_excel('excel\安徽美食.xlsx', sheet_name='Sheet1')
foodList = []
for index, row in df.iterrows():
    if(index==0):
        continue
    curFood= foodentity.Food(row.tolist()[0], row.tolist()[1], row.tolist()[2], row.tolist()[3], row.tolist()[4], row.tolist()[5])
    foodList.append(curFood)
# 保存数据到数据库
sql.SqlUtil.saveFoodData(foodList)
