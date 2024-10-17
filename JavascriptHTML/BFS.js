
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
constructor() {}

visited = [];
queue = [];
path = []

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


BFS(root, eNode)
{
    const nRoot = new Node(root);
    this.queue.push(nRoot);

    while (this.queue.length != 0)
    {
        const size = this.queue.length;
        for (let i = 0; i < size; i++)
        {
            //console.log(JSON.stringify(visited));
            const node = this.queue.shift(); // both take and pop here

            if (node.tag === 'end') {this.buildRes(node); return;}

            if (this.inArray(this.visited, node)) {continue;}
            this.visited.push({x: node.x, y: node.y});

            // get adjacent cells
            const left = myGame.grid.cells.find((elem) =>
                elem.x === node.x - myGame.grid.sizeR &&
                elem.y === node.y &&
                elem.color === node.color ,
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

            if (left !== null)
            {
                const leftN = new Node(left, node);
                this.queue.push(leftN);
            }

            if (top !== null)
            {
                const topN = new Node(top, node);
                this.queue.push(topN);
            }

            if (right !== null)
            {
                const rightN = new Node(right, node);
                this.queue.push(rightN);
            }

            if (bot !== null)
            {
                const botN = new Node(bot, node);
                this.queue.push(botN);
            }
        }
    }
}
}
