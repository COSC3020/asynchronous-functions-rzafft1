[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12927942&assignment_repo_type=AssignmentRepo)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature. I have also not provided any test
code, but you can base yours on test code from other exercises.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

The worst case time complexity of this code is $O(n)$ where n is the size of the input array. The 'countMatches' function has a complexity of $O(n)$ where $n$ is the size of the input array. The 'countMatchesAsync' function divides the input array into 4 slices and calls the 'countMatches' function 4 times, executing each call/slice asynchronously. Therefore the input array in the 'countMatches' function will be of size = $n/4$. However even though we execute each call asynchronously, the total amount of work done in the 'countMatchesAsync' function is still $n$ not $n/4$. Although our asynchronous operations can improve our execution time, the worst case time complexity will still be $O(n)$

- resources : https://www.geeksforgeeks.org/javascript-promise-resolve-method/
