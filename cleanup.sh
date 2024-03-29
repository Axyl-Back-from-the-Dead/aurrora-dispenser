# /bin/bash

# Cleanup build
npx tsc --build --clean

# Cleanup directories
rm -rf ./node_modules
rm -rf ./dist