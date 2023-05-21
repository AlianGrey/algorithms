const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSeartch(graph, start, end) {
    let queue = []
    let current = 0;
    queue.push(start)

    while (queue.length > 0) {
        current = queue.shift();
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true;
        }
        else {
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(breadthSeartch(graph, 'a', 'n'))