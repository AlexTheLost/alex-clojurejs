// antlr4 -Dlanguage=JavaScript clojurejs.g4 -visitor
// cd ./proj/ClojureJs/Lang/
// nodemon parser.js --watch *.cljs --watch app/*.cljs
// node parser.js

// npm i antlr4
// npm i nodemon

// TODO:
// ! Compile time check code format
// many fn in let fn loop,...;
// allow enty body that return nil or null;
// block use null and include nil -> null;
// overloading func
// partial fn
// doseq, reduce
// generater name can't override program name in this context, res in loop can override res from context.
// count to .length
// Adding add, or
// Not iterate over undefine or null, simple return it value;

// Optimization:
// change loop to loop1, loop2, loopN. Depend on count of loops. Add this fns to STL.
// Object.create in fn 'createObject' because this fn can be minified.

var antlr4 = require('antlr4/index');

var clojurejsLexer = require('./clojurejsLexer').clojurejsLexer;
var clojurejsParser = require('./clojurejsParser').clojurejsParser;
var clojurejsListener = require('./clojurejsListener').clojurejsListener;
var clojurejsVisitor = require('./clojurejsVisitor').clojurejsVisitor;
var fs = require('fs');
var beautify = require('js-beautify').js;

// var input = "(do (+ 1 2))"
// var input = "(+ 1 2)"
/* var input = `
(do
  (prn 1 2)
  (prn (+ 1 1 1 1 1))
)
` */
// var input = "(do 1 2))"
// var input = "(defn- (+ 1 2))"
// var input = "(let [] (do (prn (+ 1 2)) (+ 1 2)))"
// var input = "(let [a 1 b 2] (+ 1 2))"
// var input = "(let [a 2 b a] (+ 1 2 b))"

/* var input = `
(def a 1)
(let [b 2]
  (prn (+a b)))
` */

// var input = `(if true 1 2)`

// var input = '([1 2 3 (do (prn 1) 100)])';

// var input = `(loop [a [1 2] b [3 4] c [5 6]] (+ a b c))`

// var input = '({1 1})'
// var input = `(loop [a [1 2] b {1 1} c [5 6]] (+ a b c))`
// var input = `(loop [a [1 2] b {1 1} c [5 6]] (prn a b c))`
// TODO Why?
// var input = `(loop [a [1 2] b [1] c [5 6]] (prn a b c) (+ a b c))`
// var input = `(loop [a [1 2] b [1] c [5 6]] (prn a b c))`
// var input = `(loop [a [1 2]] a)`
// var input = `(loop [a {1 2}] a)`
// var input = `(loop [a [1 2] b [3 4]] (+ a b ))`
// var input = `(loop [a [1 2] b [3 4]] (+ a b))`
// var input = `(loop [a [1 2]] (prn a) (+ a))`
// var input = `(def sum3 (fn [a b c] (+ a b c)))`
/* var input = `
(def sum3 (fn [a b c] (+ a b c)))
(sum3)
` */
/* var input = `
(def sum3 (fn [a b c] (+ a b c)))
(sum3 1 2 2)
` */

var new_line = '\n';
// var spaces = '   ';

// var new_line = '';
var spaces = '';


var ValueVisitor = function(parser) {
  clojurejsVisitor.call(this); // inherit default listener
  return this;
};


// continue inheriting default listener
ValueVisitor.prototype = Object.create(clojurejsVisitor.prototype);
ValueVisitor.prototype.constructor = ValueVisitor;


var getType = function(node) {
  var typeSymbolicNames = node.parentCtx.parser.symbolicNames;
  // console.log(node.parentCtx.parser.symbolicNames);

  var symbol = node.symbol;
  //   console.log('\n\n');
  //   console.log(node);
  //   console.log(symbol.text);
  var typeId = symbol.type;
  var type = typeSymbolicNames[typeId];
  return type;
}


var prepareKeyword = function(KEYWORD) {
  // console.log(KEYWORD.symbol.text);
  return "'" + KEYWORD.symbol.text.replace(/-/g, '_').replace(/:/g, '') + "'";
}


// Visit a parse tree produced by clojurejsParser#r.
ValueVisitor.prototype.visitR = function(ctx) {
  return ctx.children.map(child => {
    return this.visit(child) + ';' + new_line + new_line;
  })
};


