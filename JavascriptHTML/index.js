
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 1300;

function generateChaos(sizeR, sizeC)
{
    let s = [];
    for (let i = 0; i < sizeR * sizeC; i++) {
        let rand = Math.random() * (100 - 1) + 1;
        if (rand <= 10) { s.push(2); }
        if (rand > 10 && rand <= 41) { s.push(1); }
        else { s.push(0); }
    }

    let text = s.join("");
    return text;
}

let environments = {
    "Default" : {
        rows : 30,
        cols : 30,
        map : "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222200000000000000000000021111111120000000000000000000211111111112000000000000000002111111111111200000000000000021111111111111120000000000000211111111111111112000000000000211111111111111112000000000000021111111111111120000000000000021111111111111120000000000002111111111111111111200000000000000021111111120000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },

    "Chaos" : {
        rows: 50,
        cols: 50,
        map : generateChaos(50,50)
    },

    "ChaosBig" : {
        rows : 100,
        cols : 100,
        map : generateChaos(100,100)
    }
} 

class Grid 
{
    constructor(environment) 
    {
        this.nRows = environment.rows;
        this.nCols = environment.cols;
        this.cells = [];
        this.initalCells = [];
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

                this.initalCells.push(
                    { x: i * this.sizeR,
                      y: j * this.sizeC,
                      color: c,
                      tag: '',
                    });
            }
        }
    }

    draw(togglePath = false, search = null, inital = false) 
    {
        if (togglePath && search !== null)
        {
            for (const node of search.queue) {
                let cell = this.cells.find((elem) =>
                    elem.x === node.x &&
                    elem.y === node.y,
                );
                if (cell !== null) { cell.color = 'yellow'; }
                ctx.fillStyle = cell.color;
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }

            for (const cellv of search.visited) {
                let cell = this.cells.find((elem) =>
                    elem.x === cellv.x &&
                    elem.y === cellv.y,
                );
                if (cell != null) { cell.color = 'red'; }
                ctx.fillStyle = cell.color;
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
            for (const cellv of search.path){
                let cell = this.cells.find((elem) =>
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
                if (cell.tag === 'start') {ctx.fillStyle = 'white';}
                else {ctx.fillStyle = cell.color;}
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
        }
    }

    resetBoard()
    {
        for (const cell of this.initalCells)
            {
                let cellv = this.cells.find((elem) =>
                {
                    elem.x === cell.x &&
                    elem.y === cell.y;
                })
                console.log(cellv)
                //cellv.color = cell.color;
                //cellv.tag = cell.tag;
            }
    }

    pathReady()
    {
        for (const cell of this.cells)
        {
            if (cell.tag === 'end')
            {
                console.log('he');
                this.resetBoard();
                return false;
            }
        }
        for (const cell of this.cells)
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
        let root = this.cells.find((elem) => elem.tag === 'start');
        let eNode = this.cells.find((elem) => elem.tag === 'end');

        if (pattern === 'bfs')
        {
            let bfs = new Search();
            bfs.strategy(root, eNode, 'bfs');
            this.draw(true, bfs);
        }
        if (pattern === 'dfs')
        {
            let dfs = new Search();
            dfs.strategy(root, eNode, 'dfs');
            this.draw(true, dfs);
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
            }
            else 
            {
                cell.tag = cell.tag === 'end' ? '' : 'end';
                this.search('bfs');
                return;
            }
            this.draw();
        })
    }
}

class Game 
{
    constructor(){};
    grid = new Grid(environments.ChaosBig);

    run() 
    {
        this.grid.draw();
        this.grid.click();
    }
}

let myGame = new Game();
myGame.run();

