module.exports = {
    module: {
      rules: [
        // {
        //   test: /\.s[ac]ss$/i,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     'sass-loader',
        //   ],
        // },
        {
          test: /\.(scss)$/,
          test2: /\.(png|jpe?g|gif)$/i,
          use: [{
            loader: 'style-loader', // inject CSS to page
          }, 
          {
            loader: 'file-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, { 
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
      ],
    },
  };
