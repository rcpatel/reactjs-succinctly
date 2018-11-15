const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Webpack will bundle all of our JavaScript files into index_bundle.js file inside the /dist directory
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  /*
  babel-loader is used to load our JSX/JavaScript files and 
  css-loader is used to load and bundle all of the CSS files into one file and 
  style-loader will add all of the styles inside the style tag of the document.
  --> We have to install all 3 loaders using npm install and webpack executes the loaders from last to first 
  i.e from right to left.
  */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  /*
the value of template key is the file index.html that we created earlier and it uses this file as a template 
and generates new file named index.html inside the /dist folder with the script injected.
  */
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]

};