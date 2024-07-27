let sketchpad = document.querySelector(".sketchpad")


/*Sets up the grid on the the sketchpad*/
function setSketchPad(size) {

    sketchpad.addEventListener('mouseover', (event) => {
        let target = event.target

        console.log(target)
        if (target.classList.contains('square')) {
            console.log('square')
            target.classList.add('square--filled')
        }
    })

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
