class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return null
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    return current
  }
  shift() {
    if (!this.head) return null
    const currentHead = this.head
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }
    this.length--
    return currentHead
  }
  unshift(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, value) {
    // if (index < 0 || index >= this.length) return null
    // let counter = 0
    // let current = this.head
    // while (counter !== index) {
    //   current = current.next
    //   counter++
    // }
    // current.value = value
    // return current
    const foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }
  insert(index, value) {
    //    if (index < 0 || index > this.length) return false
    //    if (index === this.length) return !!this.push(val)
    //    if (index === 0) return !!this.unshift(val)

    //    var newNode = new Node(val)
    //    var prev = this.get(index - 1)
    //    var temp = prev.next
    //    prev.next = newNode
    //    newNode.next = temp
    //    this.length++
    //    return true
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    const node = new Node(value)
    const previousNode = this.get(index - 1)
    const temp = previousNode.next
    previousNode.next = node
    node.next = temp
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    const previousNode = this.get(index - 1)
    const temp = previousNode.next
    previousNode.next = temp.next
    this.length--
    return temp
  }
  reverse() {
    // let current = this.head
    // let next = null
    // let previous = null
    // while (current) {
    //   next = current.next
    //   current.next = previous
    //   previous = current
    //   current = next
    // }
    // this.head = previous
    let node = this.head
    this.head = this.tail
    this.tail = node
    var next
    var prev = null
    for (var i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  print() {
    let current = this.head
    const result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    console.log(result)
  }
}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.remove(3)
list.reverse()
list.print()
