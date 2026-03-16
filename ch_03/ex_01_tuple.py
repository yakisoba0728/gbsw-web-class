t1 = (1, 2, 3, 4)
try:
    del t1[0]
except Exception as e:
    print(e)

try:
    t1[1] = 1
except Exception as e:
    print(e)

print(t1[0])
print(t1[1:3])
print(t1 * 10)
print(len(t1 * 10))