
// 构造函数封装方法
function Utils() {
}
//输出0到n的质数
Utils.prototype.Zhishu = function (n) {
    var Is = true
    for (var i = 2; i <= n; i++) {
        if(Math.sqrt(i)%1 != 0){
            for (var j = 2; j < Math.sqrt(i); j++) {
                if(i % j == 0 ){
                    Is = false
                    break
                }
            }
            if(Is){
                console.log(i);
            }else{
                Is = true
            }
        }  
    }
}
// 交换两个数据的值 返回一个数组
Utils.prototype.Swap = function(num,num2) {
    var temp = num
    num = num2
    num2 = temp
    return [num,num2]
}
// 生成n位验证码 参数一控制多少位 参数二控制敏感字母(验证码将不包含这些字母)
Utils.prototype.CreateRandom = function (num,str) {
    var code = ''
    // 生成0-9 A-Z a-z
    var codeResources = []
    for (let i = 0; i <= 9; i++) {
        codeResources.push(i)
    }
    for (let i = ('A'.charCodeAt()); i < ('Z'.charCodeAt()+1); i++) {
        codeResources.push(String.fromCharCode(i))
    }
    for (let i = ('a'.charCodeAt()); i < ('z'.charCodeAt()+1); i++) {
        codeResources.push(String.fromCharCode(i))
    }
    for (let i = 0; i < num; i++) {
        var value = codeResources[Math.floor(Math.random() * codeResources.length)] + ''
        if(str != undefined){
            while(str.indexOf(value) != -1){
                value = codeResources[Math.floor(Math.random() * codeResources.length)] + ''
            }
        }
        code += value
    }
    
    return code
}



// 字符串的forEach 
String.prototype.StringforEach = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i],i,this)
    }
}
//字符串加密 加密结果为unicode编码
String.prototype.StringKey = function () {
    var mima = ''
    for (let i = 0; i < this.length; i++) {
        if(this.charCodeAt(i)<10000){
            mima += (this.charCodeAt(i)/100000 + '').slice(2) + ' '
        }else{
            mima += this.charCodeAt(i) + ' '
        }
    }
    return mima
}
//数组去重
Array.prototype.DeleteRepeat = function () {
    var index
    var newarr = []
    for (let i = 0; i < this.length; i++) {
        index = newarr.indexOf(this[i])
        if(index == -1){
            newarr.push(this[i])
        }
    }
    return newarr
}
//数组插入排序 true为升序 false为降序 默认为升序
Array.prototype.InsertSort = function (bool) {
        bool = bool == undefined? true:bool
        var temp = 0
        if(bool == true){
            // console.log("插入排序升序 --> ");
            for (let i = 0; i < this.length; i++) {
                for (let j = i; j > 0; j--) {
                    if(this[j]<this[j-1]){
                        temp = this[j]
                        this[j] = this[j-1]
                        this[j-1] = temp
                    }else{
                        break
                    }
                }
            }
            return this
        }else{
            // console.log("插入排序降序 --> ");
            for (let i = 0; i < this.length; i++) {
                for (let j = i; j > 0; j--) {
                    if(this[j]>this[j-1]){
                        temp = this[j]
                        this[j] = this[j-1]
                        this[j-1] = temp
                    }else{
                        break
                    }
                }
            }
            return this
        }
}
//数组冒泡排序 true为升序 false为降序 默认为升序
Array.prototype.Sort = function (bool) {
    bool = bool == undefined? true:bool
    var temp = 0
    if(bool == true){
        // console.log("冒泡升序 --> ");
        for (let i = 0; i < this.length -1; i++) {
            for (let j = 0; j < this.length -1 - i; j++) {
                if(this[j]>this[j+1]){
                    temp = this[j]
                    this[j] = this[j+1]
                    this[j+1] = temp
                }
            }
        }
        return this
    }else{
        // console.log("冒泡降序 --> ");s
        for (let i = 0; i < this.length -1; i++) {
            for (let j = 0; j < this.length -1 - i; j++) {
                if(this[j]<this[j+1]){
                    temp = this[j]
                    this[j] = this[j+1]
                    this[j+1] = temp
                }
            }
        }
        return this
    }
}
//数组选择排序 true为升序 false为降序 默认为升序
Array.prototype.SelectSort = function (bool) {
    bool = bool == undefined? true:bool
    var temp
    if(bool){
        for (let i = 0; i < this.length; i++) {
            var minindex = i
            for (let j = i+1; j < this.length; j++) {
                if(this[minindex]>this[j]){
                    // 保存最小数的索引
                    minindex = j
                }
            }
            temp = this[i] 
            this[i] = this[minindex]
            this[minindex] = temp
        }
        return this
    }else{
        for (let i = 0; i < this.length; i++) {
            var maxindex = i
            for (let j = i+1; j < this.length; j++) {
                if(this[maxindex]<this[j]){
                    // 保存最大数的索引
                    maxindex = j
                }
            }
            temp = this[i] 
            this[i] = this[maxindex]
            this[maxindex] = temp
        }
        return this
    }
    
}
//数组去除空字符串 
Array.prototype.DeleteEmpty = function () {
    var index
    for (let i = 0; i < this.length; i++) {
        index = this.indexOf('')
        if(index!=-1){
            this.splice(index,1)
            i--
        }else{
            break
        }
    }
    return this
}
// 格式化时间 参数:以何种形式返回 返回一个字符串
Date.prototype.formatTime = function (type) {
    var year = this.getFullYear() + ''
    var mon = ((this.getMonth() + 1) + 100 + '').slice(1)
    var day = (this.getDate() + 100 + '').slice(1)
    var hour = (this.getHours() + 100 + '').slice(1)
    var min = (this.getMinutes() + 100 + '').slice(1)
    var seconds = (this.getSeconds() + 100 + '').slice(1)
    // console.log(year,mon,day,hour,min,seconds);
    type = type.replace('yyyy',year)
    type = type.replace('MM',mon)
    type = type.replace('dd',day)
    type = type.replace('hh',hour)
    type = type.replace('mm',min)
    type = type.replace('ss',seconds)
    return type
}
// 格式化时间(通用)
Date.prototype.formatTimeNB = function (formate) {
    var year = this.getFullYear() + ''
    var mon = ((this.getMonth() + 1) + 100 + '').slice(1)
    var day = (this.getDate() + 100 + '').slice(1)
    var hour = (this.getHours() + 100 + '').slice(1)
    var min = (this.getMinutes() + 100 + '').slice(1)
    var seconds = (this.getSeconds() + 100 + '').slice(1)
    var obj = {
        y:year,
        M:mon,
        d:day,
        h:hour,
        m:min,
        s:seconds,
    }
    console.log(obj);
    for(var key in obj){
        var reg = new RegExp('(' + key + '+)')
        console.log(reg);
        if(reg.exec(formate)){
            var content = reg.exec(formate)[0]
            console.log(content);
            formate = formate.replace(content,obj[key].substr(-content.length,content.length))
        }
    }
    // console.log(formate);
    return formate
}





// 移除或者添加样式名
Node.prototype.DeleteAndAddclass = function (classname) {
    if(this.getAttribute('class').indexOf(classname) > -1){
        this.classList.remove(classname)
    }else{
        this.classList.add(classname)
    }
}
// 获取节点的任意样式
Node.prototype.getEleStyle = function (stylename) {
    return getComputedStyle(this)[stylename]
}