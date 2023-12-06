import unittest


class TriangularMesh:
    def __init__(self, n):
        self.mesh = {}
        self.length = n
        self.__connect_nodes()

    def ___initialize_nodes(self):
        for i in range(1, (self.length * self.length) + 1):
            self.mesh[i] = set()

    def __connect_nodes(self):
        self.___initialize_nodes()
        top_diff = 2

        for i in range(2, self.length+1):
            row_start = (i*(i-2)) + 2
            row_end = i*i
            current = row_start
            has_top = False
            while(current <= row_end):
                if current != row_start:
                    self.mesh[current].add(current-1)
                if current != row_end:
                    self.mesh[current].add(current+1)
                if (has_top):
                    top = current - top_diff
                    self.mesh[current].add(top)
                    self.mesh[top].add(current)
                has_top = not has_top
                current += 1
            top_diff += 2

    def bfs_shortest_path(self, start, goal):
        graph = self.mesh

        if start not in graph:
            return -2

        if goal not in graph:
            return -2

        explored = []
        queue = [[start]]

        if start == goal:
            return 1

        while queue:
            path = queue.pop(0)
            node = path[-1]

            if node not in explored:
                neighbours = graph[node]

                for neighbour in neighbours:
                    new_path = list(path)
                    new_path.append(neighbour)
                    queue.append(new_path)

                    if neighbour == goal:
                        # print("Shortest path = ", *new_path)
                        return len(new_path)
                explored.append(node)

        # Condition when the nodes
        # are not connected
        print("No connecting path")
        return -1


def validate_length(n):
    try:
        num = int(n)
        if num < 1:
            return False
    except ValueError:
        return False
    return True


def driver(data):
    try:
        length, start, end = data
    except ValueError:
        return -1

    if(not validate_length(length)):
        return -1
    mesh = TriangularMesh(length)
    min_steps = mesh.bfs_shortest_path(start, end)
    return min_steps


def testCaseData(filename="input.in"):
    data = []
    with open(filename, 'r') as reader:
        data = list(map(int, reader.readlines()))
    return data


    # Driver Code
if __name__ == "__main__":
    data = testCaseData()
    driver(data)


class TestTriangularMesh(unittest.TestCase):
    def test_1(self):
        """
        Test single node, with same start and goal
        """
        data = [1, 1, 1]
        result = driver(data)
        self.assertEqual(result, 1)

    def test_2(self):
        """
        Test multiple nodes, with same start and goal
        """
        data = [2, 1, 1]
        result = driver(data)
        self.assertEqual(result, 1)

    def test_3(self):
        """
        Test start not in graph
        """
        data = [2, 23, 1]
        result = driver(data)
        self.assertEqual(result, -2)

    def test_4(self):
        """
        Test end not in graph
        """
        data = [2, 2, 13]
        result = driver(data)
        self.assertEqual(result, -2)

    def test_5(self):
        """
        Test start, end not in graph
        """
        data = [2, 17, 19]
        result = driver(data)
        self.assertEqual(result, -2)

    def test_6(self):
        """
        Test start, end are adjacent vertically and linked
        """
        data = [42, 1, 3]
        result = driver(data)
        self.assertEqual(result, 2)

    def test_7(self):
        """
        Test start, end are adjacent vertically but not linked
        """
        data = [12, 3, 7]
        result = driver(data)
        self.assertEqual(result, 4)

    def test_8(self):
        """
        Test start, end are adjacent horizontally
        """
        data = [32, 36, 35]
        result = driver(data)
        self.assertEqual(result, 2)

    def test_9(self):
        """
        Test edge to any node in center
        """
        data = [10, 5, 23]
        result = driver(data)
        self.assertEqual(result, 7)

    def test_10(self):
        """
        Test from start to end node and vice versa
        """
        for i in range(2, 51):
            with self.subTest():
                data = [i, i*i, 1]
                result = driver(data)
                self.assertEqual(result, i + i - 1)
            with self.subTest():
                data = [i, 1, i*i]
                result = driver(data)
                self.assertEqual(result, i + i - 1)
