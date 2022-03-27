
import unittest


def get_common(index, points):
    common = points[index]
    while True and index + 1 < len(points):
        next_ = points[index + 1]
        if common[1] < next_[0]:
            break
        common = (max(common[0], next_[0]), min(common[1], next_[1]))
        index += 1
    return (index, common[1])


def optimal_points(segment_tuples):
    segment_tuples.sort()
    result = []
    start = 0
    while start < len(segment_tuples):
        start, common = get_common(start, segment_tuples)
        result.append(common)
        start += 1
    return result


def testCaseData(filename="input.in"):
    data = []
    with open(filename, 'r') as reader:
        _, *data = list(map(int, reader.read().split()))
    return data


def driver(data):
    segments = list(map(lambda x: (x[0], x[1]), zip(data[::2], data[1::2])))
    points = optimal_points(segments)
    return len(points)

    # Driver Code
if __name__ == "__main__":
    data = testCaseData()
    print(driver(data))


class TestTriangularMesh(unittest.TestCase):
    def test_1(self):
        """
        Test all disjoint but adjacent values
        """
        max_value = 24
        for i in range(2, max_value + 1, 2):
            data = list(range(1, i + 1))
            with self.subTest():
                result = driver(data)
                self.assertEqual(result, i // 2)

    def test_2(self):
        """
        Test all values which share a single common point
        """
        start = 1
        end = 24
        data = [start, end]
        while(end - start > 1):
            start += 1
            end -= 1
            data.append(start)
            data.append(end)
            with self.subTest():
                result = driver(data)
                self.assertEqual(result, 1)

    def test_3(self):
        """
        Test common scenario
        """
        data = [6, 7, 1, 5, 5, 7, 2, 5, 4, 5]
        result = driver(data)
        self.assertEqual(result, 2)

    def test_4(self):
        """
        Test common scenario with 2 common points
        """
        data = [2, 5, 1, 4, 3, 6, 6, 7, 5, 8]
        result = driver(data)
        self.assertEqual(result, 2)

    def test_5(self):
        """
        Test common scenario with 3 common points
        """
        data = [8, 9, 2, 5, 1, 4, 3, 6, 6, 7, 5, 8]
        result = driver(data)
        self.assertEqual(result, 3)

    def test_6(self):
        """
        Test same start end multiple values
        """
        data = [8, 8, 2, 2, 12, 12]
        result = driver(data)
        self.assertEqual(result, 3)

    def test_6(self):
        """
        Test same start end value with 0
        """
        data = [0, 0]
        result = driver(data)
        self.assertEqual(result, 1)
