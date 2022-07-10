def bst(root, mm, mx):
    if not root:
        return True
    c = root.data
    if c < mm or c > mx:
        return False
    return bst(root.left, mm, c-1) and bst(root.right, c+1, mx)


def check_binary_search_tree_(root):
    return bst(root, 0, 10000)
    return 'no'
