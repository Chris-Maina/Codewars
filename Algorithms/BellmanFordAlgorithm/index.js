/**
 * BellmanFord Algorithm
 * This algorithm is used to find the shortest path from a source to 
 * all other vertices
 */

/////////////// Solution ///////////////

class Graph {
  constructor(vertices, graph = []) {
    this.vertices = vertices;
    this.graph = graph;
  }

  /**
   * User to create a graph
   * @param {number} start - starting vertex
   * @param {number} dest - destination vertex
   * @param {number} weight - weight connecting the 2
   */
  add_weight(start, dest, weight) {
    this.graph.push([start, dest, weight]);
  }

  /**
   * 
   * @param {Array} dist 
   */
  mapVertexToWeight(dist) {
    const res = {};
    for (let v = 0; v<this.vertices; v++) {
      res[v] = dist[v];
    }
    return res;
  }

  /**
   * 1. Assigns the source vertex a weight of 0 and all other vertices infinity
   * 2. Visit each edge and relax the path distance V - 1 times
   * 3. Go through all the vertices and edges again to check for negative cycles
   * @param {number} srcVertex 
   */
  bellmanFord(srcVertex) {
    const infinity = 999;
    // create an array to store sum of weights/costs
    const dist = Array.from({ length: this.vertices }).map(el => el = infinity);
    dist[srcVertex] = 0;

    // relax edges of all vertices |V| - 1 times
    for (let v = 0; v < this.vertices - 1; v++) {
      this.graph.forEach(element => {
        const [start, dest, weight] = element;
        if (dist[start] !== infinity && (dist[start] + weight < dist[dest])) {
          dist[dest] = dist[start] + weight;
        }
      });
    }

    // check for negative cycles
    this.graph.forEach(element => {
      const [start, dest, weight] = element;
      if (dist[start] !== infinity && (dist[start] + weight < dist[dest])) return;
    });

    return dist;
  }
}

const dist = [
  [0, 1, 5],
  [0, 2, 4],
  [1, 3, 3],
  [2, 1, 6],
  [3, 2, 2]
];

const graph = new Graph(5, dist);
const sol = graph.bellmanFord(1);
graph.mapVertexToWeight(sol)
