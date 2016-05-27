module.exports =
{ entry: 'src/index.js'
, output: 'static/bundle.js'
, resolve:
  { root: __dirname
  }
, module:
  { loaders:
    [ { test: /\.jsx?$/
      , exclude: /node_modules/
      , loader: 'babel-loader'
      , query:
        { presets: ['es2015', 'react']
        }
      }
    ]
  }
}
