import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: 'build/transpiled/index.js',
    output: {
      file: 'build/index.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [typescript()]
  },
  {
    input: 'build/transpiled/index.d.ts',
    output: {
      file: 'build/index.d.ts',
      format: 'es'
    },
    plugins: [dts.default()]
  }
];
export default config;
