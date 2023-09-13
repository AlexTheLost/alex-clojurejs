// Generated from clojurejs.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var clojurejsListener = require('./clojurejsListener').clojurejsListener;
var clojurejsVisitor = require('./clojurejsVisitor').clojurejsVisitor;

var grammarFileName = "clojurejs.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003(\u01ad\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003L",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004V\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004_\n\u0004\f\u0004\u000e\u0004b\u000b\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005g\n\u0005\f\u0005\u000e\u0005j\u000b\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0006\u0005t\n\u0005\r\u0005\u000e\u0005u\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0082\n\u0006",
    "\u0007\u0006\u0084\n\u0006\f\u0006\u000e\u0006\u0087\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u0091\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u009d\n\u0007\u0007\u0007\u009f",
    "\n\u0007\f\u0007\u000e\u0007\u00a2\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007\u00ac\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u00b7\n\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00c1\n\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00ca\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00d3\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00dd",
    "\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00e6\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00f0\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00f7",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u0100\n\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u010a\n\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0006\f\u0113\n\f\r",
    "\f\u000e\f\u0114\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u011f\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0006\r\u0128\n\r\r\r\u000e\r\u0129\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u0134\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u013d\n",
    "\u000e\r\u000e\u000e\u000e\u013e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u0149\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0006\u000f\u0152\n\u000f\r\u000f\u000e",
    "\u000f\u0153\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u015c\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0006\u0011\u0168\n\u0011\r\u0011\u000e\u0011\u0169",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u0178\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0006\u0013\u0184\n\u0013\r\u0013\u000e\u0013\u0185\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u0192\n\u0014\f\u0014",
    "\u000e\u0014\u0195\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u01a2\n\u0015\u0007\u0015\u01a4\n\u0015",
    "\f\u0015\u000e\u0015\u01a7\u000b\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0002\u0002\u0017\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*\u0002",
    "\u0004\u0004\u0002\u0019\u0019$$\u0003\u0002#&\u0002\u026f\u00021\u0003",
    "\u0002\u0002\u0002\u0004K\u0003\u0002\u0002\u0002\u0006M\u0003\u0002",
    "\u0002\u0002\bc\u0003\u0002\u0002\u0002\nw\u0003\u0002\u0002\u0002\f",
    "\u0092\u0003\u0002\u0002\u0002\u000e\u00ad\u0003\u0002\u0002\u0002\u0010",
    "\u00b8\u0003\u0002\u0002\u0002\u0012\u00d4\u0003\u0002\u0002\u0002\u0014",
    "\u00e7\u0003\u0002\u0002\u0002\u0016\u0101\u0003\u0002\u0002\u0002\u0018",
    "\u0116\u0003\u0002\u0002\u0002\u001a\u012b\u0003\u0002\u0002\u0002\u001c",
    "\u0140\u0003\u0002\u0002\u0002\u001e\u0155\u0003\u0002\u0002\u0002 ",
    "\u015d\u0003\u0002\u0002\u0002\"\u016d\u0003\u0002\u0002\u0002$\u017b",
    "\u0003\u0002\u0002\u0002&\u0189\u0003\u0002\u0002\u0002(\u0198\u0003",
    "\u0002\u0002\u0002*\u01aa\u0003\u0002\u0002\u0002,0\u0005 \u0011\u0002",
    "-0\u0005\"\u0012\u0002.0\u0005$\u0013\u0002/,\u0003\u0002\u0002\u0002",
    "/-\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002",
    "\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u00022\u0003\u0003",
    "\u0002\u0002\u000231\u0003\u0002\u0002\u00024L\u0007\u0018\u0002\u0002",
    "5L\u0007\u001a\u0002\u00026L\u0007\u001b\u0002\u00027L\u0007\u001c\u0002",
    "\u00028L\u0007\u001d\u0002\u00029L\u0007\u001e\u0002\u0002:L\u0007\u001f",
    "\u0002\u0002;L\u0007 \u0002\u0002<L\u0007!\u0002\u0002=L\u0007\"\u0002",
    "\u0002>L\u0005\u0006\u0004\u0002?L\u0005\b\u0005\u0002@L\u0005\n\u0006",
    "\u0002AL\u0005\f\u0007\u0002BL\u0005\u000e\b\u0002CL\u0005\u0010\t\u0002",
    "DL\u0005\u0012\n\u0002EL\u0005\u0014\u000b\u0002FL\u0005\u0016\f\u0002",
    "GL\u0005\u001a\u000e\u0002HL\u0005\u0018\r\u0002IL\u0005\u001c\u000f",
    "\u0002JL\u0005\u001e\u0010\u0002K4\u0003\u0002\u0002\u0002K5\u0003\u0002",
    "\u0002\u0002K6\u0003\u0002\u0002\u0002K7\u0003\u0002\u0002\u0002K8\u0003",
    "\u0002\u0002\u0002K9\u0003\u0002\u0002\u0002K:\u0003\u0002\u0002\u0002",
    "K;\u0003\u0002\u0002\u0002K<\u0003\u0002\u0002\u0002K=\u0003\u0002\u0002",
    "\u0002K>\u0003\u0002\u0002\u0002K?\u0003\u0002\u0002\u0002K@\u0003\u0002",
    "\u0002\u0002KA\u0003\u0002\u0002\u0002KB\u0003\u0002\u0002\u0002KC\u0003",
    "\u0002\u0002\u0002KD\u0003\u0002\u0002\u0002KE\u0003\u0002\u0002\u0002",
    "KF\u0003\u0002\u0002\u0002KG\u0003\u0002\u0002\u0002KH\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002L\u0005\u0003",
    "\u0002\u0002\u0002MU\u0007\u0003\u0002\u0002NV\u0005$\u0013\u0002OV",
    "\u0005\u0004\u0003\u0002PV\u0005*\u0016\u0002QV\u0005&\u0014\u0002R",
    "V\u0005(\u0015\u0002SV\u0005 \u0011\u0002TV\u0005\"\u0012\u0002UN\u0003",
    "\u0002\u0002\u0002UO\u0003\u0002\u0002\u0002UP\u0003\u0002\u0002\u0002",
    "UQ\u0003\u0002\u0002\u0002UR\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UT\u0003\u0002\u0002\u0002V`\u0003\u0002\u0002\u0002W_\u0005$",
    "\u0013\u0002X_\u0005\u0004\u0003\u0002Y_\u0005*\u0016\u0002Z_\u0005",
    "&\u0014\u0002[_\u0005(\u0015\u0002\\_\u0005 \u0011\u0002]_\u0005\"\u0012",
    "\u0002^W\u0003\u0002\u0002\u0002^X\u0003\u0002\u0002\u0002^Y\u0003\u0002",
    "\u0002\u0002^Z\u0003\u0002\u0002\u0002^[\u0003\u0002\u0002\u0002^\\",
    "\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a\u0007\u0003",
    "\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002cd\u0007\u0004\u0002\u0002",
    "dh\u0007\u0005\u0002\u0002eg\u0007$\u0002\u0002fe\u0003\u0002\u0002",
    "\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002ik\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002ks\u0007",
    "\u0006\u0002\u0002lt\u0005$\u0013\u0002mt\u0005\u0004\u0003\u0002nt",
    "\u0005*\u0016\u0002ot\u0005&\u0014\u0002pt\u0005(\u0015\u0002qt\u0005",
    " \u0011\u0002rt\u0005\"\u0012\u0002sl\u0003\u0002\u0002\u0002sm\u0003",
    "\u0002\u0002\u0002sn\u0003\u0002\u0002\u0002so\u0003\u0002\u0002\u0002",
    "sp\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002v\t\u0003\u0002\u0002\u0002wx\u0007\u0007\u0002\u0002x\u0085",
    "\u0007\u0005\u0002\u0002y\u0081\t\u0002\u0002\u0002z\u0082\u0005$\u0013",
    "\u0002{\u0082\u0005\u0004\u0003\u0002|\u0082\u0005*\u0016\u0002}\u0082",
    "\u0005&\u0014\u0002~\u0082\u0005(\u0015\u0002\u007f\u0082\u0005 \u0011",
    "\u0002\u0080\u0082\u0005\"\u0012\u0002\u0081z\u0003\u0002\u0002\u0002",
    "\u0081{\u0003\u0002\u0002\u0002\u0081|\u0003\u0002\u0002\u0002\u0081",
    "}\u0003\u0002\u0002\u0002\u0081~\u0003\u0002\u0002\u0002\u0081\u007f",
    "\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0084",
    "\u0003\u0002\u0002\u0002\u0083y\u0003\u0002\u0002\u0002\u0084\u0087",
    "\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0003\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0085",
    "\u0003\u0002\u0002\u0002\u0088\u0090\u0007\u0006\u0002\u0002\u0089\u0091",
    "\u0005$\u0013\u0002\u008a\u0091\u0005\u0004\u0003\u0002\u008b\u0091",
    "\u0005*\u0016\u0002\u008c\u0091\u0005&\u0014\u0002\u008d\u0091\u0005",
    "(\u0015\u0002\u008e\u0091\u0005 \u0011\u0002\u008f\u0091\u0005\"\u0012",
    "\u0002\u0090\u0089\u0003\u0002\u0002\u0002\u0090\u008a\u0003\u0002\u0002",
    "\u0002\u0090\u008b\u0003\u0002\u0002\u0002\u0090\u008c\u0003\u0002\u0002",
    "\u0002\u0090\u008d\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002",
    "\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u000b\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0007\b\u0002\u0002\u0093\u00a0\u0007\u0005\u0002",
    "\u0002\u0094\u009c\u0007$\u0002\u0002\u0095\u009d\u0005$\u0013\u0002",
    "\u0096\u009d\u0005\u0004\u0003\u0002\u0097\u009d\u0005*\u0016\u0002",
    "\u0098\u009d\u0005&\u0014\u0002\u0099\u009d\u0005(\u0015\u0002\u009a",
    "\u009d\u0005 \u0011\u0002\u009b\u009d\u0005\"\u0012\u0002\u009c\u0095",
    "\u0003\u0002\u0002\u0002\u009c\u0096\u0003\u0002\u0002\u0002\u009c\u0097",
    "\u0003\u0002\u0002\u0002\u009c\u0098\u0003\u0002\u0002\u0002\u009c\u0099",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009b",
    "\u0003\u0002\u0002\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u0094",
    "\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e",
    "\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a3",
    "\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00ab",
    "\u0007\u0006\u0002\u0002\u00a4\u00ac\u0005$\u0013\u0002\u00a5\u00ac",
    "\u0005\u0004\u0003\u0002\u00a6\u00ac\u0005*\u0016\u0002\u00a7\u00ac",
    "\u0005&\u0014\u0002\u00a8\u00ac\u0005(\u0015\u0002\u00a9\u00ac\u0005",
    " \u0011\u0002\u00aa\u00ac\u0005\"\u0012\u0002\u00ab\u00a4\u0003\u0002",
    "\u0002\u0002\u00ab\u00a5\u0003\u0002\u0002\u0002\u00ab\u00a6\u0003\u0002",
    "\u0002\u0002\u00ab\u00a7\u0003\u0002\u0002\u0002\u00ab\u00a8\u0003\u0002",
    "\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00aa\u0003\u0002",
    "\u0002\u0002\u00ac\r\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\t\u0002",
    "\u0002\u00ae\u00b6\u0007$\u0002\u0002\u00af\u00b7\u0005$\u0013\u0002",
    "\u00b0\u00b7\u0005\u0004\u0003\u0002\u00b1\u00b7\u0005*\u0016\u0002",
    "\u00b2\u00b7\u0005&\u0014\u0002\u00b3\u00b7\u0005(\u0015\u0002\u00b4",
    "\u00b7\u0005 \u0011\u0002\u00b5\u00b7\u0005\"\u0012\u0002\u00b6\u00af",
    "\u0003\u0002\u0002\u0002\u00b6\u00b0\u0003\u0002\u0002\u0002\u00b6\u00b1",
    "\u0003\u0002\u0002\u0002\u00b6\u00b2\u0003\u0002\u0002\u0002\u00b6\u00b3",
    "\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b5",
    "\u0003\u0002\u0002\u0002\u00b7\u000f\u0003\u0002\u0002\u0002\u00b8\u00c0",
    "\u0007\n\u0002\u0002\u00b9\u00c1\u0005$\u0013\u0002\u00ba\u00c1\u0005",
    "\u0004\u0003\u0002\u00bb\u00c1\u0005*\u0016\u0002\u00bc\u00c1\u0005",
    "&\u0014\u0002\u00bd\u00c1\u0005(\u0015\u0002\u00be\u00c1\u0005 \u0011",
    "\u0002\u00bf\u00c1\u0005\"\u0012\u0002\u00c0\u00b9\u0003\u0002\u0002",
    "\u0002\u00c0\u00ba\u0003\u0002\u0002\u0002\u00c0\u00bb\u0003\u0002\u0002",
    "\u0002\u00c0\u00bc\u0003\u0002\u0002\u0002\u00c0\u00bd\u0003\u0002\u0002",
    "\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c9\u0003\u0002\u0002\u0002\u00c2\u00ca\u0005$\u0013",
    "\u0002\u00c3\u00ca\u0005\u0004\u0003\u0002\u00c4\u00ca\u0005*\u0016",
    "\u0002\u00c5\u00ca\u0005&\u0014\u0002\u00c6\u00ca\u0005(\u0015\u0002",
    "\u00c7\u00ca\u0005 \u0011\u0002\u00c8\u00ca\u0005\"\u0012\u0002\u00c9",
    "\u00c2\u0003\u0002\u0002\u0002\u00c9\u00c3\u0003\u0002\u0002\u0002\u00c9",
    "\u00c4\u0003\u0002\u0002\u0002\u00c9\u00c5\u0003\u0002\u0002\u0002\u00c9",
    "\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9",
    "\u00c8\u0003\u0002\u0002\u0002\u00ca\u00d2\u0003\u0002\u0002\u0002\u00cb",
    "\u00d3\u0005$\u0013\u0002\u00cc\u00d3\u0005\u0004\u0003\u0002\u00cd",
    "\u00d3\u0005*\u0016\u0002\u00ce\u00d3\u0005&\u0014\u0002\u00cf\u00d3",
    "\u0005(\u0015\u0002\u00d0\u00d3\u0005 \u0011\u0002\u00d1\u00d3\u0005",
    "\"\u0012\u0002\u00d2\u00cb\u0003\u0002\u0002\u0002\u00d2\u00cc\u0003",
    "\u0002\u0002\u0002\u00d2\u00cd\u0003\u0002\u0002\u0002\u00d2\u00ce\u0003",
    "\u0002\u0002\u0002\u00d2\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003",
    "\u0002\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003",
    "\u0002\u0002\u0002\u00d3\u0011\u0003\u0002\u0002\u0002\u00d4\u00dc\u0007",
    "\u000b\u0002\u0002\u00d5\u00dd\u0005$\u0013\u0002\u00d6\u00dd\u0005",
    "\u0004\u0003\u0002\u00d7\u00dd\u0005*\u0016\u0002\u00d8\u00dd\u0005",
    "&\u0014\u0002\u00d9\u00dd\u0005(\u0015\u0002\u00da\u00dd\u0005 \u0011",
    "\u0002\u00db\u00dd\u0005\"\u0012\u0002\u00dc\u00d5\u0003\u0002\u0002",
    "\u0002\u00dc\u00d6\u0003\u0002\u0002\u0002\u00dc\u00d7\u0003\u0002\u0002",
    "\u0002\u00dc\u00d8\u0003\u0002\u0002\u0002\u00dc\u00d9\u0003\u0002\u0002",
    "\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00db\u0003\u0002\u0002",
    "\u0002\u00dd\u00e5\u0003\u0002\u0002\u0002\u00de\u00e6\u0005$\u0013",
    "\u0002\u00df\u00e6\u0005\u0004\u0003\u0002\u00e0\u00e6\u0005*\u0016",
    "\u0002\u00e1\u00e6\u0005&\u0014\u0002\u00e2\u00e6\u0005(\u0015\u0002",
    "\u00e3\u00e6\u0005 \u0011\u0002\u00e4\u00e6\u0005\"\u0012\u0002\u00e5",
    "\u00de\u0003\u0002\u0002\u0002\u00e5\u00df\u0003\u0002\u0002\u0002\u00e5",
    "\u00e0\u0003\u0002\u0002\u0002\u00e5\u00e1\u0003\u0002\u0002\u0002\u00e5",
    "\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5",
    "\u00e4\u0003\u0002\u0002\u0002\u00e6\u0013\u0003\u0002\u0002\u0002\u00e7",
    "\u00ef\u0007\f\u0002\u0002\u00e8\u00f0\u0005$\u0013\u0002\u00e9\u00f0",
    "\u0005\u0004\u0003\u0002\u00ea\u00f0\u0005*\u0016\u0002\u00eb\u00f0",
    "\u0005&\u0014\u0002\u00ec\u00f0\u0005(\u0015\u0002\u00ed\u00f0\u0005",
    " \u0011\u0002\u00ee\u00f0\u0005\"\u0012\u0002\u00ef\u00e8\u0003\u0002",
    "\u0002\u0002\u00ef\u00e9\u0003\u0002\u0002\u0002\u00ef\u00ea\u0003\u0002",
    "\u0002\u0002\u00ef\u00eb\u0003\u0002\u0002\u0002\u00ef\u00ec\u0003\u0002",
    "\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00ee\u0003\u0002",
    "\u0002\u0002\u00f0\u00f6\u0003\u0002\u0002\u0002\u00f1\u00f7\u0005$",
    "\u0013\u0002\u00f2\u00f7\u0005 \u0011\u0002\u00f3\u00f7\u0005\"\u0012",
    "\u0002\u00f4\u00f7\u0005\u0004\u0003\u0002\u00f5\u00f7\u0005*\u0016",
    "\u0002\u00f6\u00f1\u0003\u0002\u0002\u0002\u00f6\u00f2\u0003\u0002\u0002",
    "\u0002\u00f6\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002",
    "\u0002\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f7\u00ff\u0003\u0002\u0002",
    "\u0002\u00f8\u0100\u0005$\u0013\u0002\u00f9\u0100\u0005\u0004\u0003",
    "\u0002\u00fa\u0100\u0005*\u0016\u0002\u00fb\u0100\u0005&\u0014\u0002",
    "\u00fc\u0100\u0005(\u0015\u0002\u00fd\u0100\u0005 \u0011\u0002\u00fe",
    "\u0100\u0005\"\u0012\u0002\u00ff\u00f8\u0003\u0002\u0002\u0002\u00ff",
    "\u00f9\u0003\u0002\u0002\u0002\u00ff\u00fa\u0003\u0002\u0002\u0002\u00ff",
    "\u00fb\u0003\u0002\u0002\u0002\u00ff\u00fc\u0003\u0002\u0002\u0002\u00ff",
    "\u00fd\u0003\u0002\u0002\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u00ff",
    "\u0100\u0003\u0002\u0002\u0002\u0100\u0015\u0003\u0002\u0002\u0002\u0101",
    "\u0109\u0007\r\u0002\u0002\u0102\u010a\u0005$\u0013\u0002\u0103\u010a",
    "\u0005\u0004\u0003\u0002\u0104\u010a\u0005*\u0016\u0002\u0105\u010a",
    "\u0005&\u0014\u0002\u0106\u010a\u0005(\u0015\u0002\u0107\u010a\u0005",
    " \u0011\u0002\u0108\u010a\u0005\"\u0012\u0002\u0109\u0102\u0003\u0002",
    "\u0002\u0002\u0109\u0103\u0003\u0002\u0002\u0002\u0109\u0104\u0003\u0002",
    "\u0002\u0002\u0109\u0105\u0003\u0002\u0002\u0002\u0109\u0106\u0003\u0002",
    "\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u0108\u0003\u0002",
    "\u0002\u0002\u010a\u0112\u0003\u0002\u0002\u0002\u010b\u0113\u0005$",
    "\u0013\u0002\u010c\u0113\u0005\u0004\u0003\u0002\u010d\u0113\u0005*",
    "\u0016\u0002\u010e\u0113\u0005&\u0014\u0002\u010f\u0113\u0005(\u0015",
    "\u0002\u0110\u0113\u0005 \u0011\u0002\u0111\u0113\u0005\"\u0012\u0002",
    "\u0112\u010b\u0003\u0002\u0002\u0002\u0112\u010c\u0003\u0002\u0002\u0002",
    "\u0112\u010d\u0003\u0002\u0002\u0002\u0112\u010e\u0003\u0002\u0002\u0002",
    "\u0112\u010f\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002",
    "\u0112\u0111\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002",
    "\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002",
    "\u0115\u0017\u0003\u0002\u0002\u0002\u0116\u011e\u0007\u000e\u0002\u0002",
    "\u0117\u011f\u0005$\u0013\u0002\u0118\u011f\u0005\u0004\u0003\u0002",
    "\u0119\u011f\u0005*\u0016\u0002\u011a\u011f\u0005&\u0014\u0002\u011b",
    "\u011f\u0005(\u0015\u0002\u011c\u011f\u0005 \u0011\u0002\u011d\u011f",
    "\u0005\"\u0012\u0002\u011e\u0117\u0003\u0002\u0002\u0002\u011e\u0118",
    "\u0003\u0002\u0002\u0002\u011e\u0119\u0003\u0002\u0002\u0002\u011e\u011a",
    "\u0003\u0002\u0002\u0002\u011e\u011b\u0003\u0002\u0002\u0002\u011e\u011c",
    "\u0003\u0002\u0002\u0002\u011e\u011d\u0003\u0002\u0002\u0002\u011f\u0127",
    "\u0003\u0002\u0002\u0002\u0120\u0128\u0005$\u0013\u0002\u0121\u0128",
    "\u0005\u0004\u0003\u0002\u0122\u0128\u0005*\u0016\u0002\u0123\u0128",
    "\u0005&\u0014\u0002\u0124\u0128\u0005(\u0015\u0002\u0125\u0128\u0005",
    " \u0011\u0002\u0126\u0128\u0005\"\u0012\u0002\u0127\u0120\u0003\u0002",
    "\u0002\u0002\u0127\u0121\u0003\u0002\u0002\u0002\u0127\u0122\u0003\u0002",
    "\u0002\u0002\u0127\u0123\u0003\u0002\u0002\u0002\u0127\u0124\u0003\u0002",
    "\u0002\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0127\u0126\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002",
    "\u0002\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u0019\u0003\u0002",
    "\u0002\u0002\u012b\u0133\u0007\u000f\u0002\u0002\u012c\u0134\u0005$",
    "\u0013\u0002\u012d\u0134\u0005\u0004\u0003\u0002\u012e\u0134\u0005*",
    "\u0016\u0002\u012f\u0134\u0005&\u0014\u0002\u0130\u0134\u0005(\u0015",
    "\u0002\u0131\u0134\u0005 \u0011\u0002\u0132\u0134\u0005\"\u0012\u0002",
    "\u0133\u012c\u0003\u0002\u0002\u0002\u0133\u012d\u0003\u0002\u0002\u0002",
    "\u0133\u012e\u0003\u0002\u0002\u0002\u0133\u012f\u0003\u0002\u0002\u0002",
    "\u0133\u0130\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002",
    "\u0133\u0132\u0003\u0002\u0002\u0002\u0134\u013c\u0003\u0002\u0002\u0002",
    "\u0135\u013d\u0005$\u0013\u0002\u0136\u013d\u0005\u0004\u0003\u0002",
    "\u0137\u013d\u0005*\u0016\u0002\u0138\u013d\u0005&\u0014\u0002\u0139",
    "\u013d\u0005(\u0015\u0002\u013a\u013d\u0005 \u0011\u0002\u013b\u013d",
    "\u0005\"\u0012\u0002\u013c\u0135\u0003\u0002\u0002\u0002\u013c\u0136",
    "\u0003\u0002\u0002\u0002\u013c\u0137\u0003\u0002\u0002\u0002\u013c\u0138",
    "\u0003\u0002\u0002\u0002\u013c\u0139\u0003\u0002\u0002\u0002\u013c\u013a",
    "\u0003\u0002\u0002\u0002\u013c\u013b\u0003\u0002\u0002\u0002\u013d\u013e",
    "\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013e\u013f",
    "\u0003\u0002\u0002\u0002\u013f\u001b\u0003\u0002\u0002\u0002\u0140\u0148",
    "\u0007\u0010\u0002\u0002\u0141\u0149\u0005$\u0013\u0002\u0142\u0149",
    "\u0005\u0004\u0003\u0002\u0143\u0149\u0005*\u0016\u0002\u0144\u0149",
    "\u0005&\u0014\u0002\u0145\u0149\u0005(\u0015\u0002\u0146\u0149\u0005",
    " \u0011\u0002\u0147\u0149\u0005\"\u0012\u0002\u0148\u0141\u0003\u0002",
    "\u0002\u0002\u0148\u0142\u0003\u0002\u0002\u0002\u0148\u0143\u0003\u0002",
    "\u0002\u0002\u0148\u0144\u0003\u0002\u0002\u0002\u0148\u0145\u0003\u0002",
    "\u0002\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0148\u0147\u0003\u0002",
    "\u0002\u0002\u0149\u0151\u0003\u0002\u0002\u0002\u014a\u0152\u0005$",
    "\u0013\u0002\u014b\u0152\u0005\u0004\u0003\u0002\u014c\u0152\u0005*",
    "\u0016\u0002\u014d\u0152\u0005&\u0014\u0002\u014e\u0152\u0005(\u0015",
    "\u0002\u014f\u0152\u0005 \u0011\u0002\u0150\u0152\u0005\"\u0012\u0002",
    "\u0151\u014a\u0003\u0002\u0002\u0002\u0151\u014b\u0003\u0002\u0002\u0002",
    "\u0151\u014c\u0003\u0002\u0002\u0002\u0151\u014d\u0003\u0002\u0002\u0002",
    "\u0151\u014e\u0003\u0002\u0002\u0002\u0151\u014f\u0003\u0002\u0002\u0002",
    "\u0151\u0150\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002\u0002\u0002",
    "\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002",
    "\u0154\u001d\u0003\u0002\u0002\u0002\u0155\u015b\u0007\u0011\u0002\u0002",
    "\u0156\u015c\u0005$\u0013\u0002\u0157\u015c\u0005\u0004\u0003\u0002",
    "\u0158\u015c\u0005*\u0016\u0002\u0159\u015c\u0005 \u0011\u0002\u015a",
    "\u015c\u0005\"\u0012\u0002\u015b\u0156\u0003\u0002\u0002\u0002\u015b",
    "\u0157\u0003\u0002\u0002\u0002\u015b\u0158\u0003\u0002\u0002\u0002\u015b",
    "\u0159\u0003\u0002\u0002\u0002\u015b\u015a\u0003\u0002\u0002\u0002\u015c",
    "\u001f\u0003\u0002\u0002\u0002\u015d\u015e\u0007\u0012\u0002\u0002\u015e",
    "\u015f\u0007\u0013\u0002\u0002\u015f\u0167\u0007$\u0002\u0002\u0160",
    "\u0168\u0005$\u0013\u0002\u0161\u0168\u0005\u0004\u0003\u0002\u0162",
    "\u0168\u0005*\u0016\u0002\u0163\u0168\u0005&\u0014\u0002\u0164\u0168",
    "\u0005(\u0015\u0002\u0165\u0168\u0005 \u0011\u0002\u0166\u0168\u0005",
    "\"\u0012\u0002\u0167\u0160\u0003\u0002\u0002\u0002\u0167\u0161\u0003",
    "\u0002\u0002\u0002\u0167\u0162\u0003\u0002\u0002\u0002\u0167\u0163\u0003",
    "\u0002\u0002\u0002\u0167\u0164\u0003\u0002\u0002\u0002\u0167\u0165\u0003",
    "\u0002\u0002\u0002\u0167\u0166\u0003\u0002\u0002\u0002\u0168\u0169\u0003",
    "\u0002\u0002\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u0169\u016a\u0003",
    "\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016c\u0007",
    "\u0014\u0002\u0002\u016c!\u0003\u0002\u0002\u0002\u016d\u016e\u0007",
    "\u0012\u0002\u0002\u016e\u016f\u0007\u0015\u0002\u0002\u016f\u0177\u0007",
    "$\u0002\u0002\u0170\u0178\u0005$\u0013\u0002\u0171\u0178\u0005\u0004",
    "\u0003\u0002\u0172\u0178\u0005*\u0016\u0002\u0173\u0178\u0005&\u0014",
    "\u0002\u0174\u0178\u0005(\u0015\u0002\u0175\u0178\u0005 \u0011\u0002",
    "\u0176\u0178\u0005\"\u0012\u0002\u0177\u0170\u0003\u0002\u0002\u0002",
    "\u0177\u0171\u0003\u0002\u0002\u0002\u0177\u0172\u0003\u0002\u0002\u0002",
    "\u0177\u0173\u0003\u0002\u0002\u0002\u0177\u0174\u0003\u0002\u0002\u0002",
    "\u0177\u0175\u0003\u0002\u0002\u0002\u0177\u0176\u0003\u0002\u0002\u0002",
    "\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u017a\u0007\u0014\u0002\u0002",
    "\u017a#\u0003\u0002\u0002\u0002\u017b\u0183\u0007\u0012\u0002\u0002",
    "\u017c\u0184\u0005$\u0013\u0002\u017d\u0184\u0005\u0004\u0003\u0002",
    "\u017e\u0184\u0005*\u0016\u0002\u017f\u0184\u0005&\u0014\u0002\u0180",
    "\u0184\u0005(\u0015\u0002\u0181\u0184\u0005 \u0011\u0002\u0182\u0184",
    "\u0005\"\u0012\u0002\u0183\u017c\u0003\u0002\u0002\u0002\u0183\u017d",
    "\u0003\u0002\u0002\u0002\u0183\u017e\u0003\u0002\u0002\u0002\u0183\u017f",
    "\u0003\u0002\u0002\u0002\u0183\u0180\u0003\u0002\u0002\u0002\u0183\u0181",
    "\u0003\u0002\u0002\u0002\u0183\u0182\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0185\u0186",
    "\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u0188",
    "\u0007\u0014\u0002\u0002\u0188%\u0003\u0002\u0002\u0002\u0189\u0193",
    "\u0007\u0005\u0002\u0002\u018a\u0192\u0005$\u0013\u0002\u018b\u0192",
    "\u0005\u0004\u0003\u0002\u018c\u0192\u0005*\u0016\u0002\u018d\u0192",
    "\u0005&\u0014\u0002\u018e\u0192\u0005(\u0015\u0002\u018f\u0192\u0005",
    " \u0011\u0002\u0190\u0192\u0005\"\u0012\u0002\u0191\u018a\u0003\u0002",
    "\u0002\u0002\u0191\u018b\u0003\u0002\u0002\u0002\u0191\u018c\u0003\u0002",
    "\u0002\u0002\u0191\u018d\u0003\u0002\u0002\u0002\u0191\u018e\u0003\u0002",
    "\u0002\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0191\u0190\u0003\u0002",
    "\u0002\u0002\u0192\u0195\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002",
    "\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0196\u0003\u0002",
    "\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0196\u0197\u0007\u0006",
    "\u0002\u0002\u0197\'\u0003\u0002\u0002\u0002\u0198\u01a5\u0007\u0016",
    "\u0002\u0002\u0199\u01a1\u0007#\u0002\u0002\u019a\u01a2\u0005$\u0013",
    "\u0002\u019b\u01a2\u0005\u0004\u0003\u0002\u019c\u01a2\u0005*\u0016",
    "\u0002\u019d\u01a2\u0005&\u0014\u0002\u019e\u01a2\u0005(\u0015\u0002",
    "\u019f\u01a2\u0005 \u0011\u0002\u01a0\u01a2\u0005\"\u0012\u0002\u01a1",
    "\u019a\u0003\u0002\u0002\u0002\u01a1\u019b\u0003\u0002\u0002\u0002\u01a1",
    "\u019c\u0003\u0002\u0002\u0002\u01a1\u019d\u0003\u0002\u0002\u0002\u01a1",
    "\u019e\u0003\u0002\u0002\u0002\u01a1\u019f\u0003\u0002\u0002\u0002\u01a1",
    "\u01a0\u0003\u0002\u0002\u0002\u01a2\u01a4\u0003\u0002\u0002\u0002\u01a3",
    "\u0199\u0003\u0002\u0002\u0002\u01a4\u01a7\u0003\u0002\u0002\u0002\u01a5",
    "\u01a3\u0003\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6",
    "\u01a8\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8",
    "\u01a9\u0007\u0017\u0002\u0002\u01a9)\u0003\u0002\u0002\u0002\u01aa",
    "\u01ab\t\u0003\u0002\u0002\u01ab+\u0003\u0002\u0002\u00020/1KU^`hsu",
    "\u0081\u0085\u0090\u009c\u00a0\u00ab\u00b6\u00c0\u00c9\u00d2\u00dc\u00e5",
    "\u00ef\u00f6\u00ff\u0109\u0112\u0114\u011e\u0127\u0129\u0133\u013c\u013e",
    "\u0148\u0151\u0153\u015b\u0167\u0169\u0177\u0183\u0185\u0191\u0193\u01a1",
    "\u01a5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'new'", "'fn'", "'['", "']'", "'let'", "'loop'", 
                     "'def'", "'if'", "'in'", "'get'", "'<'", "'<='", "'>'", 
                     "'>='", "'not'", "'('", "'.'", "')'", "'.-'", "'{'", 
                     "'}'", "'='", "'_'", "'do'", "'and'", "'or'", "'+'", 
                     "'-'", "'/'", "'*'", "'prn'", "'instanceof'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "EQUALS", "UNDER", "DO", "AND", 
                      "OR", "ADD", "MINUS", "DIVIDE", "MULT", "PRN", "INSTANCEOF", 
                      "KEYWORD", "ID", "INTEGER", "STRING", "COMMENT", "WS" ];

