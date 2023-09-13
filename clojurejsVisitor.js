// Generated from clojurejs.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by clojurejsParser.

function clojurejsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

clojurejsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
clojurejsVisitor.prototype.constructor = clojurejsVisitor;

// Visit a parse tree produced by clojurejsParser#r.
clojurejsVisitor.prototype.visitR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#form.
clojurejsVisitor.prototype.visitForm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#new_.
clojurejsVisitor.prototype.visitNew_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#fn_.
clojurejsVisitor.prototype.visitFn_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#let_.
clojurejsVisitor.prototype.visitLet_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#loop.
clojurejsVisitor.prototype.visitLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#def.
clojurejsVisitor.prototype.visitDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#if_.
clojurejsVisitor.prototype.visitIf_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#in_.
clojurejsVisitor.prototype.visitIn_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#get_.
clojurejsVisitor.prototype.visitGet_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#less.
clojurejsVisitor.prototype.visitLess = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#lessOrEq.
clojurejsVisitor.prototype.visitLessOrEq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#greate.
clojurejsVisitor.prototype.visitGreate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#greateOrEq.
clojurejsVisitor.prototype.visitGreateOrEq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#not.
clojurejsVisitor.prototype.visitNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#js_fn.
clojurejsVisitor.prototype.visitJs_fn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#js_param.
clojurejsVisitor.prototype.visitJs_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#fn.
clojurejsVisitor.prototype.visitFn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#array.
clojurejsVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#map.
clojurejsVisitor.prototype.visitMap = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by clojurejsParser#value.
clojurejsVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.clojurejsVisitor = clojurejsVisitor;