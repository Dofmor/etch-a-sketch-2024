let sketchpad = document.querySelector(".sketchpad")


/*Sets up the grid on the the sketchpad*/
function setSketchPad(size) {


    for (let i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.classList.add('sketchpad-row')

        for (let k = 0; k < size; k++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
        sketchpad.appendChild(row)
    }
}

setSketchPad(16)

// sketchpad.style.background-color = 'black';
