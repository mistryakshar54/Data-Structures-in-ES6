class Stack
{
    constructor( stackSize  = 0)
    {
        //this.top = -1;
        if( stackSize == 0)
        {
            this.maxStackSize = -1; 
        }
        this.stackArr = [];
        this.currentStackSize = 0;
    }

    isEmpty( )
    {
        if( this.currentStackSize == 0 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    isFull( )
    {
        if( this.maxStackSize > 0 && ( this.maxStackSize == this.currentStackSize ) )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    push( item )
    {
        if( !this.isFull() )
        {
            this.stackArr.push(item);
            this.currentStackSize++;
            console.log("Added item: " , item);
        }
        else
        {
            console.log("Stack is full");
        }
    }
    pop()
    {
        if(!this.isEmpty())
        {
            var item = this.stackArr.pop();
            this.currentStackSize--;
            console.log("Popped item: " , item);
        }
        else
        {
            console.log("Stack is empty!!");
        }
    }
    displayStack()
    {

        for (let index = this.currentStackSize; index >= 0; index--) {
           console.log("\nElement at index" , index , " => " , this.stackArr[index]); 
        }
    }
}

var stak = new Stack(5);
stak.push(2);
stak.push(5);
stak.push(6);
stak.push(7);
stak.pop();
stak.pop();
stak.displayStack();