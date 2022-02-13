const caractere = "*";
const espaco = " ";

// 1. Retângulo
function retangulo (size) {
    let linha = "";
    for ( let i = 1; i <= size; i += 1) {
        linha += caractere;
    }
    for ( let i = 1; i <= size; i += 1) {
        console.log(linha);
    }
};

// 2. Triângulo Retângulo
function triRet (size) {
    let linha = "";
    for ( let i = 1; i <= size; i += 1) {
        linha += caractere;
        console.log(linha);
    }
};

// 3. Triângulo Retângulo do outro lado
function triRetRev (size) {
    for ( let i = 1; i <= size; i += 1) {
        let linha = "";
        if ( i === 1) {
            for ( let j = 1; j<= size; j+=1 ) {
                if ( j === 5) {
                    linha += caractere;
                }
                else {
                    linha += espaco;
                }
            }
            console.log(linha); 
        }
                
         linha = ""
        if ( i === 2) {
            for ( let j = 1; j<= size; j+=1 ) {
                if ( j >= 4) {
                    linha += caractere;
                }
                else {
                    linha += espaco;
                }
            }
        console.log(linha);     
        }
        

         linha = ""
        if ( i === 3) {
            for ( let j = 1; j<= size; j+=1 ) {
                if ( j >= 3) {
                    linha += caractere;
                }
                else {
                    linha += espaco;
                }
            }
        console.log(linha);     
        }
        

         linha = ""
        if ( i === 4) {
            for ( let j = 1; j<= size; j+=1 ) {
                if ( j >= 2 ) {
                    linha += caractere;
                }
                else {
                    linha += espaco;
                }
            }
        console.log(linha);     
        }
        

         linha = ""
        if ( i === 5) {
            for ( let j = 1; j<= size; j+=1 ) {
                linha += caractere;
            }
        console.log(linha);     
        }
        
    }
};

triRetRev(5)