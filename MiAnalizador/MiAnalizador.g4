grammar MiAnalizador;

// --- REGLAS SINTÁCTICAS (Parser Rules) ---

programa
    : ( declaracion | funcion | operacion_texto | impresion | retorno | ejecucion )* EOF
    ;

declaracion
    : 'variable' nombre ( '=' valor )? ';'
    ;

funcion
    : 'función' nombre '[' argumentos? ']' '{' instrucciones '}'
    ;

argumentos
    : variable ( ',' argumentos )?
    ;

instrucciones
    : ( operacion_texto | concatenar | impresion | retorno )*
    ;

operacion_texto
    : variable '=' transformacion '(' cadena ')' ';'
    ;

transformacion
    : 'mayúsculas' | 'mayusculas'

    | 'minúsculas' | 'minusculas'
    | 'longitud'

    | 'invertir'
    | 'reemplazar'
    ;

concatenar
    : variable '=' cadena '+' cadena ';'
    ;

impresion
    : 'imprimir' '(' valor ')' ';'
    ;

retorno
    : 'devolver' valor ';'
    ;

ejecucion
    : variable '=' nombre '[' argumentos? ']' ';'
    ;

valor
    : TEXTO

    | NUMERO
    | variable
    ;

cadena
    : TEXTO
    | variable
    ;

nombre
    : ID
    ;

variable
    : ID
    ;


// --- REGLAS LÉXICAS (Lexer Tokens) ---

TEXTO
    : '"' (~["\r\n])* '"'
    ;

NUMERO
    : [0-9]+ ('.' [0-9]+)?
    ;

ID
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

// Ignorar espacios en blanco, tabulaciones y saltos de línea
WS
    : [ \t\r\n]+ -> skip
    ;