ValueVisitor.prototype.visitJs_fn = function(ctx) {
  // console.log(2);
  // var children = ctx.children.slice(2, ctx.children.length - 1);

  var jsFn = ctx.children[2];
  var jsFnText = jsFn.symbol.text;
  // console.log(jsFnText);

  var others = ctx.children.slice(3, ctx.children.length - 1);
  var othersText = others.map(other => this.visit(other));
  // console.log(othersText);

  var result = othersText[0] + '.' + jsFnText + '(' + othersText.slice(1).join(', ') + ')';
  return result;
};


ValueVisitor.prototype.visitJs_param = function(ctx) {
  // console.log(3);
  var children = ctx.children.slice(2, ctx.children.length - 1);

  var jsParam = ctx.children[2];
  var jsParamText = jsParam.symbol.text;
  // console.log(jsParamText);

  var others = ctx.children.slice(3, ctx.children.length - 1);
  var othersText = others.map(other => this.visit(other));
  // console.log(othersText);

  var result = othersText[0] + '.' + jsParam;
  return result;
};


// Visit a parse tree produced by clojurejsParser#fn.
ValueVisitor.prototype.visitFn = function(ctx) {
  // console.log(1);
  var children = ctx.children;

  var node_fn = children[1];
  // console.log(node_fn.constructor.name);

  var fn_ctx = children[1];
  var args_ctx = children.slice(2, children.length - 1);
  var args = args_ctx.map(arg => this.visit(arg));

  var interfaceType = node_fn.constructor.name;
  var result = "";

  switch(interfaceType) {
    case('FormContext'):
      result = this.visitForm(fn_ctx, args);
      break;

    case('ValueContext'):
      var fn = this.visitValue(fn_ctx);
      result = fn + '(' + args + ')';
      break;

    default:
      result += this.visit(fn_ctx);
      break;
  }

  return result;

};


// Visit a parse tree produced by clojurejsParser#array.
clojurejsVisitor.prototype.visitArray = function(ctx) {
  var array = this.visit(ctx.children);
  var result = "[" + array.slice(1, array.length - 1).join(', ') + "]";

  //console.log(result);

  return result;
};


// Visit a parse tree produced by clojurejsParser#array.
clojurejsVisitor.prototype.visitMap = function(ctx) {
  var isKey = true;
  var result = '(function() {var new_obj = {';

  var initialData = ctx.children.slice(1, ctx.children.length - 1);
  initialData.map(kv => {
    // console.log(kv);
    if(isKey) {
      result += kv.symbol.text.replace(/-/g, '_').replace(/:/g, '') + ': ';
      isKey = false;
    } else {
      result += this.visit(kv) + ',';
      isKey = true;
    }
  });

  if (initialData.length < 0) {
    result = result.slice(0, result.length-1);
  }
  result += '} return new_obj;})()';

  return result;
};


ValueVisitor.prototype.visitValue = function(ctx) {
  var value = ctx.children[0];
  var type = getType(value);

  var sourceText = value.symbol.text;
  var targetText = "";

  switch(type) {
    case 'INTEGER':
      // targetText = parseInt(sourceText, 10);
      targetText = sourceText;
      break;
    case 'STRING':
      targetText = sourceText;
      break;
    case 'ID':
      targetText = sourceText.replace(/-/g, '_');
      // console.log('ID', sourceText, targetText);
      break;
    case 'KEYWORD':
      targetText = prepareKeyword(value);
      // console.log('KEYWORD', sourceText, targetText);
      break;
  }

  return targetText;
};



