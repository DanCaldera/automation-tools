#  The height of a binary tree is the number of edges between the tree's root and its furthest leaf. For example, the following binary tree is of height
#  Complete the getHeight or height function in the editor. It must return the height of a binary tree as an integer.
#  getHeight or height has the following parameter(s):
#  root: a reference to the root of a binary tree.
#  Input Format
#  The first line contains an integer, the number of nodes in the tree.
#  Next line contains  space separated integer where th integer denotes node[i].data.

#  python3


# def height(root):
# leftHeight = 0
# rightHeight = 0

# if(root.left):
#     leftHeight = height(root.left) + 1

# if(root.right):
#     rightHeight = height(root.right) + 1

# if(leftHeight > rightHeight):
#     return leftHeight
# else:
#     return rightHeight

def height(root):
    if root is None:
        return 0
    return 1 + max(height(root.left), height(root.right))
