/**
 * Floyd-Warshall Algorithm
 * Is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph.
 * This algorithm works for both the directed and undirected weighted graphs.
 * Returns a matrix with the shortest path
 */

 /////////////// Solution ///////////////

 /**
  * Returns the shortest path between all vertices
  * @param {Array} matrix 
  * @returns {Array}
  */
 const floydWarshall = matrix => {
   const numberOfVertices = matrix.length;
   // Create a variable to represent the intermediate, k
   for (let k=0; k < numberOfVertices; k++) {
     // create a varaible to represent a row
     for (let row = 0; row < numberOfVertices; row++) {
       // create a variable to represent a colum in the matrix
       for (let col = 0; col < numberOfVertices; col++) {
         matrix[row][col] = Math.min(matrix[row][col], matrix[row][k] + matrix[k][col]);
       }
     }
   }

   return matrix;
 }

const INF = 999; // represent no route
const graph = [
  [0, 3, INF, 5],
  [2, 0, INF, 4],
  [INF, 1, 0, INF],
  [INF, INF, 2, 0]
];
console.log(floydWarshall(graph))

// Shortest path is 
// ans = [
//   [ 0, 3, 7, 5 ],
//   [ 2, 0, 6, 4 ],
//   [ 3, 1, 0, 5 ],
//   [ 5, 3, 2, 0 ]
// ]
