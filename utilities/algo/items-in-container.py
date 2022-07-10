from typing import List
from collections import Counter
import bisect


def numberOfItems(items: str, startIndices: List[int], endIndices: List[int]) -> List[int]:
    ln = len(items)
    stars = [0] * (ln+1)
    lftpipeidx = [-1] * (ln+1)
    for i, ch in enumerate(items, 1):
        if ch == "|":
            stars[i] = stars[i-1]
            lftpipeidx[i] = i
        else:  # ch == *
            stars[i] = stars[i-1] + 1
            lftpipeidx[i] = lftpipeidx[i-1]
    if lftpipeidx[-1] == -1:
        return [0]*len(startIndices)

    rgtpipeidx = [ln+1] * (ln+1)
    for i in range(ln-1, -1, -1):
        if items[i] == '|':
            rgtpipeidx[i+1] = i+1
        else:
            rgtpipeidx[i+1] = rgtpipeidx[i+2] if i < ln-1 else ln+1
    ans = []
    for i in range(len(startIndices)):
        si, ei = startIndices[i], endIndices[i]
        lftpipe = rgtpipeidx[si]
        rgtpipe = lftpipeidx[ei]
        ans.append(stars[rgtpipe] - stars[lftpipe] if lftpipe < rgtpipe else 0)
    return ans
