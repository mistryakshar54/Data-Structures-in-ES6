//import {DoublyLinkedListNode} from './DoublyLinkedListNode.js';
class DoublyLinkedListNode
{
    constructor(data = 0 , next = null , prev = null)
    {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * Linked List Class.
 *
 * @function {insertNode}
 *   Inserts a new node in the linked list
 * @function {appendNode}
 *   Creates a new node and adds it to front of the linked list
 * @function {deleteNode}
 *   Removes a node from the end of the linked list
 * @function {deleteFromFront}
 *   Removes a node from the front of the linked list
 * @function {traverseLinkedList}
 *   Traverses the linked list listing all the elements in the list
 * @prop {head} attach
 *   Points to the head of the list.
 * @prop {tail} detach
 *   Points to the tail of the list.
 */
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.LinkedListSize = 0;
    }

    inserNode( data )
    {
        var newNode = new DoublyLinkedListNode( data , null , null);
        if( this.head == null)
        {

            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.LinkedListSize++;
    }

    deleteNode()
    {
        var tempTraverseNode = this.head;
        while( tempTraverseNode.next != this.tail )
        {
            tempTraverseNode = tempTraverseNode.next;
        }
        this.tail = tempTraverseNode;
        tempTraverseNode = tempTraverseNode.next;
        this.tail.next = null;
        tempTraverseNode = null;
        //delete tempTraverseNode;
    }

    deleteFromFront()
    {
        var tempNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        tempNode = null;
    }

    appendNode( data )
    {
        if(this.head == null)
        {
            this.inserNode(data);
        }
        else
        {
            var newNode = new DoublyLinkedListNode( data , null , null);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.LinkedListSize++;
        }
    }   

    traverseLinkedList()
    {
        var tempHead = this.head;
        while(tempHead != null)
        {
            console.log( " | " , tempHead.data , " | " );
            tempHead = tempHead.next;
        }
    }

}

var list = new LinkedList();
list.inserNode(0);
list.inserNode(1);
list.inserNode(2);
list.inserNode(3);
list.inserNode(4);
list.traverseLinkedList();
list.appendNode(-1);
console.log("\n\n");
list.traverseLinkedList();
list.deleteNode();
list.deleteNode();
console.log("\n\n");
list.traverseLinkedList();
list.deleteFromFront();
console.log("\n\n");
list.traverseLinkedList();
