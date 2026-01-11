# install dependencies
pnpm i


# link all the packages
cd ./packages

cd ./server
npm link
cd ../

cd ./web
npm link
cd ../

# run compilation
cd ../
./node_modules/typescript/bin/tsc -b
