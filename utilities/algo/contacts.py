#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'contacts' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts 2D_STRING_ARRAY queries as parameter.
#


class trieNode:
    def __init__(self):
        self.endOfWord = 0
        self.children = {}
        self.memo = 0


def add(trie, word):
    cursor = trie
    for letter in word:
        if cursor.children.get(letter) is None:
            cursor.children[letter] = trieNode()
        cursor = cursor.children[letter]
        cursor.memo = cursor.memo + 1
    cursor.endOfWord = 1


def find(trie, partial):
    cursor = trie
    for letter in partial:
        cursor = cursor.children.get(letter)
        if cursor is None:
            return 0
    return cursor.memo


def contacts(queries):
    contactsList = trieNode()
    countList = []
    for queryType, queryValue in queries:
        if queryType == 'add':
            add(contactsList, queryValue)
        else:
            pCount = find(contactsList, queryValue)
            countList.append(pCount)
    return countList


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    queries_rows = int(input().strip())

    queries = []

    for _ in range(queries_rows):
        queries.append(input().rstrip().split())

    result = contacts(queries)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
