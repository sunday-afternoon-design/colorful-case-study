// export default {
//     // config options
//     base: '/colorful-case-study-desktop/'
// }


const path = require('path')

export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    base: '/colorful-case-study/',
    server: {
        port: 8080
    }
}