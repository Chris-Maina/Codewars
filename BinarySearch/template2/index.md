## Templates 2

- An advanced way to implement Binary Search.
- Search Condition needs to access element's immediate right neighbor
- Use element's right neighbor to determine if condition is met and decide whether to go left or right.
- Gurantees Search Space is at least 2 in size at each step

NB: In order to split the search space into 2, create a condition that leads you to the right side of the search space. You need to go right first. i.e. left = middle + 1 ----> right.
You may find that the problem space is NOT sorted or cannot be sorted but the problem requires you to search.

Examples: First Bad Version problems in this folder
