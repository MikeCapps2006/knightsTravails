//Create the chess board module
const gameboard = () => {
    const chessTable = document.createElement('table');
    chessTable.setAttribute('id', 'chessBoard');
    const coordArray = [];
    const defaultStartingPosition = [0, 0];
    for (let i = 0; i < 8; i++){
        const tblRow = document.createElement('tr');
        let cellRowCoord = Math.abs(i - 7);
        for (let j = 0; j < 8; j++){
            const tableCell = document.createElement('td');
            let cellColCoord = j;
            //tableCell.textContent = `[${cellRowCoord}, ${cellColCoord}]`; //TODO: Remove when finished
            
            //This is used to shade every other tablecell
            if ((i + j) % 2 == 0){
                tableCell.setAttribute('class', 'tableCell whiteCell');
                tblRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            } else {
                tableCell.setAttribute('class', 'tableCell blackCell');
                tblRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            }
            
            
        }
        chessTable.appendChild(tblRow);
    }

    const main = document.getElementById('main');
    const title = document.createElement('h1');
    title.textContent = 'Knights Travails';
    main.appendChild(title);
    main.appendChild(chessTable);

    //Testing stuff
    //const btnPress = document.getElementById('pressMe');

    // body.addEventListener('click', (e) => {
    //     console.log(e.target.dataset.coordArray);
    // })

    //Create and place knight on board
    const nodeCells = document.querySelectorAll('td');
    nodeCells.forEach((node)  => {
        if(node.dataset.coordArray == defaultStartingPosition){
            let knight = document.createElement('img');
            knight.src = './imgs/chess-knight-regular.svg';
            node.appendChild(knight);
        }
    });

};


export {gameboard};