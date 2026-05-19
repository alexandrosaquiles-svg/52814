// Generated from c:/TareaAnalizador/MiAnalizador/MiAnalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiAnalizadorListener from './MiAnalizadorListener.js';
import MiAnalizadorVisitor from './MiAnalizadorVisitor.js';

const serializedATN = [4,1,25,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,5,0,37,8,0,10,0,12,0,40,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,56,8,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,66,8,3,1,4,1,4,1,4,1,4,5,4,72,8,4,10,4,
12,4,75,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
3,10,109,8,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,117,8,11,1,12,1,12,3,12,
121,8,12,1,13,1,13,1,14,1,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,0,1,1,0,12,18,128,0,38,1,0,0,0,2,43,1,0,0,0,4,51,1,0,0,0,6,62,1,
0,0,0,8,73,1,0,0,0,10,76,1,0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,93,1,0,0,
0,18,99,1,0,0,0,20,103,1,0,0,0,22,116,1,0,0,0,24,120,1,0,0,0,26,122,1,0,
0,0,28,124,1,0,0,0,30,37,3,2,1,0,31,37,3,4,2,0,32,37,3,10,5,0,33,37,3,16,
8,0,34,37,3,18,9,0,35,37,3,20,10,0,36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,0,
0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,
0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,0,0,1,42,1,1,0,0,0,43,
44,5,1,0,0,44,47,3,26,13,0,45,46,5,2,0,0,46,48,3,22,11,0,47,45,1,0,0,0,47,
48,1,0,0,0,48,49,1,0,0,0,49,50,5,3,0,0,50,3,1,0,0,0,51,52,5,4,0,0,52,53,
3,26,13,0,53,55,5,5,0,0,54,56,3,6,3,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,
1,0,0,0,57,58,5,6,0,0,58,59,5,7,0,0,59,60,3,8,4,0,60,61,5,8,0,0,61,5,1,0,
0,0,62,65,3,28,14,0,63,64,5,9,0,0,64,66,3,6,3,0,65,63,1,0,0,0,65,66,1,0,
0,0,66,7,1,0,0,0,67,72,3,10,5,0,68,72,3,14,7,0,69,72,3,16,8,0,70,72,3,18,
9,0,71,67,1,0,0,0,71,68,1,0,0,0,71,69,1,0,0,0,71,70,1,0,0,0,72,75,1,0,0,
0,73,71,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,73,1,0,0,0,76,77,3,28,14,0,
77,78,5,2,0,0,78,79,3,12,6,0,79,80,5,10,0,0,80,81,3,24,12,0,81,82,5,11,0,
0,82,83,5,3,0,0,83,11,1,0,0,0,84,85,7,0,0,0,85,13,1,0,0,0,86,87,3,28,14,
0,87,88,5,2,0,0,88,89,3,24,12,0,89,90,5,19,0,0,90,91,3,24,12,0,91,92,5,3,
0,0,92,15,1,0,0,0,93,94,5,20,0,0,94,95,5,10,0,0,95,96,3,22,11,0,96,97,5,
11,0,0,97,98,5,3,0,0,98,17,1,0,0,0,99,100,5,21,0,0,100,101,3,22,11,0,101,
102,5,3,0,0,102,19,1,0,0,0,103,104,3,28,14,0,104,105,5,2,0,0,105,106,3,26,
13,0,106,108,5,5,0,0,107,109,3,6,3,0,108,107,1,0,0,0,108,109,1,0,0,0,109,
110,1,0,0,0,110,111,5,6,0,0,111,112,5,3,0,0,112,21,1,0,0,0,113,117,5,22,
0,0,114,117,5,23,0,0,115,117,3,28,14,0,116,113,1,0,0,0,116,114,1,0,0,0,116,
115,1,0,0,0,117,23,1,0,0,0,118,121,5,22,0,0,119,121,3,28,14,0,120,118,1,
0,0,0,120,119,1,0,0,0,121,25,1,0,0,0,122,123,5,24,0,0,123,27,1,0,0,0,124,
125,5,24,0,0,125,29,1,0,0,0,10,36,38,47,55,65,71,73,108,116,120];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "MiAnalizador.g4";
    static literalNames = [ null, "'variable'", "'='", "';'", "'funci\\u00F3n'", 
                            "'['", "']'", "'{'", "'}'", "','", "'('", "')'", 
                            "'may\\u00FAsculas'", "'mayusculas'", "'min\\u00FAsculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'+'", "'imprimir'", "'devolver'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "TEXTO", 
                             "NUMERO", "ID", "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "concatenar", "impresion", "retorno", "ejecucion", 
                         "valor", "cadena", "nombre", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiAnalizadorParser.ruleNames;
        this.literalNames = MiAnalizadorParser.literalNames;
        this.symbolicNames = MiAnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiAnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 19922962) !== 0)) {
	            this.state = 36;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 30;
	                this.declaracion();
	                break;

	            case 2:
	                this.state = 31;
	                this.funcion();
	                break;

	            case 3:
	                this.state = 32;
	                this.operacion_texto();
	                break;

	            case 4:
	                this.state = 33;
	                this.impresion();
	                break;

	            case 5:
	                this.state = 34;
	                this.retorno();
	                break;

	            case 6:
	                this.state = 35;
	                this.ejecucion();
	                break;

	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this.match(MiAnalizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiAnalizadorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(MiAnalizadorParser.T__0);
	        this.state = 44;
	        this.nombre();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 45;
	            this.match(MiAnalizadorParser.T__1);
	            this.state = 46;
	            this.valor();
	        }

	        this.state = 49;
	        this.match(MiAnalizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiAnalizadorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(MiAnalizadorParser.T__3);
	        this.state = 52;
	        this.nombre();
	        this.state = 53;
	        this.match(MiAnalizadorParser.T__4);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 54;
	            this.argumentos();
	        }

	        this.state = 57;
	        this.match(MiAnalizadorParser.T__5);
	        this.state = 58;
	        this.match(MiAnalizadorParser.T__6);
	        this.state = 59;
	        this.instrucciones();
	        this.state = 60;
	        this.match(MiAnalizadorParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiAnalizadorParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.variable();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 63;
	            this.match(MiAnalizadorParser.T__8);
	            this.state = 64;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiAnalizadorParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 19922944) !== 0)) {
	            this.state = 71;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 67;
	                this.operacion_texto();
	                break;

	            case 2:
	                this.state = 68;
	                this.concatenar();
	                break;

	            case 3:
	                this.state = 69;
	                this.impresion();
	                break;

	            case 4:
	                this.state = 70;
	                this.retorno();
	                break;

	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiAnalizadorParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.variable();
	        this.state = 77;
	        this.match(MiAnalizadorParser.T__1);
	        this.state = 78;
	        this.transformacion();
	        this.state = 79;
	        this.match(MiAnalizadorParser.T__9);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(MiAnalizadorParser.T__10);
	        this.state = 82;
	        this.match(MiAnalizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiAnalizadorParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 520192) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiAnalizadorParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.variable();
	        this.state = 87;
	        this.match(MiAnalizadorParser.T__1);
	        this.state = 88;
	        this.cadena();
	        this.state = 89;
	        this.match(MiAnalizadorParser.T__18);
	        this.state = 90;
	        this.cadena();
	        this.state = 91;
	        this.match(MiAnalizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiAnalizadorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(MiAnalizadorParser.T__19);
	        this.state = 94;
	        this.match(MiAnalizadorParser.T__9);
	        this.state = 95;
	        this.valor();
	        this.state = 96;
	        this.match(MiAnalizadorParser.T__10);
	        this.state = 97;
	        this.match(MiAnalizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiAnalizadorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(MiAnalizadorParser.T__20);
	        this.state = 100;
	        this.valor();
	        this.state = 101;
	        this.match(MiAnalizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiAnalizadorParser.RULE_ejecucion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.variable();
	        this.state = 104;
	        this.match(MiAnalizadorParser.T__1);
	        this.state = 105;
	        this.nombre();
	        this.state = 106;
	        this.match(MiAnalizadorParser.T__4);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 107;
	            this.argumentos();
	        }

	        this.state = 110;
	        this.match(MiAnalizadorParser.T__5);
	        this.state = 111;
	        this.match(MiAnalizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiAnalizadorParser.RULE_valor);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.match(MiAnalizadorParser.TEXTO);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.match(MiAnalizadorParser.NUMERO);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiAnalizadorParser.RULE_cadena);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.match(MiAnalizadorParser.TEXTO);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MiAnalizadorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(MiAnalizadorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiAnalizadorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(MiAnalizadorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiAnalizadorParser.EOF = antlr4.Token.EOF;
MiAnalizadorParser.T__0 = 1;
MiAnalizadorParser.T__1 = 2;
MiAnalizadorParser.T__2 = 3;
MiAnalizadorParser.T__3 = 4;
MiAnalizadorParser.T__4 = 5;
MiAnalizadorParser.T__5 = 6;
MiAnalizadorParser.T__6 = 7;
MiAnalizadorParser.T__7 = 8;
MiAnalizadorParser.T__8 = 9;
MiAnalizadorParser.T__9 = 10;
MiAnalizadorParser.T__10 = 11;
MiAnalizadorParser.T__11 = 12;
MiAnalizadorParser.T__12 = 13;
MiAnalizadorParser.T__13 = 14;
MiAnalizadorParser.T__14 = 15;
MiAnalizadorParser.T__15 = 16;
MiAnalizadorParser.T__16 = 17;
MiAnalizadorParser.T__17 = 18;
MiAnalizadorParser.T__18 = 19;
MiAnalizadorParser.T__19 = 20;
MiAnalizadorParser.T__20 = 21;
MiAnalizadorParser.TEXTO = 22;
MiAnalizadorParser.NUMERO = 23;
MiAnalizadorParser.ID = 24;
MiAnalizadorParser.WS = 25;

MiAnalizadorParser.RULE_programa = 0;
MiAnalizadorParser.RULE_declaracion = 1;
MiAnalizadorParser.RULE_funcion = 2;
MiAnalizadorParser.RULE_argumentos = 3;
MiAnalizadorParser.RULE_instrucciones = 4;
MiAnalizadorParser.RULE_operacion_texto = 5;
MiAnalizadorParser.RULE_transformacion = 6;
MiAnalizadorParser.RULE_concatenar = 7;
MiAnalizadorParser.RULE_impresion = 8;
MiAnalizadorParser.RULE_retorno = 9;
MiAnalizadorParser.RULE_ejecucion = 10;
MiAnalizadorParser.RULE_valor = 11;
MiAnalizadorParser.RULE_cadena = 12;
MiAnalizadorParser.RULE_nombre = 13;
MiAnalizadorParser.RULE_variable = 14;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MiAnalizadorParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_declaracion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_funcion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_argumentos;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_instrucciones;
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	concatenar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenarContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenarContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_transformacion;
    }


	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_impresion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_retorno;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_ejecucion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(MiAnalizadorParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(MiAnalizadorParser.NUMERO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(MiAnalizadorParser.TEXTO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(MiAnalizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_variable;
    }

	ID() {
	    return this.getToken(MiAnalizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiAnalizadorParser.ProgramaContext = ProgramaContext; 
MiAnalizadorParser.DeclaracionContext = DeclaracionContext; 
MiAnalizadorParser.FuncionContext = FuncionContext; 
MiAnalizadorParser.ArgumentosContext = ArgumentosContext; 
MiAnalizadorParser.InstruccionesContext = InstruccionesContext; 
MiAnalizadorParser.Operacion_textoContext = Operacion_textoContext; 
MiAnalizadorParser.TransformacionContext = TransformacionContext; 
MiAnalizadorParser.ConcatenarContext = ConcatenarContext; 
MiAnalizadorParser.ImpresionContext = ImpresionContext; 
MiAnalizadorParser.RetornoContext = RetornoContext; 
MiAnalizadorParser.EjecucionContext = EjecucionContext; 
MiAnalizadorParser.ValorContext = ValorContext; 
MiAnalizadorParser.CadenaContext = CadenaContext; 
MiAnalizadorParser.NombreContext = NombreContext; 
MiAnalizadorParser.VariableContext = VariableContext; 
