# write a balanced brackets function that accepts a string of brackets and returns 'Yes if the brackets are balanced and 'No if they are not

# def balancedBrackets(string):
#     stack = []
#     for char in string:
#         if char == '{' or char == '[' or char == '(':
#             stack.append(char)
#         elif char == '}':
#             if len(stack) == 0 or stack.pop() != '{':
#                 return 'No'
#         elif char == ']':
#             if len(stack) == 0 or stack.pop() != '[':
#                 return 'No'
#         elif char == ')':
#             if len(stack) == 0 or stack.pop() != '(':
#                 return 'No'
#     if len(stack) == 0:
#         return 'Yes'
#     else:
#         return 'No'

def isBalanced(s):
    stack = []
    for char in s:
        if char == '{' or char == '[' or char == '(':
            stack.append(char)
        elif char == '}':
            if len(stack) == 0 or stack.pop() != '{':
                return 'NO'
        elif char == ']':
            if len(stack) == 0 or stack.pop() != '[':
                return 'NO'
        elif char == ')':
            if len(stack) == 0 or stack.pop() != '(':
                return 'NO'
    if len(stack) == 0:
        return 'YES'
    else:
        return 'NO'
