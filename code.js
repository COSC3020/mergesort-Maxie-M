//code.js
//Maxie Machado 
//MergeSort 

function mergesort(array) 
{
   let len = array.length;

   if (len <= 1) 
   {
    return array; 
   }

   for (let size = 1; size < len; size *= 2) 
   {
    for (let start = 0; start < len; start += 2 * size) 
    {
        let mid = Math.min(start + size - 1, len - 1);
        let end = Math.min(start + 2 * size - 1, len - 1);
        mergeInPlace(array, start, mid, end);
    }
   }
   return array;
}

function mergeInPlace(array, start, mid, end) 
{
    let left = start;
    let right = mid + 1;

    if (array[mid] <= array[right])
    {
        return;
    }

    while (left <= mid && right <= end) 
    {
        if (array[left] <= array[right])
        {
            left++;
        }
        else{
            let value = array[right];
            let index = right;
    
            while (index > left)
            {
                array[index] = array[index -1];
                index--;
            }
            array[left] = value;
    
            left++;
            mid++;
            right++;
        }
    }
}
