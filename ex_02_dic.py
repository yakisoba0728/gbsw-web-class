dic = {'name': 'kimdonghyeok', 'age': 16, 'gender': 'male'}
print(dic['name'])
dic['helloworld'] = 'true'
print(dic)
del dic['name']
del dic['helloworld']
print(dic)
print(dic.keys())