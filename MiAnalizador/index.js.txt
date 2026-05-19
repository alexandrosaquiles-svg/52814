import MiAnalizadorLexer from "./generated/MiAnalizadorLexer.js";
import MiAnalizadorParser from "./generated/MiAnalizadorParser.js";
import CustomMiAnalizadorVisitor from "./CustomMiAnalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento de leer la entrada desde el archivo input.txt
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); 
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new MiAnalizadorLexer(inputStream);     
     
    // Validar errores léxicos
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    // Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    // Mostrar la tabla de tokens y lexemas (PUNTO B DEL ENUNCIADO)
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = MiAnalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    /* Vuelve a procesar la entrada por haber vaciado el lexer */
    inputStream = CharStreams.fromString(input);
    lexer = new MiAnalizadorLexer(inputStream);

    let tokenStream = new CommonTokenStream(lexer);
    let parser = new MiAnalizadorParser(tokenStream);

    // El axioma inicial que definimos en el .g4 es "programa"
    let tree = parser.programa(); 

    // Verificar si se produjeron errores sintácticos (PUNTO A DEL ENUNCIADO)
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en el código.");
    } else {
        console.log("\nCódigo válido sintácticamente.");
        
        // Mostrar árbol en formato de texto (PUNTO C DEL ENUNCIADO)
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\nÁrbol de derivación:\n ${cadena_tree}`);

        /* Traducir el código a javascript usando VISITOR (PUNTO D DEL ENUNCIADO) */
        const visitor = new CustomMiAnalizadorVisitor();
        const codigo_traducido = visitor.visit(tree);

        console.log("\nTraducción a JavaScript:\n\n" + codigo_traducido);        

        // Ejecutar código traducido directamente en consola
        console.log("\n--- EJECUCIÓN DEL CÓDIGO ---");
        try {        
            eval(codigo_traducido);        
        } catch (err) {
            console.error("Error al ejecutar el código traducido: ", err);
        }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
