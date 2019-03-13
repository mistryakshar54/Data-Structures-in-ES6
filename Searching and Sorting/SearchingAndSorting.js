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
console.log(bbSort.bubbleSort( [ 5 ,0 ,1 , 4 , 10 , 2] )); 

console.log(bbSort.binarySearch( [ 1,4,6,8,9,10,44] , 0 , [ 1,4,6,8,9,10,44].length , 99 )); 
