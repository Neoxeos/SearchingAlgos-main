const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 1300;

class Grid 
{
    constructor(nRows, nCols) 
    {
        this.nRows = nRows;
        this.nCols = nCols;
        this.cells = [];
        this.sizeR = canvas.width / this.nRows;
        this.sizeC = canvas.height / this.nCols;

        for (var i = 0; i < this.nRows; i++)
        {
            for (var j = 0; j < this.nCols; j++)
            {
                this.cells.push(
                    { x: i * this.sizeR,
                      y: j * this.sizeC,
                      color: 'blue',
                      tag: '',
                     });
            }
        }
    }

    draw() 
    {
        for (const cell of this.cells)
        {
            ctx.fillStyle = cell.color;
            ctx.strokeStyle = "black";
            ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
            ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
        }
    }

    pathReady()
    {
        var count = 0;
        for (var cell of this.cells)
        {
            if (cell.color === 'white')
            {
                count++;
            }
            if (count >= 2)
            {
                return true;
            }
        }
        return false;
    }

    search(pattern)
    {
            //find start and end cells
        for (var cell of myGame.grid.cells)
        {
            if (cell.tag === 'start')
            {
                var root = cell;
            }
            if (cell.tag === 'end')
            {
                var eNode = cell;
            }
        }

        if (pattern === 'BFS')
        {
            
        }
    }

    click() 
    {
        canvas.addEventListener('click', (event) =>
        {
            // remove canvas start
            const mouseX = event.clientX - canvas.getBoundingClientRect().left;
            const mouseY = event.clientY - canvas.getBoundingClientRect().top;

            var cell = this.cells.find(
                (elem) => 
                    mouseX >= elem.x &&
                    mouseX <= elem.x + this.sizeR &&
                    mouseY >= elem.y &&
                    mouseY <= elem.y + this.sizeC
            );

            var check = this.pathReady();
            if (!check) {cell.tag = cell.tag === 'start' ? '' : 'start';}
            else {cell.tag = cell.tag === 'end' ? '' : 'end';}

            cell.color = cell.color === 'white' ? 'blue' : 'white';
            this.draw();
            
            if (check)
            {
                this.search('BFS');
            }
        })
    }
}

class Game 
{

    constructor(){};
    grid = new Grid(50, 50);

    run() 
    {
        this.grid.draw();
        this.grid.click();
    }
}

var myGame = new Game();
myGame.run();


export {myGame};