class Queue
{
    constructor( maxQueueSize = 50 )
    {
        this.front = 0;
        this.rear = 0;
        this.maxQueueSize = maxQueueSize;
        this.queueArr = [];
    }

    isEmptyQueue()
    {
        //if front == rear the queue is empty!!
        if( (this.front  < 0) ||  this.front > this.rear )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    isFullQueue()
    {
        if( this.rear >= this.maxQueueSize )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    enqueue( data )
    {
        if( !this.isFullQueue())
        {
            this.queueArr.push(data);
            this.rear++;
            console.log("Added " , data , " to the queue!");
        }
        else
        {
            console.log("The queue is full!!");
        }
    }

    dequeue()
    {
        if(! this.isEmptyQueue())
        {
            var item = this.queueArr[this.front];
            this.front++;
            console.log("Removed" , item , "from the queue!");
        }
    }

    displayQueue()
    {
        for( let  i = this.front; i < this.rear; i++ )
        {
            console.log( "Element " , i , " => " , this.queueArr[i] , "\n" );
        }
    }
}

var queue = new Queue( 5);
queue.enqueue( 1);
queue.enqueue( 2);
queue.enqueue( 3);
queue.enqueue( 4);

queue.displayQueue();

queue.dequeue();
queue.dequeue();
queue.displayQueue();