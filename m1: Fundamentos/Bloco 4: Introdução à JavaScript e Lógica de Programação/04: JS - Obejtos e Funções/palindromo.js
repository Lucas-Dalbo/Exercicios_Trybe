function palindromo (word) {
    for ( let letra = 0; letra < word.length; letra += 1) {
        if ( word[letra] !== word[word.length - 1 - letra] ) {
            return false
        }
    }
    return true
    
}
console.log(palindromo("arara"));


