import MiAnalizadorVisitor from './generated/MiAnalizadorVisitor.js';

export default class CustomMiAnalizadorVisitor extends MiAnalizadorVisitor {
  
  visitPrograma(ctx) {
    let codigo = '';
    for (let child of ctx.children) {
      if (child.getText() !== '<EOF>') {
        codigo += this.visit(child) + '\n';
      }
    }
    return codigo;
  }

  visitDeclaracion(ctx) {
    const nombre = ctx.nombre().getText();
    if (ctx.valor()) {
      const valor = this.visit(ctx.valor());
      return `let ${nombre} = ${valor};`;
    }
    return `let ${nombre};`;
  }

  visitFuncion(ctx) {
    const nombre = ctx.nombre().getText();
    const argumentos = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
    const instrucciones = this.visit(ctx.instrucciones());
    return `function ${nombre}(${argumentos}) {\n${instrucciones}\n}`;
  }

  visitArgumentos(ctx) {
    const variable = ctx.variable().getText();
    if (ctx.argumentos()) {
      return `${variable}, ${this.visit(ctx.argumentos())}`;
    }
    return variable;
  }

  visitInstrucciones(ctx) {
    if (!ctx.children) return '';
    return ctx.children.map(instr => this.visit(instr)).join('\n');
  }

  visitOperacion_texto(ctx) {
    const variable = ctx.variable().getText();
    const transformacion = ctx.transformacion().getText();
    const cadena = this.visit(ctx.cadena());

    if (transformacion === 'mayúsculas' || transformacion === 'mayusculas') {
      return `${variable} = ${cadena}.toUpperCase();`;
    } else if (transformacion === 'minúsculas' || transformacion === 'minusculas') {
      return `${variable} = ${cadena}.toLowerCase();`;
    } else if (transformacion === 'longitud') {
      return `${variable} = ${cadena}.length;`;
    } else if (transformacion === 'invertir') {
      return `${variable} = ${cadena}.split('').reverse().join('');`;
    } else if (transformacion === 'reemplazar') {
      return `${variable} = ${cadena};`;
    }
    return `${variable} = ${cadena};`;
  }

  visitConcatenar(ctx) {
    const variable = ctx.variable().getText();
    const cadena1 = this.visit(ctx.cadena(0));
    const cadena2 = this.visit(ctx.cadena(1));
    return `${variable} = ${cadena1} + ${cadena2};`;
  }

  visitImpresion(ctx) {
    const valor = this.visit(ctx.valor());
    return `console.log(${valor});`;
  }

  visitRetorno(ctx) {
    const valor = this.visit(ctx.valor());
    return `return ${valor};`;
  }

  visitEjecucion(ctx) {
    const variable = ctx.variable().getText();
    const nombre = ctx.nombre().getText();
    const argumentos = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
    return `${variable} = ${nombre}(${argumentos});`;
  }

  visitValor(ctx) {
    return ctx.getText();
  }

  visitCadena(ctx) {
    return ctx.getText();
  }
}
