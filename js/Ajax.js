var ajax = {
    // 将对象处理为查询字符串
    queryString:function (param) {
        var str = ''
        for(var key in param){
            str += key + '=' + param[key] + '&'
        }
        // console.log(str.slice(0,-1));
        return str.slice(0,-1)
    },

    // 请求处理函数
    request:function (options) {
        // options 有四个参数 method,url,param,success
        options.method = options.method || 'get'
        var xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200){
                //如果设置xhr.responseType = 'json', 则不能使用this.responseText获取数据, 应使用this.response
                options.success(this.response)
            }
        }
        // 处理参数
        var paramStr 
        if(options.param){
            paramStr = this.queryString(options.param)
            if(options.method === 'get'){
                options.url += '?' + paramStr
            }
        }
        
        xhr.open(options.method,options.url,true)

        if(options.method === 'post'){
            //设置请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        }

        // 发送请求之前设置响应数据 默认是text 设置为json
        xhr.responseType = 'json'

        // 发送请求
        console.log(options.method);
        if (options.method === 'get') {
            xhr.send();
        } else {
            // post请求的发送方式
            xhr.send(paramStr ? paramStr : null);
        }
    },

    // jsonp请求方式解决跨域
    jsonp:function (options) {
        // options 有四个参数 url,callbackName(和后台约定好的回调函数名字),param,success

        // 创建script节点
        var script1 = document.createElement('script')

        // 挂载全局函数 用于处理请求回来响应数据
        window.callback = options.success

        var paramStr
        if(options.param){
            paramStr = this.queryString(options.param)
        }
        var fnName = 'fn' + new Date().getTime();
        window[fnName] = options.success;
        // window.callback = options.success

        options.url += '?' + paramStr + '&' + options.callbackName + '=' + fnName
        script1.src =  options.url

        // 把script标签放到body里面
        document.body.appendChild(script1)
        // 删除script标签
        setTimeout(() => {
            script1.remove()
            // 释放挂载的全局函数
            window.callback = null
        }, 4);
    }
}