function palavras ( word1, word2) {
    for ( letra in word2) {
        if ( word1[word1.length - 1 - letra ] !== word2[word2.length - 1 - letra ] ) {
        return false
        }
    }
    return true
};
console.log(palavras("trybe", "be"));
 console.log(palavras("joaofernando", "fernan"));