s1 = set([1, 2, 3])
print(s1)

s2 = set("Helloo")
print(s2)

st1 = set([1, 2, 3, 4, 5, 6])
st2 = set([4, 5, 6, 7, 8, 9])
print(st1 & st2)
print(st1 | st2)
print(s1 - s2)

s1.add(10)
print(s1)
s1.update([3, 4, 5])
print(s1)
s1.remove(10)
print(s1)