
class Node
{
    constructor(cell, parent = null)
    {
        this.x = cell.x;
        this.y = cell.y;
        this.color = cell.color;
        this.tag = cell.tag;
        this.cost = 0;
        this.depth;

        this.parent = parent;
    }
}

class Search{
constructor(root, eNode) { this.root = new Node(root); this.eNode = new Node(eNode); this.queue.push(this.root)}

visited = [];
queue = [];
path = [];
isRunning = false;

buildRes(node)
{
    while (node !== null)
    {
        this.path.push({x: node.x, y: node.y});
        node = node.parent;
    }
    return this.path;
}

inArray(visited, obj)
{
    for ( let node of this.visited )
    {
        if (obj.x === node.x && obj.y === node.y)
        {
            return true;
        }
    }
    return false;
}


strategy(type)
{
    //this.queue.push(this.root);
    this.isRunning = true;
    while (this.queue.length != 0)
    {
        
        if (type === 'bfs')
            { 
            const size = this.queue.length;
            for (let i = 0; i < size; i++) {
                //console.log(JSON.stringify(visited));
                let node = this.queue.shift(); // both take and pop here

                if (node.tag === 'end') { this.buildRes(node); this.isRunning = false; return; }

                if (this.inArray(this.visited, node)) { continue; }
                this.visited.push({ x: node.x, y: node.y });

                // get adjacent cells
                const left = myGame.grid.cells.find((elem) =>
                    elem.x === node.x - myGame.grid.sizeR &&
                    elem.y === node.y &&
                    elem.color === node.color,
                ) ?? null;

                const right = myGame.grid.cells.find((elem) =>
                    elem.x === node.x + myGame.grid.sizeR &&
                    elem.y === node.y &&
                    elem.color === node.color,
                ) ?? null;

                const top = myGame.grid.cells.find((elem) =>
                    elem.x === node.x &&
                    elem.y === node.y - myGame.grid.sizeC &&
                    elem.color === node.color,
                ) ?? null;

                const bot = myGame.grid.cells.find((elem) =>
                    elem.x === node.x &&
                    elem.y === node.y + myGame.grid.sizeC &&
                    elem.color === node.color,
                ) ?? null;

                if (left !== null) {
                    const leftN = new Node(left, node);
                    this.queue.push(leftN);
                }

                if (top !== null) {
                    const topN = new Node(top, node);
                    this.queue.push(topN);
                }

                if (right !== null) {
                    const rightN = new Node(right, node);
                    this.queue.push(rightN);
                }

                if (bot !== null) {
                    const botN = new Node(bot, node);
                    this.queue.push(botN);
                }
            }
        }

        if (type === "dfs")
        {
            //console.log(JSON.stringify(visited));
            let node = this.queue.pop(); // both take and pop here // note this is called queue but really it is a stack

            if (node.tag === 'end') { this.buildRes(node); this.isRunning = false; return; }

            if (this.inArray(this.visited, node)) { continue; }
            this.visited.push({ x: node.x, y: node.y });

            // get adjacent cells
            const left = myGame.grid.cells.find((elem) =>
                elem.x === node.x - myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const right = myGame.grid.cells.find((elem) =>
                elem.x === node.x + myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const top = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y - myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            const bot = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y + myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            if (left !== null) {
                const leftN = new Node(left, node);
                this.queue.push(leftN);
            }

            if (top !== null) {
                const topN = new Node(top, node);
                this.queue.push(topN);
            }

            if (right !== null) {
                const rightN = new Node(right, node);
                this.queue.push(rightN);
            }

            if (bot !== null) {
                const botN = new Node(bot, node);
                this.queue.push(botN);
            }   
        }

        if (type === "A")
        {
            let node = this.queue.shift();

            // heuristic function for now based on manhattan distance since we are considering 4 cell movement
            function h(n, end) { return Math.abs(n.x - end.x) + Math.abs(n.y - end.y); };

            // evaluation function made to return -1,0,1 depending on nodes to be compatible with sort Javascript function
            function f(n, end) { return n.cost + h(n, end); };

            if (node.tag === 'end') { this.buildRes(node); this.isRunning = false; return; }

            if (this.inArray(this.visited, node)) { continue; }
            this.visited.push({ x: node.x, y: node.y });

            // get adjacent cells
            const left = myGame.grid.cells.find((elem) =>
                elem.x === node.x - myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const right = myGame.grid.cells.find((elem) =>
                elem.x === node.x + myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const top = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y - myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            const bot = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y + myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            if (left !== null) {
                const leftN = new Node(left, node);
                leftN.cost = myGame.grid.sizeR + node.cost;
                this.queue.push(leftN);
            }

            if (top !== null) {
                const topN = new Node(top, node);
                topN.cost = myGame.grid.sizeC + node.cost;
                this.queue.push(topN);
            }

            if (right !== null) {
                const rightN = new Node(right, node);
                rightN.cost = myGame.grid.sizeR + node.cost;
                this.queue.push(rightN);
            }

            if (bot !== null) {
                const botN = new Node(bot, node);
                botN.cost = myGame.grid.sizeC + node.cost;
                this.queue.push(botN);
            }

            // sort queue to get priority_queue DSA
            // this.queue.sort((a, b) => {
            //     if (f(a, this.eNode) < f(b, this.eNode)) { return -1; }
            //     if (f(a, this.eNode) > f(b, this.eNode)) { return 1; }
            //     else { return 0; }
            // })
            this.queue.sort((a,b) => {return f(a,this.eNode) - f(b,this.eNode)});
            //console.log(this.queue);
        }
    }


    this.isRunning = false;
    return;
}


// allows us to go step by step
iter_strategy(type)
{
    this.isRunning = true;
    const size = this.queue.length;
    if (type === 'bfs') { 
        for (let i = 0; i < size; i++) {
            //console.log(JSON.stringify(visited));
            let node = this.queue.shift();  // both take and pop here

            //if (type === 'bfs') { node = this.queue.shift(); } // both take and pop here
            //if (type === 'dfs') { node = this.queue.pop(); } // note this is called queue but really it is a stack

            if (node.tag === 'end') { this.buildRes(node); this.isRunning = false; return; }

            if (this.inArray(this.visited, node)) { continue; }
            this.visited.push({ x: node.x, y: node.y });

            // get adjacent cells
            const left = myGame.grid.cells.find((elem) =>
                elem.x === node.x - myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const right = myGame.grid.cells.find((elem) =>
                elem.x === node.x + myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const top = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y - myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            const bot = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y + myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            if (left !== null) {
                const leftN = new Node(left, node);
                this.queue.push(leftN);
            }

            if (top !== null) {
                const topN = new Node(top, node);
                this.queue.push(topN);
            }

            if (right !== null) {
                const rightN = new Node(right, node);
                this.queue.push(rightN);
            }

            if (bot !== null) {
                const botN = new Node(bot, node);
                this.queue.push(botN);
            }
        }
    }

    if (type === "dfs")
    {
        let node = this.queue.pop();

        if (node.tag === 'end') { this.buildRes(node); this.isRunning = false; return; }

        if (this.inArray(this.visited, node)) { return; }
        this.visited.push({ x: node.x, y: node.y });

        // get adjacent cells
        const left = myGame.grid.cells.find((elem) =>
            elem.x === node.x - myGame.grid.sizeR &&
            elem.y === node.y &&
            elem.color === node.color,
        ) ?? null;

        const right = myGame.grid.cells.find((elem) =>
            elem.x === node.x + myGame.grid.sizeR &&
            elem.y === node.y &&
            elem.color === node.color,
        ) ?? null;

        const top = myGame.grid.cells.find((elem) =>
            elem.x === node.x &&
            elem.y === node.y - myGame.grid.sizeC &&
            elem.color === node.color,
        ) ?? null;

        const bot = myGame.grid.cells.find((elem) =>
            elem.x === node.x &&
            elem.y === node.y + myGame.grid.sizeC &&
            elem.color === node.color,
        ) ?? null;

        if (left !== null) {
            const leftN = new Node(left, node);
            this.queue.push(leftN);
        }

        if (top !== null) {
            const topN = new Node(top, node);
            this.queue.push(topN);
        }

        if (right !== null) {
            const rightN = new Node(right, node);
            this.queue.push(rightN);
        }

        if (bot !== null) {
            const botN = new Node(bot, node);
            this.queue.push(botN);
        }
    }

    if (type === "A")
        {
            let node = this.queue.shift();

            // heuristic function for now based on manhattan distance since we are considering 4 cell movement
            function h(n, end) { return Math.abs(n.x - end.x) + Math.abs(n.y - end.y); };

            // evaluation function made to return -1,0,1 depending on nodes to be compatible with sort Javascript function
            function f(n, end) { return n.cost + h(n, end); };

            if (node.tag === 'end') { this.buildRes(node); this.isRunning = false; return; }

            if (this.inArray(this.visited, node)) { return; }
            this.visited.push({ x: node.x, y: node.y });

            // get adjacent cells
            const left = myGame.grid.cells.find((elem) =>
                elem.x === node.x - myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const right = myGame.grid.cells.find((elem) =>
                elem.x === node.x + myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color,
            ) ?? null;

            const top = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y - myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            const bot = myGame.grid.cells.find((elem) =>
                elem.x === node.x &&
                elem.y === node.y + myGame.grid.sizeC &&
                elem.color === node.color,
            ) ?? null;

            // small optimization here by checking if in closed list 
            if (left !== null && !this.inArray(this.visited, left)) {
                const leftN = new Node(left, node);
                leftN.cost = myGame.grid.sizeR + node.cost;
                this.queue.push(leftN);
            }

            if (top !== null && !this.inArray(this.visited, top)) {
                const topN = new Node(top, node);
                topN.cost = myGame.grid.sizeC + node.cost;
                this.queue.push(topN);
            }

            if (right !== null && !this.inArray(this.visited, right)) {
                const rightN = new Node(right, node);
                rightN.cost = myGame.grid.sizeR + node.cost;
                this.queue.push(rightN);
            }

            if (bot !== null && !this.inArray(this.visited, bot)) {
                const botN = new Node(bot, node);
                botN.cost = myGame.grid.sizeC + node.cost;
                this.queue.push(botN);
            }

            // sort queue to get priority_queue DSA
            // this.queue.sort((a, b) => {
            //     if (f(a, this.eNode) < f(b, this.eNode)) { return -1; }
            //     if (f(a, this.eNode) > f(b, this.eNode)) { return 1; }
            //     else { return 0; }
            // })
            this.queue.sort((a,b) => {return f(a,this.eNode) - f(b,this.eNode)});
            //console.log(this.queue);
        }

    if (this.queue.length === 0) {this.isRunning = false; return;}
}
}
