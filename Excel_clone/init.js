let cellContainerDiv = document.querySelector('.cell-container');
let colNameContainerDiv = cellContainerDiv.querySelector('.col-name-container');
let rowNameContainerDiv = cellContainerDiv.querySelector('.row-name-container');
let allCellsDiv = cellContainerDiv.querySelector('.all-cells') ; 
let selectAllDiv = document.querySelector('.select-all') ; 
function createCells() {
    for(let i = 0 ; i < 26 ; i++){
        colNameContainerDiv.innerHTML += "<div class='col-name-cell'>"  + String.fromCharCode(65+i) + "</div>"   
    }

    for(let i = 1 ; i <= 100 ; i++){
        rowNameContainerDiv.innerHTML += "<div class='row-name-cell'>" + i + "</div>" 
    }

    let allCells = "" ; 
    for (let i = 0; i < 100; i++) {
        allCells += '<div class="row">'
        for (let j = 0; j < 26; j++) {
            allCells += '<div class="cell" contenteditable="true" rowid='+i+'  colid=' + j + '> </div>'
        }
        allCells += '</div>'
    }
    allCellsDiv.innerHTML = allCells ; 
}
createCells() ; 

let db = []  ; 
function createDB(){
    for(let i = 0 ; i < 100; i++){
        let row = [ ] ; 
        for(let j = 0 ; j < 26 ; j++){
            let address = String.fromCharCode(65+j) + (i+1) + "" ; 
            let cellObject = { 
                address : address , 
                value : "", 
                formula : "" ,
                children : [ ] , 
                parents : [] 
            } ; 

            row.push(cellObject) ; 
        }

        db.push(row); 
    }
}
createDB() ; 