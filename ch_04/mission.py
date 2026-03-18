print((80 + 75 + 55) / 3)

if 13 % 2 == 0:
    print("짝수")
else:
    print("홀수")

yyyymmdd, num = "881120-1068234".split("-")
print(yyyymmdd)
print(num)

print("881120-1068234"[7])

a = "a:b:c:d"
b = a.replace(":", "#")
print(b)

a = [1, 3, 5, 4, 2]
a.sort()
a.reverse()
print(a)

a = ["Life", "is", "too", "short"]
print(" ".join(a))

a = (1, 2, 3)
a = a + (4, )
print(a)

# a = dict()
# a['name'] = 'python'
# a[('a', )] = 'python'
# a[[1]] = 'python'
# a[250] = 'python'
# TypeError: unhashable type: 'list'

a = {'A': 90, 'B': 80, 'C': 70}
result = a.pop('B')
print(a)
print(result)

a = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]
aSet = set(a)
b = list(aSet)
print(b)

a = b = [1, 2, 3]
a[1] = 4
print(b)
# 같은 ID를 참조하여 메모리를 공유하기 때문. OOM 방지?