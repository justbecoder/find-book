import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/index.cjs.js",
    },
    {
      format: "esm",
      file: "dist/index.esm.js",
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: [["@babel/preset-env"]],
    }),
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    commonjs(),
  ],
  external: ["@yoda/bridge", "@yoda/bridge-types", "js-cookie", "@types/js-cookie"],
};