var ruleNames =  [ "r", "form", "new_", "fn_", "let_", "loop", "def", "if_", 
                   "in_", "get_", "less", "lessOrEq", "greate", "greateOrEq", 
                   "not", "js_fn", "js_param", "fn", "array", "map", "value" ];

function clojurejsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

clojurejsParser.prototype = Object.create(antlr4.Parser.prototype);
clojurejsParser.prototype.constructor = clojurejsParser;

Object.defineProperty(clojurejsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

clojurejsParser.EOF = antlr4.Token.EOF;
clojurejsParser.T__0 = 1;
clojurejsParser.T__1 = 2;
clojurejsParser.T__2 = 3;
clojurejsParser.T__3 = 4;
clojurejsParser.T__4 = 5;
clojurejsParser.T__5 = 6;
clojurejsParser.T__6 = 7;
clojurejsParser.T__7 = 8;
clojurejsParser.T__8 = 9;
clojurejsParser.T__9 = 10;
clojurejsParser.T__10 = 11;
clojurejsParser.T__11 = 12;
clojurejsParser.T__12 = 13;
clojurejsParser.T__13 = 14;
clojurejsParser.T__14 = 15;
clojurejsParser.T__15 = 16;
clojurejsParser.T__16 = 17;
clojurejsParser.T__17 = 18;
clojurejsParser.T__18 = 19;
clojurejsParser.T__19 = 20;
clojurejsParser.T__20 = 21;
clojurejsParser.EQUALS = 22;
clojurejsParser.UNDER = 23;
clojurejsParser.DO = 24;
clojurejsParser.AND = 25;
clojurejsParser.OR = 26;
clojurejsParser.ADD = 27;
clojurejsParser.MINUS = 28;
clojurejsParser.DIVIDE = 29;
clojurejsParser.MULT = 30;
clojurejsParser.PRN = 31;
clojurejsParser.INSTANCEOF = 32;
clojurejsParser.KEYWORD = 33;
clojurejsParser.ID = 34;
clojurejsParser.INTEGER = 35;
clojurejsParser.STRING = 36;
clojurejsParser.COMMENT = 37;
clojurejsParser.WS = 38;

clojurejsParser.RULE_r = 0;
clojurejsParser.RULE_form = 1;
clojurejsParser.RULE_new_ = 2;
clojurejsParser.RULE_fn_ = 3;
clojurejsParser.RULE_let_ = 4;
clojurejsParser.RULE_loop = 5;
clojurejsParser.RULE_def = 6;
clojurejsParser.RULE_if_ = 7;
clojurejsParser.RULE_in_ = 8;
clojurejsParser.RULE_get_ = 9;
clojurejsParser.RULE_less = 10;
clojurejsParser.RULE_lessOrEq = 11;
clojurejsParser.RULE_greate = 12;
clojurejsParser.RULE_greateOrEq = 13;
clojurejsParser.RULE_not = 14;
clojurejsParser.RULE_js_fn = 15;
clojurejsParser.RULE_js_param = 16;
clojurejsParser.RULE_fn = 17;
clojurejsParser.RULE_array = 18;
clojurejsParser.RULE_map = 19;
clojurejsParser.RULE_value = 20;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

RContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

RContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitR(this);
	}
};

RContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitR(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.RContext = RContext;

clojurejsParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, clojurejsParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===clojurejsParser.T__15) {
            this.state = 45;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 42;
                this.js_fn();
                break;

            case 2:
                this.state = 43;
                this.js_param();
                break;

            case 3:
                this.state = 44;
                this.fn();
                break;

            }
            this.state = 49;
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
};

function FormContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_form;
    return this;
}

FormContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormContext.prototype.constructor = FormContext;

FormContext.prototype.EQUALS = function() {
    return this.getToken(clojurejsParser.EQUALS, 0);
};

FormContext.prototype.DO = function() {
    return this.getToken(clojurejsParser.DO, 0);
};

FormContext.prototype.AND = function() {
    return this.getToken(clojurejsParser.AND, 0);
};

FormContext.prototype.OR = function() {
    return this.getToken(clojurejsParser.OR, 0);
};

FormContext.prototype.ADD = function() {
    return this.getToken(clojurejsParser.ADD, 0);
};

FormContext.prototype.MINUS = function() {
    return this.getToken(clojurejsParser.MINUS, 0);
};

FormContext.prototype.DIVIDE = function() {
    return this.getToken(clojurejsParser.DIVIDE, 0);
};

FormContext.prototype.MULT = function() {
    return this.getToken(clojurejsParser.MULT, 0);
};

