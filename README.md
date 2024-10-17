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
  
**Time Complexity:**
- Each of the $\log_2(n)$ iterations of the outer loop, the inner loop will process all $n$ elements 
- The total time complexity will be $O(n\log n)$
  
**Space Complexity:** 
- Due to the merge being done in-place, there will be no additional arrays that shall be created. With this the space complexity is $O(1)$
  
**Conclusion:** 

With all all the following information the worst-time complexity of this algorithm is $\Theta(n\log n)$, with a space complexity of $\Theta(1)$. This is due to the in-place merging. 

## Plagiarism Statement
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources
**Repositories: Used as reference to better understand assignment** 
- mergesort-rmille70 
- mergesort-Boomboomyoyo
- mergesort-ziyuWang6666 
