// Snowpack Configuration File 
 // See all supported options: https://www.snowpack.dev/reference/configuration 
//@type {import("snowpack").SnowpackUserConfig } 
module.exports = { 
   mount: { 
      public: { url: "/", static: true }, 
      src: { url: "/dist" }, 
   }, 
   plugins: ["@prefresh/snowpack"], 
   optimize: { 
      minify: true, 
   }, 
   packageOptions: { 
      /* ... */ 
   }, 
   devOptions: { 
   /* ... */ 
   }, 
   buildOptions: { 
   /* ... */ 
   }, 
   alias: { 
      react: "preact/compat", 
      "react-dom": "preact/compat", 
   }, 
};