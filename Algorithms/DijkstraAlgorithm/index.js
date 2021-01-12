'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isVisited(visitArr, point) {
    return Boolean(visitArr.find(el => JSON.stringify(el) === JSON.stringify(point)))
}

// Order vertices according to weights with the least first i.e Ascending order
function getNextVertices(neigbors) {
    return neigbors.sort((a, b) => {
        if (a.val < b.val) {
            return -1;
        } else if (a.val > b.val) {
            return 1;
        }
        return 0;
    }).map(el => [el.x, el.y])
}

function isValid(row, col, a) {
    const rowNum = parseInt(row, 10);
    const colNum = parseInt(col, 10);
    return (rowNum >= 0 && colNum >= 0 && rowNum < a.length && colNum < a[0].length);
}

function exploreNeighbors(vertex, visited, pQueue, distance, a) {
  const [row, col] = vertex;

  // Coordinates of neighbors on cartesian plane
  const rowDirection = [-1, 0, 0, 1];
  const colDirection = [0, -1, 1, 0];

  const neighbors = [];

  // Find neighbors
  for (let i=0; i<4; i++) {
      const rowNeighbor = row + rowDirection[i];
      const colNeighbor = col + colDirection[i];

      if (!isValid(rowNeighbor, colNeighbor, a)) continue;
      if (isVisited(visited, [rowNeighbor, colNeighbor])) continue;
      
      const tempDist = distance[`${row}${col}`] + a[rowNeighbor][colNeighbor];
      if (tempDist < distance[`${rowNeighbor}${colNeighbor}`] ) {
          distance[`${rowNeighbor}${colNeighbor}`] = tempDist;
      }
      neighbors.push({
          x: rowNeighbor,
          y: colNeighbor,
          val: distance[`${rowNeighbor}${colNeighbor}`]
      });
  }
  // Arrange neighbors with the one with least distance first.
  const orderedNeighbors = getNextVertices(neighbors);
  pQueue.push(...orderedNeighbors);
  visited.push(vertex);
}

function dijkstra(srcDestArr, a) {
    const [srcRow, srcCol, destRow, destCol] = srcDestArr;
    const infinity = 4000;
    const pQueue = [];
    const visited = [];
    const distance = {};

    // Set all nodes to infinity
    for(let row=0; row < a.length; row++) {
        for (let col = 0; col<a[row].length; col++) {
            distance[`${row}${col}`] = infinity;
        }
    }

    distance[`${srcRow}${srcCol}`] = 0;
    pQueue.push([srcRow, srcCol]);
    while(pQueue.length) {
        // Will be the min neighbour
        const poppedVertex = pQueue.shift();
        if (isVisited(visited, poppedVertex)) continue;
        if (poppedVertex[0] === null || poppedVertex[1] === null) return -1;
        if (poppedVertex[0] === destRow && poppedVertex[1] === destCol) {
            return distance[`${destRow}${destCol}`];
        }
        exploreNeighbors(poppedVertex, visited, pQueue, distance, a);
    }
    return -1;
}


// function neighbors(vertex, visited, pQueue, distance, a) {
//     const [row, col] = vertex;
//     // These arrays are used to get row and column 
//     // numbers of 4 neighbours of a given cell 
//     const rowNum = [-1, 0, 0, 1];
//     const colNum = [0, -1, 1, 0];
//     for (let i =0; i<4 ; i++) {
//         const newRow = row + rowNum[i];
//         const newCol = col + colNum[i];

//         if (isValid(newRow, newCol, a) && !isVisited(visited, [newRow, newCol])){
//             const tempDistance = distance[`${row}${col}`] + a[newRow][newCol];
//             distance[`${newRow}${newCol}`] = tempDistance;
//             pQueue.push([newRow, newCol]);
//             visited.push([newRow, newCol]);
//         }
//     }
// }

// function BFS(srcDestArr, a) {
//     const [srcRow, srcCol, destRow, destCol] = srcDestArr;
//     const infinity = 4000;
//     const pQueue = [];
//     const visited = [];
//     const distance = {};

//     // Set all nodes to infinity
//     for(let row=0; row < a.length; row++) {
//         for (let col = 0; col<a[row].length; col++) {
//             distance[`${row}${col}`] = infinity;
//         }
//     }

//     distance[`${srcRow}${srcCol}`] = 0;
//     pQueue.push([srcRow, srcCol]);
//     visited.push([srcRow, srcCol]);
//     while(pQueue.length) {
//         const poppedVertex = pQueue.shift();
//         if (poppedVertex[0] === destRow && poppedVertex[1] === destCol) {
//             return distance[`${destRow}${destCol}`];
//         };
//         neighbors(poppedVertex, visited, pQueue, distance, a);
//     }
//     return -1;
// }

/*
 * Complete the shortestPath function below.
 */
function shortestPath(a, queries) {
    /*
     * Write your code here.
     */
    const results = [];
    if (!a || !a.length || !queries || !queries.length) return results;
    queries.forEach(arr => {
        const res = dijkstra(arr, a);
        results.push(res);
    })
    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    const q = parseInt(readLine(), 10);

    let queries = Array(q);

    for (let queriesRowItr = 0; queriesRowItr < q; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = shortestPath(a, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

/**
 * 
0 0 0 0 0

1 9 9 9 1

0 0 0 0 0


0 0 2 4

0 3 2 3

1 1 1 3
 */