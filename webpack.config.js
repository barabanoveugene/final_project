const path = require ( 'path' )
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
   entry: { main: './src/index.js' },
   output: {
      path: path.resolve ( __dirname, 'dist' ),
      filename: 'main.js'
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [
               // process.env.NODE_ENV !== "production"
               //    ? "style-loader"
               //    : MiniCssExtractPlugin.loader,
               // "css-loader",
               // "sass-loader"
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ],
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'style.css',
      }),
   ]
}



 

// module: {
//       rules: [{
//          test:/\.(s*)css$/,
//          use: [
//             miniCss.loader,
//             'css-loader',
//             'sass-loader',
//          ]
//       }]
//    },
//    plugins: [
//       new miniCss({
//          filename: 'style.css',
//       }),
//    ]
