class SearchingAndSorting
{ 
    bubbleSort( inputArr )
    {
        for( let _i = 0; _i < inputArr.length ; _i++ )
        {
            for( let _j = 0 ; _j < inputArr.length ; _j++ )
            {
                if( inputArr[_i] < inputArr[_j] )
                {
                    let temp = inputArr[_i];
                    inputArr[_i] = inputArr[_j];
                    inputArr[_j] = temp;
                }
                
            }
        }
        return inputArr;
    }

    recursiveBubbleSort( inputArr , arrSize )
    {
        if(arrSize == 1)
        {
            return ;
        }
        
        for( let _i = 0; _i < arrSize - 1; _i++)
        {
            if( inputArr[ _i ] > inputArr[ _i + 1 ] )
            {
                var temp = inputArr[ _i ];
                inputArr[ _i ] = inputArr[ _i+1 ];
                inputArr[ _i+1 ] = temp;
            }
        }
        this.recursiveBubbleSort( inputArr , arrSize - 1 );
        return inputArr; //recursion needs to return the input arr after it is processed till end
    }

    selectionSort( inputArr)
    {
        for( let _i = 0; _i < inputArr.length; _i++ )
        {
            let minindex = _i;
            for( let _j = _i + 1; _j < inputArr.length; _j++ )
            {
                if( inputArr[_j] < inputArr[minindex] )
                {
                    minindex = _j;
                }
            }

            if( minindex != _i )
            {
                var temp = inputArr[ minindex ];
                inputArr[ minindex ] = inputArr[ _i ];
                inputArr[ _i ] = temp;
            }
            
        }
        return inputArr;
    }

    insertionSort( inputArr )
    {
        for( let _i = 1; _i < inputArr.length - 1; _i++)
        {
            let key = inputArr[_i];
            let j = _i - 1;

            while( j >= 0 && inputArr[j] > key)
            {
                inputArr[ j + 1] = inputArr[j];
                j--;
            }
            inputArr[j + 1] = key; 
        }
        return inputArr;
    }

    binarySearch( inputArr , low, high  , keyToSearch )
    {
        
        this._high = high;
        this._low  = low;
        if( this._low > this._high ) { return false; }
        this.mid = Math.floor((this._high + this._low) / 2);
     
        if( inputArr[this.mid] == keyToSearch ) {  return true; }

        if( inputArr[this.mid] < keyToSearch ) { return this.binarySearch( inputArr , this.mid + 1 , this._high  , keyToSearch ); }
        else {  return this.binarySearch(inputArr , this._low , this.mid - 1 , keyToSearch); }
    }
}

var bbSort = new SearchingAndSorting();
var arrToSort = [ 64 , 22 , 54 , 10 ];
var binarySearchArr = [ 1,4,6,8,9,10,44];
console.log(bbSort.bubbleSort( arrToSort )); 
console.log("Binary Search for key 99 => " , bbSort.binarySearch( binarySearchArr , 0 , binarySearchArr.length , 99 )); 
console.log("Binary Search for key 1 => " , bbSort.binarySearch( binarySearchArr , 0 , binarySearchArr.length , 9 )); 
console.log( "Selection Sort => " , bbSort.selectionSort( arrToSort ) );
console.log( "Recursive Bubble Sort => " , bbSort.recursiveBubbleSort( arrToSort , arrToSort.length  ) );

console.log( "Insertion Sort => " , bbSort.insertionSort(arrToSort) );