// Visit a parse tree produced by clojurejsParser#from.
ValueVisitor.prototype.visitForm = function(ctx, args) {
  var form = ctx.children[0];
  //   console.log(form)

  var interfaceType = form.constructor.name;

  switch(interfaceType) {
    case('Let_Context'):

      var binding = "";

      form.children.slice(2, form.children.length - 2).map(child => {
        var interfaceType = child.constructor.name;

        // console.log(interfaceType);

        switch(interfaceType) {
          case 'TerminalNodeImpl':
            var id = child.symbol.text.replace(/-/g, '_');
            // TODO need got to ValueContext:
            if (id !== '_') {
              binding += "var " + id + " = ";
            }
            break;
          default:
            binding += this.visit(child) + ";";
            break;
        }
      });

      var context = this.visit(form.children[form.children.length - 1]);
      // console.log('context:', this.visit(context));

      /*       var pref = '{ ' + binding + ' ' + context + ' }';
      return pref ; */

      var pref = '(function() { ' + binding + ' ';

      var context = this.visit(form.children[form.children.length - 1]);
      // console.log('context:', this.visit(context));

      return pref + 'return ' + context + ' })()' + new_line;;


    case('DefContext'):
      var def_ctx = ctx.children[0];
      var children = def_ctx.children

      var id = children[1].symbol;
      // console.log(id);
      var form_disclosure = "var " + id.text.replace(/-/g, '_') + " = ";

      var value = this.visit(children[2]);
      form_disclosure += value;

      // console.log('form_disclosure:', form_disclosure + 'END');

      return form_disclosure;


    case('If_Context'):
      var children = ctx.children[0].children;
      // console.log(children);

      var condition = this.visit(children[1]);
      // console.log(condition);
      var then = this.visit(children[2]);
      // console.log(then);

      // TODO can use STL fn for reduce count of symbols?
      if (children[3]) {
        var _else = this.visit(children[3]);
        // console.log(_else);
        form_disclosure = "(function() { if( " + condition + " ) { return " + then + new_line + "; } else { return " + _else + new_line + "; }})()";
      }
      else {
        form_disclosure = "(function() { if( " + condition + " ) {" + new_line + "return " + then + "; }})()";
      }

      return form_disclosure;


    case('Get_Context'):
      var children = ctx.children[0].children;
      // console.log(children);

      var coll = this.visit(children[1]);
      // console.log(coll);


      var index;

      if(children[2].symbol) {
        index = children[2].symbol.text;
      }
      else {
        index = this.visit(children[2]);
      }

      var not_found;

      if (children[3]) {
        not_found = this.visit(children[3]);
      }
      // console.log(not_found);

      if (not_found) {
        form_disclosure = "getOrDefault(" + coll + ", " + index + ", " + not_found + ")";
      }
      else {
        form_disclosure = coll + "[" + index + "]";;
      }

      return form_disclosure;


      /*     case('GetContext'):
      var children = ctx.children[0].children;
      // console.log(children);

      var map = this.visit(children[1]);
      // console.log(map);

      var KEYWORD = this.visit(children[2]);
      // console.log(KEYWORD);

      form_disclosure = map + "[" +  KEYWORD + "]";

      return form_disclosure; */


    case('In_Context'):
      var children = ctx.children[0].children;
      // console.log(children);

      var in_this = this.visit(children[1]);
      // console.log(map);

      var from_this = this.visit(children[2]);
      // console.log(KEYWORD);

      form_disclosure = in_this + " = " +  from_this;

      return form_disclosure;


    case('LessContext'):
      var children = ctx.children[0].children.slice(1);
      var result = [];
      for (var i = 1; i < children.length; i++) {
        result.push('(' + this.visit(children[i - 1]) + ' < ' + this.visit(children[i]) + ')');
      }
      // console.log('result:', result);

      if (result.length > 1) {
        form_disclosure = '(' + result.join(' && ') + ')';
      }
      else {
        form_disclosure = result[0];
      }
      // console.log('form_disclosure:', form_disclosure);

      return form_disclosure;

    case('GreateContext'):
      var children = ctx.children[0].children.slice(1);
      var result = [];
      for (var i = 1; i < children.length; i++) {
        result.push('(' + this.visit(children[i - 1]) + ' > ' + this.visit(children[i]) + ')');
      }
      // console.log('result:', result);

      if (result.length > 1) {
        form_disclosure = '(' + result.join(' && ') + ')';
      }
      else {
        form_disclosure = result[0];
      }
      // console.log('form_disclosure:', form_disclosure);

      return form_disclosure;

    case('LessOrEqContext'):
      var children = ctx.children[0].children.slice(1);
      var result = [];
      for (var i = 1; i < children.length; i++) {
        result.push('(' + this.visit(children[i - 1]) + ' <= ' + this.visit(children[i]) + ')');
      }
      // console.log('result:', result);

      if (result.length > 1) {
        form_disclosure = '(' + result.join(' && ') + ')';
      }
      else {
        form_disclosure = result[0];
      }
      // console.log('form_disclosure:', form_disclosure);

      return form_disclosure;

    case('GreateOrEqContext'):
      var children = ctx.children[0].children.slice(1);
      var result = [];
      for (var i = 1; i < children.length; i++) {
        result.push('(' + this.visit(children[i - 1]) + ' >= ' + this.visit(children[i]) + ')');
      }
      // console.log('result:', result);

      if (result.length > 1) {
        form_disclosure = '(' + result.join(' && ') + ')';
      }
      else {
        form_disclosure = result[0];
      }
      // console.log('form_disclosure:', form_disclosure);

      return form_disclosure;


    case('NotContext'):
      var statement = this.visit( ctx.children[0].children[1]);
      form_disclosure = '!' + statement;
      return form_disclosure;


    case('New_Context'):
      var children = ctx.children[0].children.slice(1);
      children = children.map(c => this.visit(c));
      var obj = children[0];
      var obj_args = children.slice(1);

      // var obj = this.visit(children[1]);
      // var obj_args = children.slice(2);

      /*       var obj_args_result = [];
      for (var i = 0; i < obj_args.length; i++) {
        result.push('(' + this.visit(children[i - 1]) + ' > ' + this.visit(children[i]) + ')');
      } */
      // console.log('result:', result);
      form_disclosure = 'new ' + obj + '( ' + obj_args.join(' ,') + ' )';
      // console.log('form_disclosure:', form_disclosure);

      return form_disclosure;


    case('LoopContext'):
      var result = "";
      var fn_arr = [];

      var binding = "";

      var iterate_by = [];
      // console.log(form.children.length);
      // console.log(form.children.slice(2, form.children.length - 3).length);

      form.children.slice(2, form.children.length - 2).map(child => {
        var interfaceType = child.constructor.name;

        // console.log(interfaceType);

        switch(interfaceType) {
          case 'TerminalNodeImpl':
            var symbol = child.symbol;
            var id = symbol.text;
            binding += "var seq_" + id + " = ";
            iterate_by.push(id);
            break;
          default:
            binding += this.visit(child) + ';';
            break;
        }
      });

      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
        }
        return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
      }

      var loop_result_name = 'loop_result' + guid();
      var result = '(function() { ' + new_line + spaces + binding + spaces + 'var ' + loop_result_name + ' = [];' + new_line;


      var iteration = "";

      for (var i = 0; i < iterate_by.length; i++) {
        var name = iterate_by[i];

        result += "if (!(seq_" + name + " instanceof Array)) { seq_" + name + " = Object.entries(seq_" + name + "); }";
        result += "for (var idx" + i + " = 0; idx" + i + " < seq_" + name + ".length; idx" + i + "++) {";
        result += "var " + name + " = seq_" + name + "[idx" + i + "];";

        /*
        result += "for (var seq_" + name + "_e = seq_" + name + ".entries(), i" + i + " = seq_" + name + "_e.next(); !i" + i + " .done; i" + i + " = seq_" + name + "_e.next()) {" + new_line;
        result += "var " + name + "; " + new_line;
        result += "if(seq_" + name + " instanceof Array) { " + new_line;
        result += name + " = i" + i + ".value[1];" + new_line;
        result += "}" + new_line;
        result += "else { " + new_line;
        result += name + " = i" + i + ".value;" + new_line;
        result += "}" + new_line;
        */
      }

      var context = this.visit(form.children[form.children.length - 1]);
      // console.log('context:', context);

      result += loop_result_name + '.push(' + context + ');';

      for (var i = 0; i < iterate_by.length; i++) {
        result += "}";
      }

      result += 'return ' + loop_result_name + ';})()';

      return result;


    case('Fn_Context'):
      var result = "";

      var iterate_by = [];
      var args = form.children[2];
      // console.log(this.visit(args));

      var rb_idx;
      for(rb_idx = 0; rb_idx<form.children.length; rb_idx++) {
        if (form.children[rb_idx].symbol.text == ']')
          break;
      }
      // console.log(rb_idx);

      var args = form.children.slice(2, rb_idx).map(arg => arg.symbol.text);
      // console.log(args);

      var contexts = form.children.slice(rb_idx + 1, form.children.length).map(context => this.visit(context));
      // console.log(contexts);

      var result = 'function(' + args.join(', ') + ') {';

      if(contexts.length > 1) {
        result += contexts.slice(0, contexts.length-1).join(';'+ new_line) + ';';
        result += 'return ' + contexts[contexts.length-1] + ';' +  new_line + '}';
      }
      else {
        result += 'return ' + contexts[contexts.length-1] + ';' +  new_line + '}';
      }

      return result;


    case('TerminalNodeImpl'):
      var type = getType(form)
      //   console.log(type)

      var form_disclosure = "";

      switch(type) {
        case 'EQUALS':
          var res = [];

          for (var i = 0; i < args.length; i++) {
            var el1 = args[i];
            for (var j = 0; j < args.length; j++) {
              // Not compare with itself:
              if (j <= i) continue;
              var el2 = args[j];
              res.push('(' + el1 + ' === ' + el2 + ')');
            }
          }

          var res_str = res.join(' && ');

          if (res.length > 1) {
            form_disclosure = "(" + res_str + ")";
          }
          else {
            form_disclosure = res_str;
          }

          break;

        case 'AND':
          form_disclosure = "(" + args.join(' && ') + ")";
          break;
        case 'OR':
          form_disclosure = "(" + args.join(' || ') + ")";
          break;
        case 'ADD':
          form_disclosure = "(" + args.join(' + ') + ")";
          break;
        case 'MINUS':
          form_disclosure = "(" + args.join(' - ') + ")";
          break;
        case 'DIVIDE':
          form_disclosure = "(" + args.join(' / ') + ")";
          break;
        case 'MULT':
          form_disclosure = "(" + args.join(' * ') + ")";
          break;
        case 'INSTANCEOF':
          form_disclosure = "(" + args.join(' instanceof ') + ")";
          break;
        case 'DO':
          var firsts_args = args.slice(0, args.length - 1);
          var returned_args = args[args.length - 1];

          if (firsts_args.length > 0) {
            form_disclosure = "(function() { " + firsts_args.join("; ") + "; return " + returned_args + new_line + " })()";
          }
          else {
            form_disclosure = "(function() { return " + returned_args + new_line + " })()";
          }

          /*            if (firsts_args.length > 0) {
            form_disclosure = "{ " + firsts_args.join(";" + new_line) + ";" + new_line + returned_args + " }";
          }
          else {
            form_disclosure = returned_args;
          } */
          break;
        case 'PRN':
          form_disclosure = "console.log(" + args.join(', ') + ")";
          break;
        default:
          console.log('!ERROR!', type);
      }

      return form_disclosure;
    default:
      console.log('!ERROR!', interfaceType);
  }
};


