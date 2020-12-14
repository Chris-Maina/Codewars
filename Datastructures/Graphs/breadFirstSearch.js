const BFS = matrix => {
  const rows = matrix.length;
  const columns = matrix[0].length;

  // Find
}

class BFS {
  constructor(matrix) {
    this.matrix = matrix;
    this.visited = [];
    this.rowQueue = [];
    this.columnQueue = [];
  }

  isVisited(point) {
    return Boolean(this.visited.find(el => JSON.stringify(el) === JSON.stringify(point)))
  }

  getAdjacentNeighbors(row, col) {
    // Nort, south, east, west
    const rowDirection = [1, -1, 0, 0];
    const colDirection = [0, 0, 1, -1];
    for(let i=0; i < 4; i++) {
      let rowNeighbor = row + rowDirection[i];
      let columnNeighbor = col + colDirection[i];

      if (rowNeighbor < 0 || columnNeighbor < 0) continue;
      if (rowNeighbor > this.matrix.length || columnNeighbor > this.matrix[0].length) continue;

      let point = { x: rowNeighbor, y: columnNeighbor };
      if (this.isVisited(point)) continue;

      this.rowQueue.push(rowNeighbor);
      this.columnQueue.push(colDirection);
      this.visited.push({ x: rowNeighbor, y: colDirection });
    }
  }



  findShortestPath(query) {
    const [originX, originY, destX, destY] = query;
    this.rowQueue.push[originX];
    this.columnQueue.push[originY];
    this.visited.push({ x: originX, y: originY });
    let reachedEnd = false;

    while(this.rowQueue.length) {
      let currentRow = this.rowQueue.shift(); 
      let currentCol = this.columnQueue.shift();
      if (currentRow === destX && currentCol === destY) {
        reachedEnd = true;
        break;
      }
      this.getAdjacentNeighbors(currentRow, currentCol);
    }
  }

  getSumOfWeight = () => { 
    return this.visited.reduce((acc, next) => {
      acc = acc + this.matrix[next.x][next.y];
    }, 0)
  }
}