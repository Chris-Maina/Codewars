class Graph:
    def __init__(self, size):
        self.size = size
        self.vertices = [''] * size
        self.adj_matrix = [[0] * size for _ in range(size)]

    
    def add_weight(self, u, v, weight):
        ''' Adds the weight/distance between 2 vertices
        Args:
            u: first vertex
            v: second vertex
            weight: distance between the two vertices
        Raises:
            ArgumentErrorException
        '''
        if u < 0 or u >= self.size:
            raise  ArgumentError(f"Vertex {u} is out of range") 
        if v < 0 or v >= self.size:
            raise ArgumentError(f"Vertex {v} is out of range")
          
        self.adj_matrix[u][v] = weight
        self.adj_matrix[v][u] = weight

    def add_vertex_data(self, index, data):
        ''' Adds data to the vertex
        Args:
            index: the position to which you want to add data
            data: value to assign to the index
        Raises:
            ArgumentError
        '''
        if index < 0 or index > self.size:
            raise ArgumentError(f"Position {index} is out of range")
        self.vertices[index] = data

    def dijkstra(self, start_vertex):
        ''' Performs the Dijkstra algorithm
        Dijkstra's algorithm finds the shortest path from one vertex to all other vertices
        Args:
            start_vertex: the starting vertex
            distances: the distance from the start vertex to every other vertex
        Raises:
            ArgumentError
        '''
        if start_vertex not in self.vertices:
            raise ArgumentError("Unknown vertex")
        # Step 1: Set initial distances to all vertices
        # starting vertex to 0 and others infinity
        distances = [float('inf')] * self.size
        start_vertex_index = self.vertices.index(start_vertex)
        distances[start_vertex_index] = 0;
        visited = [False] * self.size

        # Start going through the vertices
        for _ in range(self.size):
            min_distance = float('inf')
            u = None
            # Step 2: Find the unvisited vertex with the least/minimum distance
            # Track the minimum distance and the respective vertex
            for i in range(self.size):
                if not visited[i] and distances[i] < min_distance:
                    min_distance = distances[i]
                    u = i

            # Exit the loop. We are done
            if u is None:
                break

            # Step 3: Mark as visited
            visited[u] = True

            # Step 4: Go through adjacent neighbors, get distance from visited                  vertex record/save
            # Go back to step 2 and repeat for all vertices
            for v in range(self.size):
              if not visited[v] and self.adj_matrix[u][v] != 0:
                  alt = distances[u] + self.adj_matrix[u][v]
                  if alt < distances[v]:
                      distances[v] = alt

        return distances
            

graph = Graph(7)
graph.add_vertex_data(0, "A")
graph.add_vertex_data(1, "B")
graph.add_vertex_data(2, "C")
graph.add_vertex_data(3, "D")
graph.add_vertex_data(4, "E")
graph.add_vertex_data(5, "F")
graph.add_vertex_data(6, "G")

graph.add_weight(3, 0, 4) # D-A, weight 4
graph.add_weight(3, 4, 2) # D-E, weight 2
graph.add_weight(0, 2, 3) # A-C, weight 3
graph.add_weight(0, 4, 4) # A-E, weight 4
graph.add_weight(4, 2, 4) # E-C, weight 4
graph.add_weight(4, 6, 5) # E-G, weight 5
graph.add_weight(2, 5, 5) # C-F, weight 5
graph.add_weight(2, 1, 2) # C-B, weight 2
graph.add_weight(2, 6, 5) # C-G, weight 5
graph.add_weight(6, 5, 5) # G-F, weight 5
graph.add_weight(1, 5, 2) # B-F, weight 2

distances = graph.dijkstra("D")

for i, dist in enumerate(distances):
    print(f"Shortest distance from vertext D to {graph.vertices[i]} is {dist}")
