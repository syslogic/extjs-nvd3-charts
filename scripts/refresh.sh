#!/bin/sh
alias sencha='/home/sencha/Cmd/sencha'

cd ..
sencha app refresh

cd packages/local/nvd3-charts
sencha package build

