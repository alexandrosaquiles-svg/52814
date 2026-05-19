# Analizador Léxico, Sintáctico e Intérprete con ANTLR4

Este proyecto implementa un analizador completo (Léxico y Sintáctico) junto con un intérprete básico que traduce un lenguaje personalizado de manipulación de texto a JavaScript nativo y lo ejecuta. Desarrollado con **ANTLR4** y **Node.js**.

## 📋 Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado en tu sistema:
* **Node.js** (v18 o superior)
* **Java JRE/JDK** (v11 o superior, necesario para compilar la gramática de ANTLR4)

## 🚀 Instrucciones de Ejecución

Sigue estos pasos paso a paso para poner en marcha el proyecto:

### 1. Clonar el repositorio y posicionarse en la carpeta
```bash
cd MiAnalizador
```

### 2. Instalar las dependencias de Node.js
Instala la librería oficial de ANTLR4 ejecutando:
```bash
npm install
```

### 3. Compilar la gramática (Opcional si ya están los archivos generados)
Si realizas cambios en el archivo `.g4`, regenera los analizadores en JavaScript con:
```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript MiAnalizador.g4
```

### 4. Probar los ejemplos de entrada
Para probar cualquiera de los ejemplos provistos en la entrega (`correcto1.txt`, `incorrecto2.txt`, etc.), simplemente copia su contenido dentro del archivo principal de entrada:
```bash
copy correcto1.txt input.txt
```

### 5. Iniciar el Analizador e Intérprete
Ejecuta el comando principal para procesar el código de `input.txt`:
```bash
npm start
```

## 📊 Resultados Esperados
Al ejecutar la aplicación con un archivo correcto, el sistema desplegará en la consola:
1. **Tabla de Tokens y Lexemas**: Detalle de cada palabra procesada y su categoría léxica.
2. **Árbol de Derivación**: Representación textual de la estructura sintáctica.
3. **Traducción**: Código JavaScript equivalente generado por el *Visitor*.
4. **Ejecución**: Salida en tiempo real producida por el código traducido.
