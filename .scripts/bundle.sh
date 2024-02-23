#!/bin/bash

rm -rf ./dist

mkdir ./dist

# sub-vue子应用
cp -r ./sub-vue-cli-vue2/dist/ ./dist/sub-vue-cli-vue2/

# sub-vue子应用
cp -r ./sub-vue-cli-vue3/dist/ ./dist/sub-vue-cli-vue3/

# main基座
cp -r ./main/dist/* ./dist/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.👌'
