#!/bin/bash

# antlr4
# export CLASSPATH=".:/home/alex/antlr/antlr-4.7.1-complete.jar:$CLASSPATH"
# alias antlr4='java -Xmx500M -cp "/home/alex/antlr/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
# alias grun='java org.antlr.v4.gui.TestRig'

java -Xmx500M -cp "/home/alex/antlr/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool clojurejs.g4
javac clojurejs*.java
echo 'grun:'
# grun clojurejs r -tree
java org.antlr.v4.gui.TestRig clojurejs r -tree
