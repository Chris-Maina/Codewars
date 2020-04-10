# Binary Search

Binary Search is an algorithm that divides the search space in 2 after every comparison. Binary Search should be considered every time you need to search for an index or element in a collection. If the collection is unordered, we can always sort it first before applying Binary Search.

There are very many ways to implement BS algorithm. Each of which divides the problem/search space into 2. I will discuss 3 ways/templates.

## Templates 1

- Most common way to solve BS problem.
- Search condition can be determined without comparing to the element's neighbors (or use specific elements around it).
- No post-processing required because at each step, you are checking to see if the element has been found. If you reach the end, then you know the element is not found.

NB: You do not need to compare the element's neighbors.

Examples: Sqrt(x) and Guess Number Higher or Lower problems in this folder
