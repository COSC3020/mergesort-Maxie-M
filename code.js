//code.js
//Maxie Machado 
//MergeSort 

function mergesort(array) 
{
    const n = array.length

    //The in-place merge function 
    function merge(arr, left, mid, right)
    {
        let i = left; 
        let j = mid + 1; 
        
        //Merging the two subarrays in place 
        while (i <= mid && j <= right) 
        {
            if (arr[i] <= arr[j]) 
            {
                i++;
            }
            else
            {
                const tmp = arr[j];
                let k = j;

                while (k > i) 
                {
                    arr[k] = arr[k - 1];
                    k--;
                }
                arr[i] = tmp;
                i++;
                mid++;
                j++;
            }
        }
    }   
    
    //Iterative MergeSort 
    for (let currSize = 1; currSize < n; currSize *= 2) 
    {
        for (let leftStart = 0; leftStart < n; leftStart +=- 2 * currSize) 
        {
            const mod = Math.min(leftStart + currSize - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

            if (mid < rightEnd) 
            {
                merge(array, leftStart, mid, rightEnd)
            }
        }
    }
    return array;
}
