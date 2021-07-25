let addSheetButton = document.querySelector('.add-sheet') ; 
let allSheetsDiv = document.querySelector('.sheets') ; 
let sheetId = 0 ; 
addSheetButton.addEventListener('click', function(e){

    document.querySelector('.selected-sheet').classList.remove('selected-sheet') ; 

    sheetId++ ; 
    let div = document.createElement('div') ; 
    div.classList.add('sheet') ; 
    div.classList.add('selected-sheet') ; 
    div.setAttribute("sheetid", sheetId) ; 
    div.innerHTML = `Sheet ${sheetId+1}` ; 

    allSheetsDiv.append(div) ;

    // create new UI for new sheet now 
    createNewUI() ; 

    // on clicking add sheet button
    // 1. new db create
    // 2. change active db
    // 3. add new db to sheets db
    createDB(); 


}) ; 

allSheetsDiv.addEventListener('click', function(e){

    // console.log(e) ; 
    if(e.target.classList.contains('selected-sheet'))
        return ; 
        
    document.querySelector('.selected-sheet').classList.remove('selected-sheet') ; 
    e.target.classList.add('selected-sheet') ; 

    // empty the cells first
    createNewUI()  ;

    // change the active db
    let sheetid = e.target.getAttribute("sheetid") ; 
    db = sheetsDB[ sheetid ].db ;
    visitedCells = sheetsDB[sheetid].visitedCells ;  

    // setUI according to active db
    setUI() ; 

}) ; 

function setUI(){
    for(let i = 0 ; i < visitedCells.length ; i++){
        // let rowid = visitedCells[i].rowId ; 
        // let colid = visitedCells[i].colId ; 
        let {rowId, colId} = visitedCells[i] ; 
        document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`).textContent = db[rowId][colId].value ; 
    }
}

function createNewUI(){
    for(let i = 0 ; i < visitedCells.length ; i++){
        // let rowid = visitedCells[i].rowId ; 
        // let colid = visitedCells[i].colId ; 
        let {rowId, colId} = visitedCells[i] ; 
        document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`).innerHTML = "" ; 
    }
}