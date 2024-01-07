const path = require('path');

module.exports = [
    {
        mode: 'development',
        entry: [
            './_build/default/src/app/src/app.js',
            './_build/default/src/ML2Typescript/app/src/ML2Typescript/Main.js'
          ],
        output: {
            filename: '[name].js',
            path: __dirname + '/dist',
        },

        resolve: {
            alias: {
              app: path.resolve(__dirname, './_build/default/src/app/src/'),
              main: path.resolve(__dirname, './_build/default/src/ML2Typescript/app/src/ML2Typescript/')
            },
          },
    }
];