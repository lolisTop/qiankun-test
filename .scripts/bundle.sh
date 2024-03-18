#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/sub-project1
mkdir ./dist/sub-project2
mkdir ./dist/main

# sub-vue子应用
cp -r ./apps/project1-vue3-ts/dist/* ./dist/sub-project1

# sub-vue子应用
cp -r ./apps/project2-vue3-ts/dist/* ./dist/sub-project2

# main基座
cp -r ./apps/main/dist/* ./dist/main

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.👌'
