
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

function buildRes(node)
{
    let res = [];

    while (node !== null)
    {
        res.push(node);
        node = node.parent;
    }
    return res;
}

function color(visited, present)
{
    for (let cell of visited)
    {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = "black";
        ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
        ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
    }

    for (let cell of present)
        {
            ctx.fillStyle = 'yellow';
            ctx.strokeStyle = "black";
            ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
            ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
        }
}

function inArray(visited, obj)
{
    for ( let node of visited )
    {
        if (obj.x === node.x && obj.y == node.y)
        {
            return true;
        }
    }
    return false;
}

function BFS(root, eNode)
{
    let queue = [];
    let nRoot = new Node(root);
    let visited = [];
    queue.push(nRoot);

    while (queue.length != 0)
    {
        const size = queue.length;
        for (let i = 0; i < size; i++)
        {
            console.log(JSON.stringify(visited));
            let node = queue.shift(); // both take and pop here

            // get adjacent cells
            let left = myGame.grid.cells.find((elem) =>
                elem.x === node.x - myGame.grid.sizeR &&
                elem.y === node.y,
            ) ?? null;
    
            let right = myGame.grid.cells.find((elem) =>       
                elem.x === node.x + myGame.grid.sizeR &&
                elem.y === node.y,
            ) ?? null;
    
            let top = myGame.grid.cells.find((elem) =>       
                elem.x === node.x &&
                elem.y === node.y - myGame.grid.sizeC,
            ) ?? null;
    
            let bot = myGame.grid.cells.find((elem) =>       
                elem.x === node.x &&
                elem.y === node.y + myGame.grid.sizeC,
            ) ?? null;


            visited.push({x: node.x, y: node.y});
            //console.log(JSON.stringify(queue));
            //console.log(node);

            if (node.tag === 'end') { return buildRes(node);}

            if (left !== null && !inArray(visited, left))
            {
                let leftN = new Node(left, node);
                queue.push(leftN);
            }

            if (top !== null && !inArray(visited, top))
            {
                let topN = new Node(top, node);
                queue.push(topN);
            }

            if (right !== null && !inArray(visited, right))
            {
                let rightN = new Node(right, node);
                queue.push(rightN);
            }

            if (bot !== null && !inArray(visited, bot))
            {
                let botN = new Node(bot, node);
                queue.push(botN);
            }
            color(visited, queue);
        }
    }
}
