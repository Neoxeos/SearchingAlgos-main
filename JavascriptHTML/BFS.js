import { myGame } from ".";

class Node
{
    constructor(cell)
    {
        this.x = cell.x;
        this.y = cell.y;
        this.color = cell.color;
        this.tag = cell.tag;

        // adjacent cells
        this.left = myGame.grid.cells.find((elem) =>
        
            elem.x === this.x - myGame.grid.sizeR,
            elem.y === this.y,
        ) ?? null;

        this.right = myGame.grid.cells.find((elem) =>
        
            elem.x === this.x + myGame.grid.sizeR,
            elem.y === this.y,
        ) ?? null;

        this.top = myGame.grid.cells.find((elem) =>
        
            elem.x === this.x,
            elem.y === this.y - myGame.grid.sizeC,
        ) ?? null;

        this.bot = myGame.grid.cells.find((elem) =>
        
            elem.x === this.x,
            elem.y === this.y + myGame.grid.sizeC,
        ) ?? null;
    }
}

function BFS(root, eNode)
{
    var queue = [];
    var nRoot = new Node(root);
    queue.push(nRoot);

    while (queue.length != 0)
    {
        const size = queue.length;
        for (var i = 0; i < size; i++)
        {
            var node = queue.shift(); // both take and pop here
            if (node.tag === 'end') {return;}

            if (node.left !== null)
            {
                var left = new Node(node.left);
                queue.push(left);
            }
            if (node.top !== null)
            {
                var top = new Node(node.top);
                queue.push(top);
            }
            if (node.right !== null)
            {
                var right = new Node(node.right);
                queue.push(right);
            }
            if (node.bot !== null)
            {
                var bot = new Node(node.bot);
                queue.push(bot);
            }
        }
    }
}