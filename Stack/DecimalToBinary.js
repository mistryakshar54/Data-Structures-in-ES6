import {Stack} from './Stack';  
class DecimalToBinary
{
    
    constructor()
    {
        this.stack  =  new Stack();
    }
    convertToBinary( numberToConvert )
    {
        this.currNum = numberToConvert;
        while( this.currNum != 1 )
        {
            this.stack.push(this.currNum % 2);  
            this.currNum = Math.floor( this.currNum / 2 );
        }
    }

    traverseStack()
    {
        this.stack.displayStack();
    }
}

var decToBin = new DecimalToBinary();
decToBin.convertToBinary(10);