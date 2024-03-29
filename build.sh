# /bin/bash

# Cleanup
sh cleanup.sh

# Install dependencies
npm install

# Build
npx tsc

cp -r resources dist/
cp -r src/public dist/src/

echo "Build complete"