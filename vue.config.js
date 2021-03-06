const path = require('path')
const glob = require('glob')

let version;

function createPagesConfig () {//生成多入口 pages 字段
    const result = glob.sync('./src/pages/v100/**/*.html').reduce((acc, item) => {
        const name = path.basename(item, path.extname(item));
        const prefix = item.split('/').slice(0, 5).join('/');
        version = item.split('/')[3];

        acc[name] = {
            entry: `${prefix}/${name}.js`,
            template: `${prefix}/${name}.html`,
            filename: `${name}.html`,
            title: `${name}`,
            chunks: ['chunk-vendors', 'chunk-common', name]
        };
        return acc;
    }, {});

    return result;
}

const config = {
    lintOnSave: false,
    pages: createPagesConfig(),
    publicPath: `/win/${version}`,
    outputDir: path.join(__dirname, './views/win/' + version),
    devServer: {
        proxy: 'http://localhost:3000'
    }
}

console.log(config, 'hhh')

module.exports = config
