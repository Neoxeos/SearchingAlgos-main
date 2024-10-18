
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 1300;



function generateChaos(sizeR, sizeC)
{
    let s = [];
    for (let i = 0; i < sizeR * sizeC; i++) {
        let rand = Math.random() * (100 - 1) + 1;
        if (rand <= 10) { s.push(1); }
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
    },

    "Caves" : {
        rows: 128,
        cols: 128,
        map: "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111101111111111111100001111111111111101111111110000011111111111111111111111100001111111111111111111111111111000001111111100001111110001111111111110000001111111111110000111111000000111111100111111111111110000001111111111111111111111111100000011111110000011111111111111111111110000011111111111100011111111100011111111000111111111111100000011111111111111111111111111100000111111000000111111111111111111111100001111111111111000111111111111111111110001111111111110000001111111111111111111111111111000001110000000001111111111111111111111111111111111111110001111111111111111111100001111111111000000011111111110111111111111111111000010000000000001111111111111111111111111111111111111000011111111111111111111000001111111000000001111111110000011111111111111110000000000000000011111111111111111111111111111110001100000111111111111111111111100000111100000000011111111100000111111111111111100000000000000000111111111111111111111111111111100000000001111111111111111111111100000000000000000111111111110011111111111111111100000000000000000111111111111111111111111111110000000000011111110000001111111111100000000000000001111111111111111111111111111111000000000000000001111111111111111111111111111100000000000011100000000001111111111100000000000000011111111111111111111111111111111000000000000000011111111111111111111111111110000000000000000000000000111111111111000000110000000011111111111111111111111111111110010000000000001111111111111111111111111110000000000000000000000000011111111111110000011110000000011111111111111111111111111111100111111111000111111111111111111111111100000000001111000000000000011111111111111000001111100000000111111111111111111111111111111001111111111111111111111111111111111110000000000111111000000000011111111111111110000011111000000001111111111111111111111111111110011111111111111111111111111111111111000000000001111111100000111111111111111111000000111110000000011111111111111111111111111111100111111111111111111111111111111111110000000000011111111111111111111111111111100000001111100000001111111111110001111111111111111001111111111111111111100111111111111000000000000111111111111111111111111111111000000011111000000111111111100000001111111111111100011111111111111111100001111111111110000000000001111111111111111111111111111100000001111110000011111111111000000001111111111110000100011111111111111000011111111111110000000000011111111111111111111111111111000000011111110111111111111100000000011111111111000000000001111111111100001111111111111100000000000111111111111111111111111111110000011111111111111111111111000000000011111111110000000000011111111111000011111111111111000000000001111111111111111111111011111000001111111111111111111111110000000000111111111000000000000011111111110001111111111111110000000000011111111111111111111100000000000111111111111111111111111000000000000111111100000000000000111111111000111111111111111100000000000011111111111111111110000000000001111111111111111111110000000000000000111110000000000000001111111110001111111111111111000000000000111111111111111111100000000000011111111111111100000000000000000000000000000000000000000011111111000111111111111111100000000000011111111111111111111000000000000111111111111100000000000000000011110000000000000000000001111111110001111111111011100000000000000111111111111111111110000000000001111111111111000000000000000001111111000000000000000000011111111000011111111100000000000000000001111111111111111111000000000000111111111111111100111100000000011111111000000000000000000111111110000111111111000000000000000000111111111111100011111000000000001111111111111111111111100000000111111111100000000000000001111111100001111111111100000000000000111111111111000000111110000000000011111111111111111111111100000001111111111100000000000000111111111000011111111111111000011111111111111111110000001111100001111111111111111111111111111111100000011111111111100000000000001111111110000111111111111111111111111111111111111100000011111100111111111111111111111111111111111100000011111111111000000001001111111111000000111111111111111111111111111111111111000000111111111111111111111111111111111111111111100001111111111111000000011111111111100000000111111111111111111111111111111111111000001111111111111111111111111111111111111111111111111111111111111100000111111111110000000000111111111111111111111111111111111111000001111111111111111111111111111111111111111111111111111111111111110001111111111100000000000011111111111111111111111111111111111000011111111111111111110011111111111100011111111111111111111111111110011111111111000000000000111111111111111111111111111111111111000011111111111111110000111111111111000111111111111111111111111111100111111111111000000000000111111111111111111111111111111111111100001111111111111100001111111111111111111111111111111111111111111001111111111111100000000001111111111111111111111111111111111111110001111111111110000011111111111111111111111111111111111111111110011111111111111110000000011111111111111111111111111111111111111110001111111111110001111111111111111111111001111111111111111111100111111111111111110000000111111111111111111111111111111111111111100001111111111111111111111111111111111000000111111111111111111001111111111111111110000001111111111111111111111111111111111111111100011111111111111111111111111111111100000001111111111111111110011111111110111111100000001111111111111111111111111111111111111111000011111111111111111111111111111100000000001111111111111111100111111111000111111000000000001111111111111111111111111111111111110000111111111111111111111111111000000000000111111111111111111001111111100000111110000000000000001111111111111111111111111111111100001111111111111110001111111100000000000001111111111111111110011111111000001111110000000000000001111111111111111111111111111111000011111111111110000001111110000000000000011111111111111111100111111110000111111110000000000001111111111111111111111111111111110000111111111111000000011111000000000000001111111111111111111001111111000001111111111110000000111111111111111111111111111111111000001111111111100000001111110000000000000011111111111111111110010111100000011111111111110000011111111111111111111111111111111110000111111111111000000011111100000000000000111111111111111111100100000000000011111111111110000111111111111000001111111111111111110011111111111110000001111110000000000000001111111111111111111000000000000000111111111111100001111111111110000011111111111111111111111111111111100000011111100000000000000011111111111111111110000000011100000000111111111000001111111111110000111111111111111111111111111111111000001111111000000000000000011111111111111111100000001111100000000111111110000001111111111111111111111111111111111111111111111111101111111100000000000000000111111111111111111000000111111100000011111111100000011111111111111111111111111111111111111111111111111111111111000000000000000000111111111111111110000001111111111001111111111000000111111111111111111111111111111111111111111111111111111111110000000000000000000011111111111111100000011111111111111111111100000011111111111111111111111111111111111111111111111111111111111100000000000000000000000001111111111000000111111111111111111110000001111111111111111111111111111111111111111111111111111111111111000000000000000000000000000111111110000000111111111111111110000000111111111111111111111111111111111111111111111111111111111111110000000000000000000000000001111111100000001111111111111110000000011111111111111111111111111111111111111111111111111111111111111000000000000000111110000000001111111000000011111111111110000000001111111111111111111111111111111111111011111111111111110001111110000000000011111111110000000011111110010001111111111110000000000011111111111111111111111111111111111110111111111111111100011111110000000001111111111110000000111111100111111111111111000000000000111111111111111111111111111111111111111111111111111110000111111100000000111111111111100000000111110001111111111111100000000000001111111111111111111111111111111111111111111111111110000001111111110000111111111111111100000001111110011111111111111000111111000011111111111111111111111111111111111111111111111100000000111111111111111111111111111111100000011111100111111111111110011111111000111111111111111111111111111111111111111111111110000000001111111111111111111111000001111100000011111001111111111111111111111111001111111110001111111101111111111111111111111111100000000011111111111111111110000000001111100001111110011111111111111111111111110011111111100000111100000011111111111111111111111000000001111111111111111111000000000011111000011111100111111111111111111111111110011111111000000000000000000011111111111111111111000000011111111111111111110000000000111111111111111001111111111111111111111111111111111110000000000000000000001111111111111111111000000111111111111111111000000000001111111111111110011111000111111111111111111111111111100000000000000000000001111111111111111110000001111111111111111110000000000001111111111111100111110001111111111111111111111111111100000000000000000000011111100111111111110000000000000001111111000000000000011111111111111001111100011111111111111111111111111111000000000000000000000011110001111111111100000000000000001111110000000000000011111111111110011111111111111111111111111111111111110000000000000000000000000000011111111111000000011110000011111100000000000000001111111111100111111111111111111111111111111111111110000000000011111100000000001111111111110000001111100000111111000000000000000000011111001001111111111111111111111111111111111111100000000011111111111000011111111111111100000111111000011111110000000000000000000000000000011111111111111111111111111111111111111100000001111111111111111111111111111111000001111110000111111111000000000000000000000000000111111111111111111111111111111111111111100000011111111111111111111111111111110000111111000011111111111110000000000000000000000001111111111111111111111111101111111111111000000111111111111111111111111111111110001111100000111111111111110000000000000000000000011111111111111111111111000000111111111111000001111111111111111111111111111111111111111000011111111111111100000000000000000000000111111111111111111111100000001111111111110000111111111111111111111111111111111111111100000111111111111111000000000000000000000001111000000001111111111000000001111111111110001111111110000111110011111111111111111111000011111111111111110000000000000011000000011000000000000111111111000000111111111111111111111111000000000000001111111111111111100001111111111111111100000000000001111000000100000000000001111111111100001111111111111111111111110000000000000011111111111111110000111111111111111111000000000000111111000000000011111110111111111111000111111111111111111111111000000000000000111111111111111000001111111111111111100000000000001111111000010111111111111111111111111001111111111111111111111110000001111000001111111111111110000011111111111111111000000000000011111111000111111111111111111111111110011111111111111111111111000000111111100111111111111111000000011111111111111110000000000000111111110001111111111111111111111111100111111111111111111111110000001111111111111111111111111000000001111111111111100000000000011111111100011111111111111111111111110000111111001111111111111000000111111111111111111111111110000000001111111111111100000000000111111111000111111111111111111111111100000000000001111111111110000001111111111111111111111111111100000111111111111111111111111111111111100001111111111111111111111111000000000000011111111111000000011111111111111111111111111111111111111111111111111111111111111111110000011111111111111111111111110000000000000111111111000000001111111111111111111111111111111111111111111111111111111111111111110000000111111111111111111111111000000000000000111111100000000011111111111111111111111111111111111111111111111111111111111111110000000001111111111111100000000000000000000000000111110000000000111111111111111111111111111111111111111111110001111111111111111000000000010110011111110000000000000000001111000000000000000000001111111111111110000011111111111111111111000000111111111111111100000000000100000011111000000000000000001111110000000000000000000011111111111111100000011111111111111111000000111111111111111110000000000000000000011110000000000000000111111110000000000000000000111111111111111000000011111111111111100000111111111111111111100000000000000000000011000000000000000001111111000000000000000000000111111111111111000001111111111111110000111111111111111111111000000000000000000000000000111100000000111111110000000000011111000000011111111111110000011111111111110000011111111111111111111110000000000000000000000000001111000001111111110000000000001111111000000001111111111110001111111111110000001111111111111111111111111000000000000000000000000111111001111111111000000000000011111110000000000111111111100011111111100000000011111111111111111111111111000000000000000000000011111111111111111110000111000001111111111000000001111111111000111111100000000011111111110011111111111111111000000001000011111111111111111111111111100011110000011111111111111100011111111110001111110000000011111111110000011111111111111110000000010111111111111111111111111111110001111110000111111111111111111111111111100011111000000001111111110000000000000011111111100000000111111111111111111111111111111100011111100001111111111111111111111111110000011100000000111111111000000000000001111111111000000001111111111111111111111111111111001111110000011111111111111111111111111100000000000000011111111100000000000001111111111110000000011111111111111111111111111111110011111110000111111111111111111111111110000000000000000111111111000000000000111111111111100000000111111111111111111111011111111001111111100000111111111111111111111111000000000000000001111111110000000000001111111111110000000001111111111111111111111111111110011111111100000111111111111111111111100000000000000000011111111000000000000111111111111000000000011111111111111111111111111111100111111111000000011111111111111111111000000000000000000011111110000000000001111111111100000000000111111111111111111111111111111111111111110000000011111111111100000100000000000011100000011111000000000000011111111110000000001001111111111111111111111111111111111111111100000000111111111111000000000000000001111100000011000000000000000111111111110000000110011111111111011111111111111111111111111111000000001111111111100000000000000000111111000000000000000000000001111111111100000011100111111111100001111111111111111111111111110000000001111111111000000000000000001111110000000000000000000000011111111111000000111001111111110000001111111111111111111111111000000000011111111110000000000000000111111110000000000000000000000111111111110000011110011111111100000011111111111011111111111100110000000111111111000000000000000001111111100000000000000000000001111111111100000111100111111111000000111111110000001111111111111110000001111111110000000000000000011111111111111100000000000000011111111111000001111001111111110000000111111100000001111111111001111110111111111000000000000000000111111111111111111110000000001111111111110000011110011111110000000011111111000000000111000000011111111111111000000000000000000011111111111111111111111000000011111111111110000111100111100000000000111111110000000000100000001111111111000000000000000000000000111111110111111111111111000000111111111111100001111001110000000000111111111100000000001000000111111111100000000000000000001111111111111001111111111111110000011111111111111000001110011110000000011111111111100000LLLLLL0000011111111110000000000000000001111111111111111111111111111111110111111100011111100000000001111000000001111111111110000LLLLLLLL000011111111000000000000000000011111111111111111111111111111111111111111100011111100000000001111000000001111111111110000LLL1LLLL0000111111110000011110000000000111111111111111111111111111111111111111110000111111000000000011110000000011111111111100000LLLLLL000000111111000000111100000000011111111111111111111111111111111111111111100001111100000000000111110000001111111111111100000LLLLL000001111111100011111111000000111111111111111111111111111111111111111111110011111111011111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    }
} 


function setMap(value = "Default")
{
    if (value === "Default") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        myGame.grid.newMap(environments.Default);
        myGame.grid.draw();
    };
    if (value === "Chaos") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        myGame.grid.newMap(environments.Chaos);
        myGame.grid.draw();
    };
    if (value === "ChaosBig") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        myGame.grid.newMap(environments.ChaosBig);
        myGame.grid.draw();
    };
    if (value === "Caves") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        myGame.grid.newMap(environments.Caves);
        myGame.grid.draw();
    };
}

