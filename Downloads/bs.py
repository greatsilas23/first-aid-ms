def bu_so(item):
	isBuSo = False
	for i in range(0, len(item) - 1):
		for k in range(1, len(item) - 1):
			if item[k] < item[k + 1]:
				item[k], item[k + 1] = item[k + 1], item[k]
				isBuSo = True
	return item
print(bu_so([2, 3, 5, 7]))
