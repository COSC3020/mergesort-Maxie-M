# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Runtime Analysis, Maxie M.

**Algorithm Structure:**
- The outer loop will double the subarray size each iteration, running about $\log_2(n)$ times 
- The inner loop will merge adjacent subarrays, which will process the entire array in each iteration, will take $O(n)$ time

**Merge Operation:**
- The **mergeInPlace** function is where the merge operation is implemented.
- The **mergeInPlace** function includes:
  - comparing the elements from two halves (left and right)
  - shifting the right half of the elements when needed
  - in the **worst case**, every element in the left half might need to be shifted for each of the merges 
- Results in potentially $O(n)$ operations for each of the merges

**Complexity Calculations:** 
- Outer Loop: Runs $\log_2(n)$ times
- Inner Loop: Each iteration processes the entire array, $O(n)$
- Merge Operation: Shifting can lead to $O(n)$ for each merge 

**Total Time Complexity:**
- $\text{Total Time Complexity} = O(n)(\text{Inner Loop}) \times O(\log_2(n))(\text{Outer Loop}) + O(n)(\text{Shifting})$
- **Worst-Case Scenarios**: the extra $O(n)$ due to the shifting will lead to the following time complexity:
  - $\text{Worst-Case Time Complexity} = \Theta(n^2)$
    - This is due to the potential of quadratic time taken by shifting elements during the merge process
  
**Space Complexity:** 
- Due to the merge being done in-place, there will be no additional arrays that shall be created. With this the space complexity is $\Theta(1)$
  
**Conclusion:** 

With all of the following information the worst-time complexity of this algorithm is $\Theta(n^2)$, with a space complexity of $\Theta(1)$. This is due to the in-place merging. 

## Plagiarism Statement
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources
**Repositories: Used as reference to better understand assignment** 
- mergesort-rmille70 
- mergesort-Boomboomyoyo
- mergesort-ziyuWang6666 
