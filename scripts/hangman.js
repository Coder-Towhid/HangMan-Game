const hangman = function(word, remainingGuess){
    this.word = word.toLowerCase().split("")
  
    this.remainingGuess = remainingGuess
    this.guessedLetters = []
    this.status = 'playing'
  

}


hangman.prototype.calculateStatus = function(){
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter == ' ')
    
   
    if(this.remainingGuess===0){
        this.status = 'failed'
    }else if(finished){
        this.status = 'finished'
    }else{
        this.status = 'playing'
    }
}

hangman.prototype.getpuzzle = function() { 
    
    let puzzle = ""

    this.word.forEach(letter => {
        if(this.guessedLetters.includes(letter)  || letter === ' '){
            puzzle += letter
        }else{
            puzzle += "*"
        }
    });
    return puzzle
}

hangman.prototype.makeGuess = function(guess){
   this.guess = guess.toLowerCase()
   const isUnique = !this.guessedLetters.includes(guess)

   const isBadGuess = !this.word.includes(guess)

    if(this.status !== 'playing'){
        return
    }

   if(isUnique){
    this.guessedLetters.push(guess)
   }

   if(isUnique && isBadGuess){
    this.remainingGuess--
   }

   this.calculateStatus()
}

hangman.prototype.getStatusMessage = function(){
    if(this.status == 'playing'){
        return `Gusses left: ${this.remainingGuess}`
    }
    else if(this.status == 'failed'){
        return `Nice try! The word was "${this.word.join("")}"`
    }
    else{
        return `Great work! you guesses the work`
    }
}