

https://jsbin.com/?js,console

let _coins = [1, 3, 4, 5]
let _amount = 7

let _coins = [1, 5, 6, 9]
let amount =  13

const _coins = [ 1, 2, 8, 9, 16, 17, 50, 55]
const _amount = 47;

const makeSum = (coins, amount) => {
  return {17: 2, 9: 1, 2: 2}
}

console.log(makeSum(_coins, _amount));

const _coins = [1, 2, 5, 10, 20, 50, 100, 500];
const _amount = 93;

const makeSum = (coins, amount) => {
  return {
      50: 1, 20: 2, 2: 1,  1: 1
  }
}
console.log(makeSum(_coins, _amount));


const num_ = "0333 3374443"
//  One zero's, Five three's, One Seven, three Four's and One three
// 1 0, 5 3, 1 7, 3 4, 1 3
// 10 53 17 34 13

const countAndSay = (num) => {
  console.log(num)
  return 1053173413
}
console.log(countAndSay(num_))


const makeChange = (coins, amount) => {
    const count = coins.length;
    let remainingAmount = amount;
    const result = {};
    for(let i = count -1; i >= 0; i--) {
      if (remainingAmount === 0) break;
      const coinsCount = Math.floor(remainingAmount/coins[i]);

      if(coins[i] <= remainingAmount) {
        result[coins[i]] = coinsCount;
      }
      remainingAmount %= coins[i]
    }
    return result
}
class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

   addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({node: node2, weight: weight});
    this.adjacencyList[node2].push({node: node1, weight: weight});
   }

  findPathWithDijkstra(startNode, endNode) {
    let times = {};
    let backtrace = {};
    let pq = new PriorityQueue();

    times[startNode] = 0;

    this.nodes.forEach(node => {
      if (node !== startNode) {
        times[node] = Infinity
      }
    });

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      let currentNode = shortestStep[0];
      this.adjacencyList[currentNode].forEach(neighbor => {
        let time = times[currentNode] + neighbor.weight;
        if (time < times[neighbor.node]) {
          times[neighbor.node] = time;
          backtrace[neighbor.node] = currentNode;
          pq.enqueue([neighbor.node, time]);
        }
      });
    }

    let path = [endNode];
    let lastStep = endNode;
    while(lastStep !== startNode) {
      path.unshift(backtrace[lastStep])
      lastStep = backtrace[lastStep]
    }
    return `Path is ${path} and time is ${times[endNode]}`
  }
}

let map = new Graph();
map.addNode("Fullstack");
map.addNode("Starbucks");
map.addEdge("Fullstack", "Starbucks", 6);
map.addEdge("Fullstack", "Dig Inn", 7);


class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element){
    if (this.isEmpty()){
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++){
        if (element[1] < this.collection[i-1][1]){
          this.collection.splice(i-1, 0, element);
          added = true;
          break;
        }
      }
      if (!added){
        this.collection.push(element);
      }
    }
  };

  dequeue() {
    let value = this.collection.shift();
    return value;
  };

  isEmpty() {
    return (this.collection.length === 0)
  };
}
