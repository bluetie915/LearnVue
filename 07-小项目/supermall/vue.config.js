module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
}

// const path = require("path")
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   chainWebpack: config => {
//     //修改文件引入自定义路径
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("assets", resolve("src/assets"))
//       .set("components", resolve("src/components"))
//       .set("common", resolve("src/common"))
//       .set("network", resolve("src/network"))
//       .set("views", resolve("src/views"))
//   }
// }
