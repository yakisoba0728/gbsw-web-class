from copy import copy
a = True
b = False
print(type(a), type(b))
a = 1
b = 2
print(a == b)
print(a < b)

if []:
    print("t")

else:
    print("f")

b = a
print(a is b)


aa = 100
bb = copy(aa)
print(aa is bb)