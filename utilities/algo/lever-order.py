# Given a pointer to the root of a binary tree, you need to print the level order traversal of this tree. In level-order traversal, nodes are visited level by level from left to right. Complete the function and print the values in a single line separated by a space.

def levelOrder(root):
    q = []
    q.append(root)
    while len(q) != 0:
        node = q.pop(0)
        print(node.info, end=" ")
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
