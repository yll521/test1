module.exports = {
	devtool:'eval-source-map',
    entry:__dirname + '/app/main.js',//	文件入口
    output:{
    	path:__dirname + '/public',//打包输出文件夹目录
    	filename:'bundle.js'//打包后输出的文件名
    },

    devServer:{
    	contentBase:"./public",
    	historyApiFallback:true,
    	inline:true,//实时刷新
    	port:8585
    },/*
    module:{
    	rules:[
    	    {
    	    	test:/(\.jsx|\.js)$/,
    	    	use:{
    	    		loader:"babel-loader",
    	    		options:[
    	    		    "env","react"
    	    		]
    	    	},
    	    	exclude:/node_modules/
    	    }
    	]
    }*/
};
//__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录