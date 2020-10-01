#!/bin/bash
cd ..
git clone https://github.com/palpriyanshu/library-backend.git 2> /dev/null
cd library-backend
echo "installing"
npm install 2> /dev/null
npm run test

rm -rf ./public
mkdir ./public

cd ../Library-react
pwd
npm run test

echo "building"
npm run build 2> /dev/null
pwd

cp -r ./build/* ../library-backend/public