FormContext.prototype.PRN = function() {
    return this.getToken(clojurejsParser.PRN, 0);
};

FormContext.prototype.INSTANCEOF = function() {
    return this.getToken(clojurejsParser.INSTANCEOF, 0);
};

FormContext.prototype.new_ = function() {
    return this.getTypedRuleContext(New_Context,0);
};

FormContext.prototype.fn_ = function() {
    return this.getTypedRuleContext(Fn_Context,0);
};

FormContext.prototype.let_ = function() {
    return this.getTypedRuleContext(Let_Context,0);
};

FormContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

FormContext.prototype.def = function() {
    return this.getTypedRuleContext(DefContext,0);
};

FormContext.prototype.if_ = function() {
    return this.getTypedRuleContext(If_Context,0);
};

FormContext.prototype.in_ = function() {
    return this.getTypedRuleContext(In_Context,0);
};

FormContext.prototype.get_ = function() {
    return this.getTypedRuleContext(Get_Context,0);
};

FormContext.prototype.less = function() {
    return this.getTypedRuleContext(LessContext,0);
};

FormContext.prototype.greate = function() {
    return this.getTypedRuleContext(GreateContext,0);
};

FormContext.prototype.lessOrEq = function() {
    return this.getTypedRuleContext(LessOrEqContext,0);
};

