class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail
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
      this.head.prev = null
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
      this.head.prev = node
      this.head = node
    }
    this.length++
    return this
  }
  //   get(index) {
  //     if (index < 0 || index >= this.length) return null
  //     var count, current
  //     if (index <= this.length / 2) {
  //       count = 0
  //       current = this.head
  //       while (count !== index) {
  //         current = current.next
  //         count++
  //       }
  //     } else {
  //       count = this.length - 1
  //       current = this.tail
  //       while (count !== index) {
  //         current = current.prev
  //         count--
  //       }
  //     }
  //     return current
  //   }
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
  set(index, val) {
    var foundNode = this.get(index)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }
  //   set(index, value) {
  //     if (index < 0 || index >= this.length) return null
  //     let counter = 0
  //     let current = this.head
  //     while (counter !== index) {
  //       current = current.next
  //       counter++
  //     }
  //     current.value = value
  //     return current
  //   }
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    var newNode = new Node(value)
    var prev = this.get(index - 1)
    var temp = prev.next
    prev.next = newNode
    newNode.prev = prev
    newNode.next = temp
    temp.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    var prev = this.get(index - 1)
    var removed = prev.next
    prev.next = removed.next
    removed.next.prev = prev
    this.length--
    return removed
  }
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.pop()
list.insert(2, 5)
// console.log(list.get(2))

console.log(list)
