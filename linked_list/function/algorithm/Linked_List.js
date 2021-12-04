class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	// insert element at the position index
	// of the list
	insertAt(index,element) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			// creates a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the
			// first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the
	// specified location
	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to removce an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}

	// finds the index of element
	FindElement(index) {
		var current = this.head;
        var count=0;
		// iterate over the list
		while (count<index) {    
            count++;
			current = current.next;    
			if (current === null){
                console.log("don't have element")
                return -1;   
            }         
		}

		// not found
		return current.element;
	}

	// prints the list items
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + ",";
			curr = curr.next;
		}
        var b = str.split(',')
        b.pop()
		return b;
	}
    size_of_list(){
        return this.size;
    }

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();


// ll.insertAt(0, 6);
// ll.printList()

