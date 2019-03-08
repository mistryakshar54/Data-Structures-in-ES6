//import {LinkedListNode} from './LinkedListNode.js';
class LinkedListNode
{
    constructor(data = 0 , next = null)
    {
        this.data = data;
        this.next = next;
    }
}
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
        var newNode = new LinkedListNode( data , null);
        if( this.head == null)
        {

            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
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
            var newNode = new LinkedListNode( data , null);
            newNode.next = this.head;
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
