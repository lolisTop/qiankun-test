#!/bin/bash

rm -rf ./dist

mkdir ./dist

# sub-vue子应用
cp -r ./sub-project1/dist/ ./dist/sub-project1/

# sub-vue子应用
cp -r ./sub-project2/dist/ ./dist/sub-project2/

# main基座
cp -r ./main/dist/* ./dist/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.👌'