FormContext.prototype.greateOrEq = function() {
    return this.getTypedRuleContext(GreateOrEqContext,0);
};

FormContext.prototype.not = function() {
    return this.getTypedRuleContext(NotContext,0);
};

FormContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterForm(this);
	}
};

FormContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitForm(this);
	}
};

FormContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitForm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.FormContext = FormContext;

clojurejsParser.prototype.form = function() {

    var localctx = new FormContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, clojurejsParser.RULE_form);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case clojurejsParser.EQUALS:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(clojurejsParser.EQUALS);
            break;
        case clojurejsParser.DO:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(clojurejsParser.DO);
            break;
        case clojurejsParser.AND:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.match(clojurejsParser.AND);
            break;
        case clojurejsParser.OR:
            this.enterOuterAlt(localctx, 4);
            this.state = 53;
            this.match(clojurejsParser.OR);
            break;
        case clojurejsParser.ADD:
            this.enterOuterAlt(localctx, 5);
            this.state = 54;
            this.match(clojurejsParser.ADD);
            break;
        case clojurejsParser.MINUS:
            this.enterOuterAlt(localctx, 6);
            this.state = 55;
            this.match(clojurejsParser.MINUS);
            break;
        case clojurejsParser.DIVIDE:
            this.enterOuterAlt(localctx, 7);
            this.state = 56;
            this.match(clojurejsParser.DIVIDE);
            break;
        case clojurejsParser.MULT:
            this.enterOuterAlt(localctx, 8);
            this.state = 57;
            this.match(clojurejsParser.MULT);
            break;
        case clojurejsParser.PRN:
            this.enterOuterAlt(localctx, 9);
            this.state = 58;
            this.match(clojurejsParser.PRN);
            break;
        case clojurejsParser.INSTANCEOF:
            this.enterOuterAlt(localctx, 10);
            this.state = 59;
            this.match(clojurejsParser.INSTANCEOF);
            break;
        case clojurejsParser.T__0:
            this.enterOuterAlt(localctx, 11);
            this.state = 60;
            this.new_();
            break;
        case clojurejsParser.T__1:
            this.enterOuterAlt(localctx, 12);
            this.state = 61;
            this.fn_();
            break;
        case clojurejsParser.T__4:
            this.enterOuterAlt(localctx, 13);
            this.state = 62;
            this.let_();
            break;
        case clojurejsParser.T__5:
            this.enterOuterAlt(localctx, 14);
            this.state = 63;
            this.loop();
            break;
        case clojurejsParser.T__6:
            this.enterOuterAlt(localctx, 15);
            this.state = 64;
            this.def();
            break;
        case clojurejsParser.T__7:
            this.enterOuterAlt(localctx, 16);
            this.state = 65;
            this.if_();
            break;
        case clojurejsParser.T__8:
            this.enterOuterAlt(localctx, 17);
            this.state = 66;
            this.in_();
            break;
        case clojurejsParser.T__9:
            this.enterOuterAlt(localctx, 18);
            this.state = 67;
            this.get_();
            break;
        case clojurejsParser.T__10:
            this.enterOuterAlt(localctx, 19);
            this.state = 68;
            this.less();
            break;
        case clojurejsParser.T__12:
            this.enterOuterAlt(localctx, 20);
            this.state = 69;
            this.greate();
            break;
        case clojurejsParser.T__11:
            this.enterOuterAlt(localctx, 21);
            this.state = 70;
            this.lessOrEq();
            break;
        case clojurejsParser.T__13:
            this.enterOuterAlt(localctx, 22);
            this.state = 71;
            this.greateOrEq();
            break;
        case clojurejsParser.T__14:
            this.enterOuterAlt(localctx, 23);
            this.state = 72;
            this.not();
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
};

function New_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_new_;
    return this;
}

New_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
New_Context.prototype.constructor = New_Context;

New_Context.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

New_Context.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

New_Context.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

New_Context.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

New_Context.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

New_Context.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

New_Context.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

New_Context.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterNew_(this);
	}
};

New_Context.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitNew_(this);
	}
};

New_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitNew_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.New_Context = New_Context;

clojurejsParser.prototype.new_ = function() {

    var localctx = new New_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 4, clojurejsParser.RULE_new_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(clojurejsParser.T__0);
        this.state = 83;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 76;
            this.fn();
            break;

        case 2:
            this.state = 77;
            this.form();
            break;

        case 3:
            this.state = 78;
            this.value();
            break;

        case 4:
            this.state = 79;
            this.array();
            break;

        case 5:
            this.state = 80;
            this.map();
            break;

        case 6:
            this.state = 81;
            this.js_fn();
            break;

        case 7:
            this.state = 82;
            this.js_param();
            break;

        }
        this.state = 94;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 85;
                    this.fn();
                    break;

                case 2:
                    this.state = 86;
                    this.form();
                    break;

                case 3:
                    this.state = 87;
                    this.value();
                    break;

                case 4:
                    this.state = 88;
                    this.array();
                    break;

                case 5:
                    this.state = 89;
                    this.map();
                    break;

                case 6:
                    this.state = 90;
                    this.js_fn();
                    break;

                case 7:
                    this.state = 91;
                    this.js_param();
                    break;

                } 
            }
            this.state = 96;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
};

function Fn_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_fn_;
    return this;
}

Fn_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fn_Context.prototype.constructor = Fn_Context;

Fn_Context.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(clojurejsParser.ID);
    } else {
        return this.getToken(clojurejsParser.ID, i);
    }
};


Fn_Context.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

Fn_Context.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

Fn_Context.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Fn_Context.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

Fn_Context.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

Fn_Context.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

Fn_Context.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

Fn_Context.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterFn_(this);
	}
};

Fn_Context.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitFn_(this);
	}
};

Fn_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitFn_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.Fn_Context = Fn_Context;

clojurejsParser.prototype.fn_ = function() {

    var localctx = new Fn_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 6, clojurejsParser.RULE_fn_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(clojurejsParser.T__1);
        this.state = 98;
        this.match(clojurejsParser.T__2);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===clojurejsParser.ID) {
            this.state = 99;
            this.match(clojurejsParser.ID);
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 105;
        this.match(clojurejsParser.T__3);
        this.state = 113; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 113;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 106;
        		    this.fn();
        		    break;

        		case 2:
        		    this.state = 107;
        		    this.form();
        		    break;

        		case 3:
        		    this.state = 108;
        		    this.value();
        		    break;

        		case 4:
        		    this.state = 109;
        		    this.array();
        		    break;

        		case 5:
        		    this.state = 110;
        		    this.map();
        		    break;

        		case 6:
        		    this.state = 111;
        		    this.js_fn();
        		    break;

        		case 7:
        		    this.state = 112;
        		    this.js_param();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 115; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};

function Let_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_let_;
    return this;
}

Let_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Let_Context.prototype.constructor = Let_Context;

Let_Context.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

Let_Context.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

Let_Context.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Let_Context.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

Let_Context.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

Let_Context.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

Let_Context.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

Let_Context.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(clojurejsParser.ID);
    } else {
        return this.getToken(clojurejsParser.ID, i);
    }
};


Let_Context.prototype.UNDER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(clojurejsParser.UNDER);
    } else {
        return this.getToken(clojurejsParser.UNDER, i);
    }
};


Let_Context.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterLet_(this);
	}
};

Let_Context.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitLet_(this);
	}
};

Let_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitLet_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.Let_Context = Let_Context;

