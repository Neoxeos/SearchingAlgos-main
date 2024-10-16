
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
        this.sizeR = Math.floor(canvas.width / this.nRows);
        this.sizeC = Math.floor(canvas.height / this.nCols);

        for (let i = 0; i < this.nRows; i++)
        {
            for (let j = 0; j < this.nCols; j++)
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
        let count = 0;
        for (let cell of this.cells)
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

    colorPath(cells)
    {
        for (let cell of cells)
        {
            let c = myGame.grid.cells.find((elem) =>
            elem.x === cell.x &&
            elem.y === cell.y,);
            c.color = "white";
        }
    }

    search(pattern)
    {
            //find start and end cells
        let root;
        let eNode; 
        for (let cell of myGame.grid.cells)
        {
            if (cell.tag === 'start')
            {
                root = cell;
            }
            if (cell.tag === 'end')
            {
                eNode = cell;
            }
        }

        if (pattern === 'BFS')
        {
            this.colorPath(BFS(root, eNode));
        }
    }

    click() 
    {
        canvas.addEventListener('click', (event) =>
        {
            // remove canvas start
            const mouseX = event.clientX - canvas.getBoundingClientRect().left;
            const mouseY = event.clientY - canvas.getBoundingClientRect().top;

            let cell = this.cells.find(
                (elem) => 
                    mouseX >= elem.x &&
                    mouseX <= elem.x + this.sizeR &&
                    mouseY >= elem.y &&
                    mouseY <= elem.y + this.sizeC
            );

            cell.color = cell.color === 'white' ? 'blue' : 'white';
            
            let check = this.pathReady();
            if (!check) {cell.tag = cell.tag === 'start' ? '' : 'start';}
            else {cell.tag = cell.tag === 'end' ? '' : 'end';}
            
            if (check)
            {
                this.search('BFS');
            }

            this.draw();
        })
    }
}

class Game 
{

    constructor(){};
    grid = new Grid(100, 100);

    run() 
    {
        this.grid.draw();
        this.grid.click();
    }
}

let myGame = new Game();
myGame.run();

