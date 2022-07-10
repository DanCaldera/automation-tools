# The median of a set of integers is the midpoint value of the data set for which an equal number of integers are less than and greater than the value. To find the median, you must first sort your set of integers in non-decreasing order, then:

# If your set contains an odd number of elements, the median is the middle element of the sorted sample. In the sorted set, is the median.
# If your set contains an even number of elements, the median is the average of the two middle elements of the sorted sample. In the sorted set, is the median.
# Given an input stream of  integers, perform the following task for each  integer:

# Add the  integer to a running list of integers.
# Find the median of the updated list(i.e., for the first element through the  element).
# Print the updated median on a new line. The printed value must be a double-precision number scaled to  decimal place(i.e.,  format).

#
# Complete the 'runningMedian' function below.
#
# The function is expected to return a DOUBLE_ARRAY.
# The function accepts INTEGER_ARRAY a as parameter.
#

def runningMedian(a):
    # Write your code here
    medianList = []
    for i in a:
        if len(medianList) == 0:
            medianList.append(i)
        else:
            if i < medianList[0]:
                medianList.insert(0, i)
            else:
                medianList.append(i)
            if len(medianList) % 2 == 0:
                medianList.sort()
                median = (medianList[len(medianList) // 2] +
                          medianList[len(medianList) // 2 - 1]) / 2
            else:
                median = medianList[len(medianList) // 2]
        medianList.sort()
        medianList.append(median)
    return medianList
