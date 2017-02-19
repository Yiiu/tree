const buble = require('rollup-plugin-buble')
export default {
    entry: 'src/index.js',
    dest: 'dist/js/main.js',
    format: 'umd',
    sourceMap: 'inline',
    moduleName: 'tree',
    plugins: [
        buble({
            objectAssign: 'Object.assign'
        })
    ],
    banner: 
`/**
 * tree
 * (c) ${new Date().getFullYear()} Yiiu
 * @license MIT
 */`
}