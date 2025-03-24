const esbuild = require('esbuild');
const path = require('path');

// CommonJS Bundle
esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: './dist/cjs/index.js', // Output the CJS bundle
    bundle: true,
    platform: 'node',
    format: 'cjs',
    sourcemap: true,
    external: ['typescript'], // Exclude TypeScript (it'll be used for declarations)
    target: 'node14', // Set target version if needed
  })
  .catch(() => process.exit(1));