function setAlgo(value)
{
    if (value === "bfs")
    {
        myGame.algo = "bfs";
    }
    if (value === "dfs")
    {
        myGame.algo = "dfs";
    }
}

function setAnim(value)
{
    if (value === "static") { myGame.anim = "static";}
    if (value === "continuous") { myGame.anim = "continuous";}
    if (value === "step") { myGame.anim = "step";}
}

function setTogglePath()
{
    myGame.togglePath = document.getElementById('expansion').checked;
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
                if (environment.map[this.nRows*i+j] === "0") {c = 'blue';}
                else if (environment.map[this.nRows*i+j] === "1")  {c = 'green';}
                else if (environment.map[this.nRows*i+j] === "2")  {c = 'grey'}
                this.cells.push(
                    { x: j * this.sizeR,
                      y: i * this.sizeC,
                      color: c,
                      tag: '',
                     });

                this.initalCells.push(
                    { x: j * this.sizeR,
                      y: i * this.sizeC,
                      color: c,
                      tag: '',
                    });
            }
        }
    }

    newMap(environment) 
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
                if (environment.map[this.nRows*i+j] === "0") {c = 'blue';}
                else if (environment.map[this.nRows*i+j] === "1")  {c = 'green';}
                else if (environment.map[this.nRows*i+j] === "2")  {c = 'grey'}
                this.cells.push(
                    { x: j * this.sizeR,
                      y: i * this.sizeC,
                      color: c,
                      tag: '',
                     });

                this.initalCells.push(
                    { x: j * this.sizeR,
                      y: i * this.sizeC,
                      color: c,
                      tag: '',
                    });
            }
        }
    }

    draw(togglePath = false, search = null, iter = false) 
    {
        if (iter && search !== null && togglePath)
        {
            // here we will add control for step and animated as needed as if (myGame.anim === "continuous" {} else {})
            setTimeout( () => {
            for (const node of search.queue) {
                let cell = this.cells.find((elem) =>
                    elem.x === node.x &&
                    elem.y === node.y,
                );
                if (cell !== null) { 
                    cell.color = 'yellow'; 
                    if (cell.tag === 'start')
                        {
                            cell.color = 'white';
                        }
                }
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
                if (cell != null) { 
                    cell.color = 'red'; 
                    if (cell.tag === 'start')
                    {
                        cell.color = 'white';
                    }
                }
                ctx.fillStyle = cell.color;
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }

            if (!search.isRunning) {
                if ( search.path.length === 0 ) { return; }
                for (const cellv of search.path) {
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
                return;
            }

            search.iter_strategy(myGame.algo);
            setTimeout(this.draw(true, search, iter), 90);
        }, 90);
        }


        if (togglePath && search !== null && iter === false)
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
            return;
        }

        if (!togglePath && search !== null)
        {
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
            return;
        }

        if (search === null) 
        {
            for (const cell of this.cells) {
                if (cell.tag === 'start') {ctx.fillStyle = 'white';}
                else {ctx.fillStyle = cell.color;}
                ctx.strokeStyle = "black";
                ctx.fillRect(cell.x, cell.y, this.sizeR, this.sizeC);
                ctx.strokeRect(cell.x, cell.y, this.sizeR, this.sizeC);
            }
            return;
        }
    }

    resetBoard()
    {
        for (const cell of this.initalCells)
        {
            let cellv = this.cells.find((elem) => 
                cell.x === elem.x &&
                cell.y === elem.y
            )
            cellv.color = cell.color;
            cellv.tag = cell.tag;
        }
    }

    pathReady()
    {
        for (const cell of this.cells)
        {
            if (cell.tag === 'end')
            {
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


    search(pattern, iter)
    {
        //find start and end cells
        let root = this.cells.find((elem) => elem.tag === 'start');
        let eNode = this.cells.find((elem) => elem.tag === 'end');

        if (pattern === 'bfs')
        {
            let bfs = new Search(root, eNode);
        
            if (iter !== "static") {
                bfs.iter_strategy('bfs'); 
                this.draw(myGame.togglePath, bfs, true);
            }
            else {
                bfs.strategy('bfs'); 
                this.draw(myGame.togglePath, bfs, false);
            }
        }

        if (pattern === 'dfs')
        {
            let dfs = new Search(root, eNode);

            if (iter !== "static") {
                dfs.iter_strategy('dfs'); 
                this.draw(myGame.togglePath, dfs, true);
            }
            else {
                dfs.strategy('dfs'); 
                this.draw(myGame.togglePath, dfs, false);
            }
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

            let iter = myGame.anim; // for now here
            if (!this.pathReady()) 
            {
                cell.tag = cell.tag === 'start' ? '' : 'start';
            }
            else 
            {
                cell.tag = cell.tag === 'end' ? '' : 'end';
                this.search(myGame.algo, iter);
                return;
            }
            this.draw();
        })
    }
}

class Game 
{
    constructor(){};
    algo = "bfs"; //default
    anim = "static"; //default
    togglePath = true; //default
    grid;

    run() 
    {
        this.grid.draw();
        this.grid.click();
    }
}

let myGame = new Game();
myGame.grid = new Grid(environments.Default);
myGame.run();
