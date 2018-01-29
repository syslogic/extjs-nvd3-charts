#!/bin/sh
alias sencha='/home/sencha/Cmd/sencha'

[ -e ../application.debug.js ] && rm ../application.debug.js
sencha --plain -ti compile -ignore ../application.js,../application.debug.js -debug=false concatenate -yui -out=../application.js

