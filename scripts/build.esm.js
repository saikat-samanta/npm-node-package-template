const esbuild = require('esbuild');
const path = require('path');

// ESM Bundle
esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: './dist/esm/index.js', // Output the ESM bundle
    bundle: true,
    platform: 'node',
    format: 'esm',
    sourcemap: true,
    external: ['typescript'], // Exclude TypeScript
    target: 'node14', // Set target version if needed
  })
  .catch(() => process.exit(1));
