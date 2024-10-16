
class Node
{
    constructor(cell, parent = null)
    {
        this.x = cell.x;
        this.y = cell.y;
        this.color = cell.color;
        this.tag = cell.tag;

        this.parent = parent;

        // adjacent cells
        this.left = myGame.grid.cells.find((elem) =>
            elem.x === this.x - myGame.grid.sizeR &&
            elem.y === this.y,
        ) ?? null;

        this.right = myGame.grid.cells.find((elem) =>       
            elem.x === this.x + myGame.grid.sizeR &&
            elem.y === this.y,
        ) ?? null;

        this.top = myGame.grid.cells.find((elem) =>       
            elem.x === this.x &&
            elem.y === this.y - myGame.grid.sizeC,
        ) ?? null;

        this.bot = myGame.grid.cells.find((elem) =>       
            elem.x === this.x &&
            elem.y === this.y + myGame.grid.sizeC,
        ) ?? null;
    }
}

function buildRes(node)
{
    var res = [];

    while (node !== null)
    {
        res.push(node);
        node = node.parent;
    }
    return res;
}

function color(visited, present)
{
    for (var cell of visited)
    {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = "black";
        ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
        ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
    }

    for (var cell of present)
        {
            ctx.fillStyle = 'yellow';
            ctx.strokeStyle = "black";
            ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
            ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
        }
}

function inArray(visited, obj)
{
    for ( var node of visited )
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
    var queue = [];
    var nRoot = new Node(root);
    var visited = [];
    queue.push(nRoot);

    while (queue.length != 0)
    {
        const size = queue.length;
        for (var i = 0; i < size; i++)
        {
            var node = queue.shift(); // both take and pop here
            visited.push(node);
            //console.log(node);

            if (node.tag === 'end') { return buildRes(node);}

            if (node.left !== null && !inArray(visited, node.left))
            {
                var left = new Node(node.left, node);
                queue.push(left);
            }

            if (node.top !== null && !inArray(visited, node.top))
            {
                var top = new Node(node.top, node);
                queue.push(top);
            }

            if (node.right !== null && !inArray(visited, node.right))
            {
                var right = new Node(node.right, node);
                queue.push(right);
            }

            if (node.bot !== null && !inArray(visited, node.bot))
            {
                var bot = new Node(node.bot, node);
                queue.push(bot);
            }
        }
    }
}
