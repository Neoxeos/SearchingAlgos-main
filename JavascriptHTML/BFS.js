
class Node
{
    constructor(cell, parent = null)
    {
        this.x = cell.x;
        this.y = cell.y;
        this.color = cell.color;
        this.tag = cell.tag;

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

    if (this.queue.length === 0) {this.isRunning = false; return;}
}
}
