
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 1300;

let environments = {
    "Default" : {
        rows : 30,
        cols : 30,
        map : "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222200000000000000000000021111111120000000000000000000211111111112000000000000000002111111111111200000000000000021111111111111120000000000000211111111111111112000000000000211111111111111112000000000000021111111111111120000000000000021111111111111120000000000002111111111111111111200000000000000021111111120000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    }
} 

class Grid 
{
    constructor(environment) 
    {
        this.nRows = environment.rows;
        this.nCols = environment.cols;
        this.cells = [];
        this.sizeR = Math.floor(canvas.width / this.nRows);
        this.sizeC = Math.floor(canvas.height / this.nCols);

        for (let i = 0; i < this.nRows; i++)
        {
            for (let j = 0; j < this.nCols; j++)
            {
                let c = 'blue';
                if (environment.map[30*i+j] === "0") {c = 'blue';}
                else if (environment.map[30*i+j] === "1")  {c = 'green';}
                else if (environment.map[30*i+j] === "2")  {c = 'grey'}
                this.cells.push(
                    { x: i * this.sizeR,
                      y: j * this.sizeC,
                      color: c,
                      tag: '',
                     });
            }
        }
    }

    draw(togglePath = false, search = null) 
    {
        if (togglePath && search !== null)
        {
            for (let node of search.queue) {
                let cell = myGame.grid.cells.find((elem) =>
                    elem.x === node.x &&
                    elem.y === node.y,
                );
                if (cell !== null) { cell.color = 'yellow'; }
                ctx.fillStyle = cell.color;
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }

            for (let cellv of search.visited) {
                let cell = myGame.grid.cells.find((elem) =>
                    elem.x === cellv.x &&
                    elem.y === cellv.y,
                );
                if (cell != null) { cell.color = 'red'; }
                ctx.fillStyle = cell.color;
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
            for (let cellv of search.path){
                let cell = myGame.grid.cells.find((elem) =>
                elem.x === cellv.x &&
                elem.y === cellv.y,
                );
                cell.color = 'white'; 
                ctx.fillStyle = 'white';
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
        }
        else 
        {
            for (const cell of this.cells) {
                ctx.fillStyle = cell.color;
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
        }
    }

    pathReady()
    {
        let count = 0;
        for (let cell of this.cells)
        {
            if (cell.tag === 'start')
            {
                return true;
            }
        }
        return false;
    }


    search(pattern)
    {
        //find start and end cells
        let root = myGame.grid.cells.find((elem) => elem.tag === 'start');
        let eNode = myGame.grid.cells.find((elem) => elem.tag === 'end');

        if (pattern === 'BFS')
        {
            let bfs = new Search();
            bfs.BFS(root, eNode);
            this.draw(true, bfs);
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
           
            if (!this.pathReady()) 
            {
                cell.tag = cell.tag === 'start' ? '' : 'start';
                ctx.fillStyle = 'black';
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
            else 
            {
                cell.tag = cell.tag === 'end' ? '' : 'end';
                this.search('BFS');
            }
            this.draw();
        })
    }
}

class Game 
{
    constructor(){};
    grid = new Grid(environments.Default);

    run() 
    {
        this.grid.draw();
        this.grid.click();
    }
}

let myGame = new Game();
myGame.run();

