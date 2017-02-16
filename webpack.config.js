module.exports = {
    // devtool:"eval-source-map",//配置生成source maps
    entry:__dirname+"/app/main.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./public",//本地服务器加载的目录
        port:"9000",
        inline:true,//实时刷新
        // historyApiFallback:true //不跳转在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },
    module:{
        loaders:[
            {
                test:/\.json$/, //正则匹配.json
                loader:"json-loader"  //json-loader
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader?modules"//感叹号的作用在于使同一文件能够使用不同类型的loader
            }
        ]
    }
}