clojurejsParser.prototype.let_ = function() {

    var localctx = new Let_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 8, clojurejsParser.RULE_let_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(clojurejsParser.T__4);
        this.state = 118;
        this.match(clojurejsParser.T__2);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===clojurejsParser.UNDER || _la===clojurejsParser.ID) {
            this.state = 119;
            _la = this._input.LA(1);
            if(!(_la===clojurejsParser.UNDER || _la===clojurejsParser.ID)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 127;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 120;
                this.fn();
                break;

            case 2:
                this.state = 121;
                this.form();
                break;

            case 3:
                this.state = 122;
                this.value();
                break;

            case 4:
                this.state = 123;
                this.array();
                break;

            case 5:
                this.state = 124;
                this.map();
                break;

            case 6:
                this.state = 125;
                this.js_fn();
                break;

            case 7:
                this.state = 126;
                this.js_param();
                break;

            }
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 134;
        this.match(clojurejsParser.T__3);
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.state = 135;
            this.fn();
            break;

        case 2:
            this.state = 136;
            this.form();
            break;

        case 3:
            this.state = 137;
            this.value();
            break;

        case 4:
            this.state = 138;
            this.array();
            break;

        case 5:
            this.state = 139;
            this.map();
            break;

        case 6:
            this.state = 140;
            this.js_fn();
            break;

        case 7:
            this.state = 141;
            this.js_param();
            break;

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
};

function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

LoopContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

LoopContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

LoopContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

LoopContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

LoopContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

LoopContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

LoopContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(clojurejsParser.ID);
    } else {
        return this.getToken(clojurejsParser.ID, i);
    }
};


LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitLoop(this);
	}
};

LoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.LoopContext = LoopContext;

clojurejsParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, clojurejsParser.RULE_loop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.match(clojurejsParser.T__5);
        this.state = 145;
        this.match(clojurejsParser.T__2);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===clojurejsParser.ID) {
            this.state = 146;
            this.match(clojurejsParser.ID);
            this.state = 154;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
            switch(la_) {
            case 1:
                this.state = 147;
                this.fn();
                break;

            case 2:
                this.state = 148;
                this.form();
                break;

            case 3:
                this.state = 149;
                this.value();
                break;

            case 4:
                this.state = 150;
                this.array();
                break;

            case 5:
                this.state = 151;
                this.map();
                break;

            case 6:
                this.state = 152;
                this.js_fn();
                break;

            case 7:
                this.state = 153;
                this.js_param();
                break;

            }
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 161;
        this.match(clojurejsParser.T__3);
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.state = 162;
            this.fn();
            break;

        case 2:
            this.state = 163;
            this.form();
            break;

        case 3:
            this.state = 164;
            this.value();
            break;

        case 4:
            this.state = 165;
            this.array();
            break;

        case 5:
            this.state = 166;
            this.map();
            break;

        case 6:
            this.state = 167;
            this.js_fn();
            break;

        case 7:
            this.state = 168;
            this.js_param();
            break;

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
};

function DefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_def;
    return this;
}

DefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefContext.prototype.constructor = DefContext;

DefContext.prototype.ID = function() {
    return this.getToken(clojurejsParser.ID, 0);
};

DefContext.prototype.fn = function() {
    return this.getTypedRuleContext(FnContext,0);
};

DefContext.prototype.form = function() {
    return this.getTypedRuleContext(FormContext,0);
};

DefContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

DefContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

DefContext.prototype.map = function() {
    return this.getTypedRuleContext(MapContext,0);
};

DefContext.prototype.js_fn = function() {
    return this.getTypedRuleContext(Js_fnContext,0);
};

DefContext.prototype.js_param = function() {
    return this.getTypedRuleContext(Js_paramContext,0);
};

DefContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterDef(this);
	}
};

DefContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitDef(this);
	}
};

DefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.DefContext = DefContext;

clojurejsParser.prototype.def = function() {

    var localctx = new DefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, clojurejsParser.RULE_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(clojurejsParser.T__6);
        this.state = 172;
        this.match(clojurejsParser.ID);
        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.state = 173;
            this.fn();
            break;

        case 2:
            this.state = 174;
            this.form();
            break;

        case 3:
            this.state = 175;
            this.value();
            break;

        case 4:
            this.state = 176;
            this.array();
            break;

        case 5:
            this.state = 177;
            this.map();
            break;

        case 6:
            this.state = 178;
            this.js_fn();
            break;

        case 7:
            this.state = 179;
            this.js_param();
            break;

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
};

function If_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_if_;
    return this;
}

If_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_Context.prototype.constructor = If_Context;

If_Context.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

If_Context.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

If_Context.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

If_Context.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

If_Context.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

If_Context.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

If_Context.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

If_Context.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterIf_(this);
	}
};

If_Context.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitIf_(this);
	}
};

If_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitIf_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.If_Context = If_Context;

clojurejsParser.prototype.if_ = function() {

    var localctx = new If_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 14, clojurejsParser.RULE_if_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(clojurejsParser.T__7);
        this.state = 190;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.state = 183;
            this.fn();
            break;

        case 2:
            this.state = 184;
            this.form();
            break;

        case 3:
            this.state = 185;
            this.value();
            break;

        case 4:
            this.state = 186;
            this.array();
            break;

        case 5:
            this.state = 187;
            this.map();
            break;

        case 6:
            this.state = 188;
            this.js_fn();
            break;

        case 7:
            this.state = 189;
            this.js_param();
            break;

        }
        this.state = 199;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.state = 192;
            this.fn();
            break;

        case 2:
            this.state = 193;
            this.form();
            break;

        case 3:
            this.state = 194;
            this.value();
            break;

        case 4:
            this.state = 195;
            this.array();
            break;

        case 5:
            this.state = 196;
            this.map();
            break;

        case 6:
            this.state = 197;
            this.js_fn();
            break;

        case 7:
            this.state = 198;
            this.js_param();
            break;

        }
        this.state = 208;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 201;
            this.fn();

        } else if(la_===2) {
            this.state = 202;
            this.form();

        } else if(la_===3) {
            this.state = 203;
            this.value();

        } else if(la_===4) {
            this.state = 204;
            this.array();

        } else if(la_===5) {
            this.state = 205;
            this.map();

        } else if(la_===6) {
            this.state = 206;
            this.js_fn();

        } else if(la_===7) {
            this.state = 207;
            this.js_param();

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
};

function In_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_in_;
    return this;
}

In_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
In_Context.prototype.constructor = In_Context;

In_Context.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

In_Context.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

In_Context.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

In_Context.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

In_Context.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

In_Context.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

In_Context.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

In_Context.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterIn_(this);
	}
};

In_Context.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitIn_(this);
	}
};

In_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitIn_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.In_Context = In_Context;

clojurejsParser.prototype.in_ = function() {

    var localctx = new In_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 16, clojurejsParser.RULE_in_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(clojurejsParser.T__8);
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.state = 211;
            this.fn();
            break;

        case 2:
            this.state = 212;
            this.form();
            break;

        case 3:
            this.state = 213;
            this.value();
            break;

        case 4:
            this.state = 214;
            this.array();
            break;

        case 5:
            this.state = 215;
            this.map();
            break;

        case 6:
            this.state = 216;
            this.js_fn();
            break;

        case 7:
            this.state = 217;
            this.js_param();
            break;

        }
        this.state = 227;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.state = 220;
            this.fn();
            break;

        case 2:
            this.state = 221;
            this.form();
            break;

        case 3:
            this.state = 222;
            this.value();
            break;

        case 4:
            this.state = 223;
            this.array();
            break;

        case 5:
            this.state = 224;
            this.map();
            break;

        case 6:
            this.state = 225;
            this.js_fn();
            break;

        case 7:
            this.state = 226;
            this.js_param();
            break;

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
};

function Get_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_get_;
    return this;
}

Get_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Get_Context.prototype.constructor = Get_Context;

Get_Context.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

Get_Context.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

Get_Context.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Get_Context.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

Get_Context.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

Get_Context.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

Get_Context.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

Get_Context.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterGet_(this);
	}
};

Get_Context.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitGet_(this);
	}
};

Get_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitGet_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.Get_Context = Get_Context;

clojurejsParser.prototype.get_ = function() {

    var localctx = new Get_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 18, clojurejsParser.RULE_get_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(clojurejsParser.T__9);
        this.state = 237;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.state = 230;
            this.fn();
            break;

        case 2:
            this.state = 231;
            this.form();
            break;

        case 3:
            this.state = 232;
            this.value();
            break;

        case 4:
            this.state = 233;
            this.array();
            break;

        case 5:
            this.state = 234;
            this.map();
            break;

        case 6:
            this.state = 235;
            this.js_fn();
            break;

        case 7:
            this.state = 236;
            this.js_param();
            break;

        }
        this.state = 244;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.state = 239;
            this.fn();
            break;

        case 2:
            this.state = 240;
            this.js_fn();
            break;

        case 3:
            this.state = 241;
            this.js_param();
            break;

        case 4:
            this.state = 242;
            this.form();
            break;

        case 5:
            this.state = 243;
            this.value();
            break;

        }
        this.state = 253;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 246;
            this.fn();

        } else if(la_===2) {
            this.state = 247;
            this.form();

        } else if(la_===3) {
            this.state = 248;
            this.value();

        } else if(la_===4) {
            this.state = 249;
            this.array();

        } else if(la_===5) {
            this.state = 250;
            this.map();

        } else if(la_===6) {
            this.state = 251;
            this.js_fn();

        } else if(la_===7) {
            this.state = 252;
            this.js_param();

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
};

function LessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_less;
    return this;
}

LessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LessContext.prototype.constructor = LessContext;

LessContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

LessContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

LessContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

LessContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

LessContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

LessContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

LessContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

LessContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterLess(this);
	}
};

LessContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitLess(this);
	}
};

LessContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitLess(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.LessContext = LessContext;

clojurejsParser.prototype.less = function() {

    var localctx = new LessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, clojurejsParser.RULE_less);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(clojurejsParser.T__10);
        this.state = 263;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.state = 256;
            this.fn();
            break;

        case 2:
            this.state = 257;
            this.form();
            break;

        case 3:
            this.state = 258;
            this.value();
            break;

        case 4:
            this.state = 259;
            this.array();
            break;

        case 5:
            this.state = 260;
            this.map();
            break;

        case 6:
            this.state = 261;
            this.js_fn();
            break;

        case 7:
            this.state = 262;
            this.js_param();
            break;

        }
        this.state = 272; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 272;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 265;
        		    this.fn();
        		    break;

        		case 2:
        		    this.state = 266;
        		    this.form();
        		    break;

        		case 3:
        		    this.state = 267;
        		    this.value();
        		    break;

        		case 4:
        		    this.state = 268;
        		    this.array();
        		    break;

        		case 5:
        		    this.state = 269;
        		    this.map();
        		    break;

        		case 6:
        		    this.state = 270;
        		    this.js_fn();
        		    break;

        		case 7:
        		    this.state = 271;
        		    this.js_param();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 274; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,26, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};

function LessOrEqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_lessOrEq;
    return this;
}

LessOrEqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LessOrEqContext.prototype.constructor = LessOrEqContext;

LessOrEqContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

LessOrEqContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

LessOrEqContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

LessOrEqContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

LessOrEqContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

LessOrEqContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

LessOrEqContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

LessOrEqContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterLessOrEq(this);
	}
};

LessOrEqContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitLessOrEq(this);
	}
};

LessOrEqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitLessOrEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.LessOrEqContext = LessOrEqContext;

clojurejsParser.prototype.lessOrEq = function() {

    var localctx = new LessOrEqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, clojurejsParser.RULE_lessOrEq);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(clojurejsParser.T__11);
        this.state = 284;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.state = 277;
            this.fn();
            break;

        case 2:
            this.state = 278;
            this.form();
            break;

        case 3:
            this.state = 279;
            this.value();
            break;

        case 4:
            this.state = 280;
            this.array();
            break;

        case 5:
            this.state = 281;
            this.map();
            break;

        case 6:
            this.state = 282;
            this.js_fn();
            break;

        case 7:
            this.state = 283;
            this.js_param();
            break;

        }
        this.state = 293; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 293;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 286;
        		    this.fn();
        		    break;

        		case 2:
        		    this.state = 287;
        		    this.form();
        		    break;

        		case 3:
        		    this.state = 288;
        		    this.value();
        		    break;

        		case 4:
        		    this.state = 289;
        		    this.array();
        		    break;

        		case 5:
        		    this.state = 290;
        		    this.map();
        		    break;

        		case 6:
        		    this.state = 291;
        		    this.js_fn();
        		    break;

        		case 7:
        		    this.state = 292;
        		    this.js_param();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 295; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,29, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};

function GreateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_greate;
    return this;
}

GreateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreateContext.prototype.constructor = GreateContext;

GreateContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

GreateContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

GreateContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

GreateContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

GreateContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

GreateContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

GreateContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

GreateContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterGreate(this);
	}
};

GreateContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitGreate(this);
	}
};

GreateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitGreate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.GreateContext = GreateContext;

clojurejsParser.prototype.greate = function() {

    var localctx = new GreateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, clojurejsParser.RULE_greate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this.match(clojurejsParser.T__12);
        this.state = 305;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.state = 298;
            this.fn();
            break;

        case 2:
            this.state = 299;
            this.form();
            break;

        case 3:
            this.state = 300;
            this.value();
            break;

        case 4:
            this.state = 301;
            this.array();
            break;

        case 5:
            this.state = 302;
            this.map();
            break;

        case 6:
            this.state = 303;
            this.js_fn();
            break;

        case 7:
            this.state = 304;
            this.js_param();
            break;

        }
        this.state = 314; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 314;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 307;
        		    this.fn();
        		    break;

        		case 2:
        		    this.state = 308;
        		    this.form();
        		    break;

        		case 3:
        		    this.state = 309;
        		    this.value();
        		    break;

        		case 4:
        		    this.state = 310;
        		    this.array();
        		    break;

        		case 5:
        		    this.state = 311;
        		    this.map();
        		    break;

        		case 6:
        		    this.state = 312;
        		    this.js_fn();
        		    break;

        		case 7:
        		    this.state = 313;
        		    this.js_param();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 316; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};

function GreateOrEqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_greateOrEq;
    return this;
}

GreateOrEqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreateOrEqContext.prototype.constructor = GreateOrEqContext;

GreateOrEqContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

GreateOrEqContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

GreateOrEqContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

GreateOrEqContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

GreateOrEqContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

GreateOrEqContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

GreateOrEqContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

GreateOrEqContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterGreateOrEq(this);
	}
};

GreateOrEqContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitGreateOrEq(this);
	}
};

GreateOrEqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitGreateOrEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.GreateOrEqContext = GreateOrEqContext;

clojurejsParser.prototype.greateOrEq = function() {

    var localctx = new GreateOrEqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, clojurejsParser.RULE_greateOrEq);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(clojurejsParser.T__13);
        this.state = 326;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.state = 319;
            this.fn();
            break;

        case 2:
            this.state = 320;
            this.form();
            break;

        case 3:
            this.state = 321;
            this.value();
            break;

        case 4:
            this.state = 322;
            this.array();
            break;

        case 5:
            this.state = 323;
            this.map();
            break;

        case 6:
            this.state = 324;
            this.js_fn();
            break;

        case 7:
            this.state = 325;
            this.js_param();
            break;

        }
        this.state = 335; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 335;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 328;
        		    this.fn();
        		    break;

        		case 2:
        		    this.state = 329;
        		    this.form();
        		    break;

        		case 3:
        		    this.state = 330;
        		    this.value();
        		    break;

        		case 4:
        		    this.state = 331;
        		    this.array();
        		    break;

        		case 5:
        		    this.state = 332;
        		    this.map();
        		    break;

        		case 6:
        		    this.state = 333;
        		    this.js_fn();
        		    break;

        		case 7:
        		    this.state = 334;
        		    this.js_param();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 337; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};

function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.fn = function() {
    return this.getTypedRuleContext(FnContext,0);
};

NotContext.prototype.form = function() {
    return this.getTypedRuleContext(FormContext,0);
};

NotContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

NotContext.prototype.js_fn = function() {
    return this.getTypedRuleContext(Js_fnContext,0);
};

NotContext.prototype.js_param = function() {
    return this.getTypedRuleContext(Js_paramContext,0);
};

NotContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterNot(this);
	}
};

NotContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitNot(this);
	}
};

NotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitNot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.NotContext = NotContext;

clojurejsParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, clojurejsParser.RULE_not);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.match(clojurejsParser.T__14);
        this.state = 345;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.state = 340;
            this.fn();
            break;

        case 2:
            this.state = 341;
            this.form();
            break;

        case 3:
            this.state = 342;
            this.value();
            break;

        case 4:
            this.state = 343;
            this.js_fn();
            break;

        case 5:
            this.state = 344;
            this.js_param();
            break;

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
};

function Js_fnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_js_fn;
    return this;
}

Js_fnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Js_fnContext.prototype.constructor = Js_fnContext;

Js_fnContext.prototype.ID = function() {
    return this.getToken(clojurejsParser.ID, 0);
};

Js_fnContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

Js_fnContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

Js_fnContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Js_fnContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

Js_fnContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

Js_fnContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

Js_fnContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

Js_fnContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterJs_fn(this);
	}
};

Js_fnContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitJs_fn(this);
	}
};

Js_fnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitJs_fn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.Js_fnContext = Js_fnContext;

clojurejsParser.prototype.js_fn = function() {

    var localctx = new Js_fnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, clojurejsParser.RULE_js_fn);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(clojurejsParser.T__15);
        this.state = 348;
        this.match(clojurejsParser.T__16);
        this.state = 349;
        this.match(clojurejsParser.ID);
        this.state = 357; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 357;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
            switch(la_) {
            case 1:
                this.state = 350;
                this.fn();
                break;

            case 2:
                this.state = 351;
                this.form();
                break;

            case 3:
                this.state = 352;
                this.value();
                break;

            case 4:
                this.state = 353;
                this.array();
                break;

            case 5:
                this.state = 354;
                this.map();
                break;

            case 6:
                this.state = 355;
                this.js_fn();
                break;

            case 7:
                this.state = 356;
                this.js_param();
                break;

            }
            this.state = 359; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << clojurejsParser.T__0) | (1 << clojurejsParser.T__1) | (1 << clojurejsParser.T__2) | (1 << clojurejsParser.T__4) | (1 << clojurejsParser.T__5) | (1 << clojurejsParser.T__6) | (1 << clojurejsParser.T__7) | (1 << clojurejsParser.T__8) | (1 << clojurejsParser.T__9) | (1 << clojurejsParser.T__10) | (1 << clojurejsParser.T__11) | (1 << clojurejsParser.T__12) | (1 << clojurejsParser.T__13) | (1 << clojurejsParser.T__14) | (1 << clojurejsParser.T__15) | (1 << clojurejsParser.T__19) | (1 << clojurejsParser.EQUALS) | (1 << clojurejsParser.DO) | (1 << clojurejsParser.AND) | (1 << clojurejsParser.OR) | (1 << clojurejsParser.ADD) | (1 << clojurejsParser.MINUS) | (1 << clojurejsParser.DIVIDE) | (1 << clojurejsParser.MULT) | (1 << clojurejsParser.PRN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (clojurejsParser.INSTANCEOF - 32)) | (1 << (clojurejsParser.KEYWORD - 32)) | (1 << (clojurejsParser.ID - 32)) | (1 << (clojurejsParser.INTEGER - 32)) | (1 << (clojurejsParser.STRING - 32)))) !== 0));
        this.state = 361;
        this.match(clojurejsParser.T__17);
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
};