var lib = `// STL:

var range = function(start, end) {
var count = end - start;
var array = [];
for (var i = start; i < end; i++) {
array.push(i);
}
return array;
}
var getOrDefault = function(coll, idx, def) {
var element = coll[idx];
if (element) {
return element;
} else {
return def;
}
}

var generateUUID = function() {
function s4() {
return Math.floor((1 + Math.random()) * 0x10000)
.toString(16)
.substring(1);
}
return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
}

var empty = function(value) {
if (value) {
if (value instanceof String)
return value.length <= 0;
if (value instanceof Array)
return value.length <= 0;
return Object.keys(value).length <= 0;
}
return true;
}

// --------------------------------//
`


var parseCljsFile = function(path, lib) {
  var file = fs.readFileSync(path, 'utf8');

  var input = new antlr4.InputStream(file);
  var lexer = new clojurejsLexer(input);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new clojurejsParser(tokens);

  var tree = parser.r();
  var visitor = new ValueVisitor(tree);
  var result = visitor.visit(tree);

  var text_out = result.join('');
  text_out = lib + '\n\n\n' + text_out;
  text_out = beautify(text_out, { indent_size: 2, space_in_empty_paren: true });

  return text_out;
}


var writeResult = function(name, result) {
  fs.writeFile("./result/" + name + ".js", result, err => {
    if(err) return console.log(err);
  });

  fs.writeFile("/home/alex/proj/common-generator/resources/js/" + name + ".js", result, err => {
    if(err) return console.log(err);
  });
}

var lib_out = parseCljsFile('./app/sl.cljs', lib);
writeResult('sl', lib_out);


var in_out = parseCljsFile('./in.cljs', '');
writeResult('in', in_out);


var tsearch_out = parseCljsFile('./app/tsearch.cljs', '');
writeResult('tsearch', tsearch_out);


var search_location_out = parseCljsFile('./app/search_location.cljs', '');
writeResult('search_location', search_location_out);


var location_input_out = parseCljsFile('./app/location_input.cljs', '');
writeResult('location_input', location_input_out);


