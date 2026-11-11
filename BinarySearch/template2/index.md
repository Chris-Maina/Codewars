## Templates 2

- An advanced way to implement Binary Search.
- Search Condition needs to access element's immediate right neighbor
- Use element's right neighbor to determine if condition is met and decide whether to go left or right.
- Gurantees Search Space is at least 2 in size at each step

NB: An element's right neighbor is elementPosition + 1. Example in the sequence 3, 4, 5, we can 
deduce that the right neighbor of element 4 is 5. Your search condition should observe both the current index and right neighbor. Your termination condition should allow a search space of 2. e.g left < right i.e. left, left === right.

Examples: First Bad Version problems in this folder