function Js_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_js_param;
    return this;
}

Js_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Js_paramContext.prototype.constructor = Js_paramContext;

Js_paramContext.prototype.ID = function() {
    return this.getToken(clojurejsParser.ID, 0);
};

Js_paramContext.prototype.fn = function() {
    return this.getTypedRuleContext(FnContext,0);
};

Js_paramContext.prototype.form = function() {
    return this.getTypedRuleContext(FormContext,0);
};

Js_paramContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Js_paramContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

Js_paramContext.prototype.map = function() {
    return this.getTypedRuleContext(MapContext,0);
};

Js_paramContext.prototype.js_fn = function() {
    return this.getTypedRuleContext(Js_fnContext,0);
};

Js_paramContext.prototype.js_param = function() {
    return this.getTypedRuleContext(Js_paramContext,0);
};

Js_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterJs_param(this);
	}
};

Js_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitJs_param(this);
	}
};

Js_paramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitJs_param(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.Js_paramContext = Js_paramContext;

clojurejsParser.prototype.js_param = function() {

    var localctx = new Js_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, clojurejsParser.RULE_js_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.match(clojurejsParser.T__15);
        this.state = 364;
        this.match(clojurejsParser.T__18);
        this.state = 365;
        this.match(clojurejsParser.ID);
        this.state = 373;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.state = 366;
            this.fn();
            break;

        case 2:
            this.state = 367;
            this.form();
            break;

        case 3:
            this.state = 368;
            this.value();
            break;

        case 4:
            this.state = 369;
            this.array();
            break;

        case 5:
            this.state = 370;
            this.map();
            break;

        case 6:
            this.state = 371;
            this.js_fn();
            break;

        case 7:
            this.state = 372;
            this.js_param();
            break;

        }
        this.state = 375;
        this.match(clojurejsParser.T__17);
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
};

function FnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_fn;
    return this;
}

FnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FnContext.prototype.constructor = FnContext;

FnContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

FnContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

FnContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

FnContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

FnContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

FnContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

FnContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

FnContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterFn(this);
	}
};

FnContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitFn(this);
	}
};

FnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitFn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.FnContext = FnContext;

clojurejsParser.prototype.fn = function() {

    var localctx = new FnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, clojurejsParser.RULE_fn);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.match(clojurejsParser.T__15);
        this.state = 385; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 385;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
            switch(la_) {
            case 1:
                this.state = 378;
                this.fn();
                break;

            case 2:
                this.state = 379;
                this.form();
                break;

            case 3:
                this.state = 380;
                this.value();
                break;

            case 4:
                this.state = 381;
                this.array();
                break;

            case 5:
                this.state = 382;
                this.map();
                break;

            case 6:
                this.state = 383;
                this.js_fn();
                break;

            case 7:
                this.state = 384;
                this.js_param();
                break;

            }
            this.state = 387; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << clojurejsParser.T__0) | (1 << clojurejsParser.T__1) | (1 << clojurejsParser.T__2) | (1 << clojurejsParser.T__4) | (1 << clojurejsParser.T__5) | (1 << clojurejsParser.T__6) | (1 << clojurejsParser.T__7) | (1 << clojurejsParser.T__8) | (1 << clojurejsParser.T__9) | (1 << clojurejsParser.T__10) | (1 << clojurejsParser.T__11) | (1 << clojurejsParser.T__12) | (1 << clojurejsParser.T__13) | (1 << clojurejsParser.T__14) | (1 << clojurejsParser.T__15) | (1 << clojurejsParser.T__19) | (1 << clojurejsParser.EQUALS) | (1 << clojurejsParser.DO) | (1 << clojurejsParser.AND) | (1 << clojurejsParser.OR) | (1 << clojurejsParser.ADD) | (1 << clojurejsParser.MINUS) | (1 << clojurejsParser.DIVIDE) | (1 << clojurejsParser.MULT) | (1 << clojurejsParser.PRN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (clojurejsParser.INSTANCEOF - 32)) | (1 << (clojurejsParser.KEYWORD - 32)) | (1 << (clojurejsParser.ID - 32)) | (1 << (clojurejsParser.INTEGER - 32)) | (1 << (clojurejsParser.STRING - 32)))) !== 0));
        this.state = 389;
        this.match(clojurejsParser.T__17);
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
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

ArrayContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

ArrayContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

ArrayContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

ArrayContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.ArrayContext = ArrayContext;

clojurejsParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, clojurejsParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391;
        this.match(clojurejsParser.T__2);
        this.state = 401;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << clojurejsParser.T__0) | (1 << clojurejsParser.T__1) | (1 << clojurejsParser.T__2) | (1 << clojurejsParser.T__4) | (1 << clojurejsParser.T__5) | (1 << clojurejsParser.T__6) | (1 << clojurejsParser.T__7) | (1 << clojurejsParser.T__8) | (1 << clojurejsParser.T__9) | (1 << clojurejsParser.T__10) | (1 << clojurejsParser.T__11) | (1 << clojurejsParser.T__12) | (1 << clojurejsParser.T__13) | (1 << clojurejsParser.T__14) | (1 << clojurejsParser.T__15) | (1 << clojurejsParser.T__19) | (1 << clojurejsParser.EQUALS) | (1 << clojurejsParser.DO) | (1 << clojurejsParser.AND) | (1 << clojurejsParser.OR) | (1 << clojurejsParser.ADD) | (1 << clojurejsParser.MINUS) | (1 << clojurejsParser.DIVIDE) | (1 << clojurejsParser.MULT) | (1 << clojurejsParser.PRN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (clojurejsParser.INSTANCEOF - 32)) | (1 << (clojurejsParser.KEYWORD - 32)) | (1 << (clojurejsParser.ID - 32)) | (1 << (clojurejsParser.INTEGER - 32)) | (1 << (clojurejsParser.STRING - 32)))) !== 0)) {
            this.state = 399;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
            switch(la_) {
            case 1:
                this.state = 392;
                this.fn();
                break;

            case 2:
                this.state = 393;
                this.form();
                break;

            case 3:
                this.state = 394;
                this.value();
                break;

            case 4:
                this.state = 395;
                this.array();
                break;

            case 5:
                this.state = 396;
                this.map();
                break;

            case 6:
                this.state = 397;
                this.js_fn();
                break;

            case 7:
                this.state = 398;
                this.js_param();
                break;

            }
            this.state = 403;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 404;
        this.match(clojurejsParser.T__3);
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
};

function MapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_map;
    return this;
}

MapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapContext.prototype.constructor = MapContext;

MapContext.prototype.KEYWORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(clojurejsParser.KEYWORD);
    } else {
        return this.getToken(clojurejsParser.KEYWORD, i);
    }
};


MapContext.prototype.fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FnContext);
    } else {
        return this.getTypedRuleContext(FnContext,i);
    }
};

MapContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

MapContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

MapContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

MapContext.prototype.map = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MapContext);
    } else {
        return this.getTypedRuleContext(MapContext,i);
    }
};

MapContext.prototype.js_fn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_fnContext);
    } else {
        return this.getTypedRuleContext(Js_fnContext,i);
    }
};

MapContext.prototype.js_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Js_paramContext);
    } else {
        return this.getTypedRuleContext(Js_paramContext,i);
    }
};

MapContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterMap(this);
	}
};

MapContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitMap(this);
	}
};

MapContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitMap(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.MapContext = MapContext;

clojurejsParser.prototype.map = function() {

    var localctx = new MapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, clojurejsParser.RULE_map);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(clojurejsParser.T__19);
        this.state = 419;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===clojurejsParser.KEYWORD) {
            this.state = 407;
            this.match(clojurejsParser.KEYWORD);
            this.state = 415;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
            switch(la_) {
            case 1:
                this.state = 408;
                this.fn();
                break;

            case 2:
                this.state = 409;
                this.form();
                break;

            case 3:
                this.state = 410;
                this.value();
                break;

            case 4:
                this.state = 411;
                this.array();
                break;

            case 5:
                this.state = 412;
                this.map();
                break;

            case 6:
                this.state = 413;
                this.js_fn();
                break;

            case 7:
                this.state = 414;
                this.js_param();
                break;

            }
            this.state = 421;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 422;
        this.match(clojurejsParser.T__20);
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
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clojurejsParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.INTEGER = function() {
    return this.getToken(clojurejsParser.INTEGER, 0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(clojurejsParser.STRING, 0);
};

ValueContext.prototype.ID = function() {
    return this.getToken(clojurejsParser.ID, 0);
};

ValueContext.prototype.KEYWORD = function() {
    return this.getToken(clojurejsParser.KEYWORD, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof clojurejsListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof clojurejsVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




clojurejsParser.ValueContext = ValueContext;

clojurejsParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, clojurejsParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (clojurejsParser.KEYWORD - 33)) | (1 << (clojurejsParser.ID - 33)) | (1 << (clojurejsParser.INTEGER - 33)) | (1 << (clojurejsParser.STRING - 33)))) !== 0))) {
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
};


exports.clojurejsParser = clojurejsParser;
