//search breadth in graph in width

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current)
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        }
        else {
            queue = [...queue, ...graph[current]];
        }
    }
}
console.log('dot is in graph or not = ', breadthSearch(graph, 'a', 'g'));


