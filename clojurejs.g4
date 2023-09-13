grammar clojurejs;

r : ( js_fn | js_param | fn )* ;


form : EQUALS | DO | AND | OR | ADD | MINUS | DIVIDE | MULT | PRN | INSTANCEOF
       | new_ | fn_ | let_ | loop | def | if_ | in_ |  get_ | less | greate | lessOrEq | greateOrEq | not;

new_ : 'new' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param )* ;
fn_ : 'fn' '[' ID* ']' ( fn | form | value | array | map | js_fn | js_param )+ ;
let_ : 'let' '[' ((ID | UNDER) ( fn | form | value | array | map | js_fn | js_param ))*  ']' ( fn | form | value | array | map | js_fn | js_param );
loop : 'loop' '[' (ID ( fn | form | value | array | map | js_fn | js_param ))*  ']' ( fn | form | value | array | map | js_fn | js_param );
def : 'def' ID ( fn | form | value | array | map | js_fn | js_param ) ;
if_ : 'if' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param )?;
in_ : 'in' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param ) ;
get_ : 'get' ( fn | form | value | array | map | js_fn | js_param ) ( fn | js_fn | js_param | form | value ) ( fn | form | value | array | map | js_fn | js_param )? ;
less : '<' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param )+ ;
lessOrEq : '<=' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param )+ ;
greate : '>' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param )+ ;
greateOrEq : '>=' ( fn | form | value | array | map | js_fn | js_param ) ( fn | form | value | array | map | js_fn | js_param )+ ;
not : 'not' ( fn | form | value | js_fn | js_param ) ;

js_fn : '(' '.' ID ( fn | form | value | array | map | js_fn | js_param )+ ')';
js_param : '(' '.-' ID ( fn | form | value | array | map | js_fn | js_param ) ')';
fn : '(' ( fn | form | value | array | map | js_fn | js_param )+ ')';

EQUALS : '=' ;
UNDER : '_' ;
DO : 'do' ;
AND : 'and' ;
OR : 'or' ;
ADD : '+' ;
MINUS : '-' ;
DIVIDE : '/' ;
MULT : '*';
PRN : 'prn';
INSTANCEOF : 'instanceof' ;

array : '[' ( fn | form | value | array | map | js_fn | js_param )* ']' ;
map : '{' (KEYWORD ( fn | form | value | array | map | js_fn | js_param ))* '}' ;

value  : INTEGER | STRING | ID | KEYWORD;

KEYWORD : ':' ID;
ID : [a-zA-Z][a-zA-Z<>\-_!?0-9=*#%~`]*;
INTEGER : '-'? [0-9]+ ('.' [0-9]+)?;
STRING : '"' ( '\\"' | . )*? '"' ;

COMMENT : ';' .*? '\n' -> skip ;
WS : [ \n]+ -> skip ;

//r : statement;
//
//
//statement : value | identify
//          | '(' statement+ ')'
//          ;
//// grun clojurejs prog
//
//array : '[' value | identify * ']' ;
//map : '{' (value | identify  value | identify )* '}' ;
//set : '#{' value | identify * '}' ;
//
//
//value | identify  : ID | KEYWORD | ACCESS | INTEGER | STRING | array | map | set | from;
//
//from : DO ;
//
//DO : 'do' ;
//
//ADD : '+' ;
//
//DEREF : '@' ;
//
//ID : ([a-zA-Z<>\-_&$!?=*#%~`][a-zA-Z<>\-_&$!?0-9=*#%~`]*)+;
//
//KEYWORD : ':' [a-zA-Z<>\-_&$!?0-9=*#%~`]+ ;
//
//ACCESS : [/.]? ID ([/.]? ID)* [/.]? ;
//
//INTEGER : [0-9]+ ;
//
//REGEX : '#' STRING;
//
//STRING : '"' ( '\\"' | . )*? '"' ;
//
//
//COMMENT : ';' .*? '\n' -> skip ;
//
//WS : [ \n]+ -> skip ;

