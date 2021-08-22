const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, "../src"),
        path.resolve(__dirname, "../.storybook"),
      ],
      use: [
        require.resolve("cache-loader"),
        {
          loader: require.resolve("ts-loader"),
          options: {
            reportFiles: ["../src"],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
        {
          loader: require.resolve("@storybook/source-loader"),
          options: { parser: "typescript" },
        },
      ],
    },
    /*     {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource'
        } */
  );
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};