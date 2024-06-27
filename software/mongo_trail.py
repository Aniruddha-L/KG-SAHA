from pymongo import MongoClient as mongo_client
import pprint

client = mongo_client('mongodb+srv://aniruddhanarasimman:Anis301004@kgsaha.lzsfm4n.mongodb.net/Amul')

db = client.Amul
collection = db['users']

for i in collection.find():
    pprint.pprint(i)