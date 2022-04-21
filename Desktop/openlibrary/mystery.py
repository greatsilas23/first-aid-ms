def mystery(data):
  result = set()

  for i in range(len(data)):
    for j in range(len(data)):
      result.add(i * 10 + data[i][j])
  return result







print(mystery([[1,2],[3,4]]))
