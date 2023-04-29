


let game1 

const renderPuzzle = document.querySelector('#puzzle')
const renderGuesses = document.querySelector('#guesses')







window.addEventListener('keypress', function(e){
    let guess = e.key
    console.log(guess)
    game1.makeGuess(guess)
  
    console.log(game1.status)
    render()
  
 })

const startGame = async() =>{
    const puzzle = await getpuzzle('1')
    game1 = new hangman(puzzle, 5)
    render()
}

const render = () =>{
    renderPuzzle.innerHTML =   ""
  
    renderGuesses.textContent =game1.getStatusMessage()
  
    game1.getpuzzle().split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        renderPuzzle.appendChild(letterEl)
        console.log(letterEl)
    })
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()


//  getpuzzle(3).then((puzzle)=>{
//     console.log(puzzle) 
//  }).catch((err) =>{
//     console.log(`Error: ${err}`)
//  })





