/**
 * Course Schedule
  
  There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
  Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
  Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



  Example 1:
  Input: numCourses = 2, prerequisites = [[1,0]]
  Output: true
  Explanation: There are a total of 2 courses to take.
              To take course 1 you should have finished course 0. So it is possible.

  Example 2:
  Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
  Output: false
  Explanation: There are a total of 2 courses to take.
              To take course 1 you should have finished course 0, and to take course 0 you should
              also have finished course 1. So it is impossible.



  Constraints:
    - The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
    - You may assume that there are no duplicate edges in the input prerequisites.
    - 1 <= numCourses <= 10^5
 */

  /////////////////////// SOLUTION ///////////////////////

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * Time complexity: 0(V+E)
 */
var canFinish = function (numCourses, prerequisites) {
  if (!prerequisites.length || numCourses < 1) return true;

  const visited = Array.from({ length: numCourses }, x => x = false);
  const fullyExplored = [];
  // Create prerequisites map i.e [[1,0],[2,1]] becomese { 0: [], 1: [0], 2: [1] } 
  const prerequisiteMap = { ...Array.from({ length: numCourses }, x => x = []) };
  for (const [v1, v2] of prerequisites) {
    prerequisiteMap[v1].push(v2);
  }

  for (let i = 0; i < numCourses; i++) {
    /**
     * The solution below uses Topological sorting via DFS
     */
    if (hasCycleDFS(i, visited, fullyExplored, prerequisiteMap)) return false
  }
  return true;
};

/**
 * @description This function loops through each vertex, performing a depth first search
 * on outgoing vertices(prerequisites), terminating when it meets a vertex that has been visited 
 * or a vertext that has no outgoing edges.
 * @param {number} vertex - Vertex to explore
 * @param {boolean[]} visited - Boolean of visited vertices in the current iteration
 * @param {number[]} fullyExplored - Array of fully explored vertices. Topologically sorted vertices.
 * @param {[name: string]: number[]} prerequisiteMap - Edge list map for the graph
 */
const hasCycleDFS = (vertex, visited, fullyExplored, prerequisiteMap) => {
  // Detect vertices with no outgoing edges
  if (!prerequisiteMap[vertex].length) return false;
  // Detect cycles here
  if (visited[vertex]) return true;

  // In the current iteration, mark encountered vertices as visited i.e being explored.
  visited[vertex] = true;

  for (let index = 0; index < prerequisiteMap[vertex].length; index++) {
    if (hasCycleDFS(prerequisiteMap[vertex][index], visited, fullyExplored, prerequisiteMap)) return true;
  }

  // Since we are done with this iteration of the vertex, set it to false and mark it as fully explored
  visited[vertex] = false;
  fullyExplored.push(vertex);
}
