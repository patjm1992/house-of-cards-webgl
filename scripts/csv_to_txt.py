import sys
import csv

# format of csv: x, y, z, intensity
'''
in_file = sys.argv[1]  # the .csv
out_file = sys.argv[2] # resulting .txt file

f_in = open(in_file, "r")
f_out = open(out_file, "w")

reader = csv.reader(f_in)

points = []

for line in reader:
	for i in range(0, 3):
		points.append(line[i])
	
for i in points:
	f_out.write(i)
	f_out.write(',')
'''

# There's 1000 .csv files in this directory!
# Going to make 1000 reformatted text files.
for i in range(1, 1001):
	print("Working on converting " + str(i) + '.csv...')

	f_in = open('csv_files/' + str(i) + '.csv', "r")
	f_out = open('txt_files/' + str(i) + '.txt', "w")

	reader = csv.reader(f_in)

	points = []

	for line in reader:
		for i in range(0, 3):
			points.append(line[i])

	for i in points:
		f_out.write(i)
		f_out.write(',')

