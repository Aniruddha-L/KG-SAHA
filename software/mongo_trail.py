from pymongo import MongoClient as mongo_client
import pprint

# client = mongo_client('mongodb+srv://aniruddhanarasimman:Anis301004@kgsaha.lzsfm4n.mongodb.net/Amul')
client = mongo_client('mongodb://localhost:27017/')

db = client.local
collection = db['Trail']

with open('Afghan Dry Fruit.png', 'rb') as f:
    out = f.read()
print(out)
collection.insert_one({"aa":out})