from csv import DictReader

file = open('nogst.txt', 'a')
with open('party.csv', 'r') as csvfile:
    reader = DictReader(csvfile)
    data = [i for i in reader]

arr = ['Customer', 'SGST', 'GST', 'Freezer','Watercan', 'Water','Voltas','TN', 'Tea', 'Tata', 'SBI','Round', 'Interner', 'IGST', 'GCMMF', 'Epson','Electrical', 'Discount', 'Cup', 'Cleaning'
       'CGST', 'Cess', 'Cash', 'Bank', 'Auditor', 'Additional']

for i in data:
    name = i['Party Name']
    
    lst = name.split()
    for j in arr:
        if j in lst:
            # data.pop(data.index(i))
            print(data.index(i))
for i in data:
    name = i['Party Name']
    lst = name.split()
    for j in arr:
        if j in lst:
            # print('Anamoly in data')    
            pass

for i in data:
    gst = i['Phone/Mobile Numbers']
    if not gst:
        string = f'Name: {i['Party Name']}\n'
        # print(string)

print('file written')