import Queue from './Queue';

var queue = new Queue( 5);
queue.enqueue( 1);
queue.enqueue( 2);
queue.enqueue( 3);
queue.enqueue( 4);

queue.displayQueue();

queue.dequeue();
queue.dequeue();
queue.displayQueue();