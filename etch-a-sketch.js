let gridSize = 1
let sketchpad = document.querySelector(".sketchpad")

/*Sets up the grid on the the sketchpad*/
function setSketchPad() {

    sketchpad.addEventListener('mouseover', (event) => {
        let target = event.target

        console.log(target)
        if (target.classList.contains('square')) {
            console.log('square')
            target.classList.add('square--filled')
        }
    })

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div')
        row.classList.add('sketchpad-row')

        for (let k = 0; k < gridSize; k++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
        sketchpad.appendChild(row)
    }
}

//resets each square back to default color
function eraseSketchPad() {
    let allSquares = document.querySelectorAll('.square')

    allSquares.forEach((square) => {
        if (square.classList.contains('square--filled')) {
            square.classList.remove('square--filled')
        }
    })
}

//removes all row chidlren in sketchpad
function clearSketchPad() {

    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.lastChild)
    }

}

/*TODO*/
function restart() {
    clearSketchPad()
}

//resets the board and display each time user lets go of click
function sliderAction() {
    console.log('slider action')
    console.log(this.value)

    gridSize = this.value
    clearSketchPad()
    setSketchPad()

    let sizeDisplay = document.querySelector(".size")
    sizeDisplay.textContent = `${gridSize} x ${gridSize}`

}

setSketchPad()
let eraseButton = document.querySelector('#erase')
eraseButton.addEventListener('click', eraseSketchPad)

let sliderInput = document.querySelector('input')
sliderInput.addEventListener('mouseup', sliderAction)
// sketchpad.style.background-color = 'black';

