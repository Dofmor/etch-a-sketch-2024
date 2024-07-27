

/*Sets up the grid on the the sketchpad*/
function setSketchPad(size) {

    let sketchpad = document.querySelector(".sketchpad")
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

function eraseSketchPad() {
    console.log('erase')
    let allSquares = document.querySelectorAll('.square')

    allSquares.forEach((square) => {
        if (square.classList.contains('square--filled')) {
            square.classList.remove('square--filled')
        }
    })
}

function clearSketchPad() {
    console.log('clear')

    let sketchpad = document.querySelector(".sketchpad")
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.lastChild)
    }

}

function sliderAction() {
    console.log('slider action')
    console.log(this.value)

    let size = this.value
    clearSketchPad()
    setSketchPad(size)

    let sizeDisplay = document.querySelector(".size")
    sizeDisplay.textContent = `${size} x ${size}`

}

setSketchPad(16)
let eraseButton = document.querySelector('#erase')
eraseButton.addEventListener('click', eraseSketchPad)

let sliderInput = document.querySelector('input')
sliderInput.addEventListener('mouseup', sliderAction)
// sketchpad.style.background-color = 'black';

