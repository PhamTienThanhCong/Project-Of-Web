# Heapsort algorithm simulation web project

Access link: https://phamtienthanhcong.github.io/Project-Of-Web/heapSort/index.html

### Construction method

It will include 3 main steps:

1, Input data processing:
  - Get data from input thẻ tag
  - Randomly generate data without input
  - you can view it at: https://github.com/phamtienthanhcong/Project-Of-Web/blob/master/heapSort/function/input.js
  
2, Process data for each case
  - Since JavaScript will prioritize running some processes first, we won't be able to generate descriptions in its for loops.
  - So I created an intermediate array that stores the results after each run of the process.
  - And those variables can contain the values of the array, the state of each element of the array (edit, delete, correct), position or comment,...
  - you can view it at: https://github.com/phamtienthanhcong/Project-Of-Web/tree/master/heapSort/function/heap_sort_function
  
3, Show on the screen each run
  - After having the data returned from the data processing function. I proceeded to show each part with time using `setInterval()`
  - Inside of `setInterval()` you can use any way to display your data. For me, I prefer `HTML Canvas Graphics` because it's easy to use and implement
  - you can view it at: https://github.com/phamtienthanhcong/Project-Of-Web/tree/master/heapSort/function
  
## Thank you and good luck for you!!!
