const path = require("path");

module.exports = {
  mode: "production", // Set to "production" for library distribution
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    libraryTarget: "umd", // Set to "umd" for library distribution
    library: "react-c-du-beta",
    umdNamedDefine: true,
    globalObject: "this",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react", //prevent two react apps
  },
};
