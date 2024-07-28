let gridSize = 32
let sketchpad = document.querySelector(".sketchpad")

/*Sets up the grid on the the sketchpad*/
function setSketchPad() {

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

setSketchPad()

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

//restarts the sketchpad
function restart() {
    clearSketchPad()
    setSketchPad()
}

//resets the board and display each time user lets go of click
function sliderAction() {

    gridSize = this.value
    restart()

    let sizeDisplay = document.querySelector(".size")
    sizeDisplay.textContent = `${gridSize} x ${gridSize}`

}

//sets every eventlistener 
function listen() {

    sketchpad.addEventListener('mouseover', (event) => {
        let target = event.target

        console.log(target)
        if (target.classList.contains('square')) {
            console.log('square')
            target.classList.add('square--filled')
        }
    })

    let eraseButton = document.querySelector('#erase')
    eraseButton.addEventListener('click', eraseSketchPad)

    let sliderInput = document.querySelector('input')
    sliderInput.addEventListener('mouseup', sliderAction)
    sliderInput.addEventListener('input', sliderAction)

    document.getElementById("myinput").oninput = function() {
        var value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #FE5163 0%, #FE5163 ' + value + '%, #fff ' + value + '%, #fff 100%)'
      };
}

listen()