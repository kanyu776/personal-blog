(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{562:function(t,a,s){"use strict";s.r(a);var e=s(34),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"koa2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa2"}},[t._v("#")]),t._v(" koa2")]),t._v(" "),s("h2",{attrs:{id:"请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[t._v("#")]),t._v(" 请求")]),t._v(" "),s("h3",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询对象")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("querystring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询字符串")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询对象")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("querystring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询字符串")]),t._v("\n")])])]),s("h3",{attrs:{id:"post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[t._v("#")]),t._v(" post")]),t._v(" "),s("ul",[s("li",[t._v("查询对象无法直接通过 ctx 获得，需要对 ctx.req 进行解析，监听 data 和 end 事件进行查询字符串的拼装")])]),t._v(" "),s("h3",{attrs:{id:"koa-bodyparser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-bodyparser"}},[t._v("#")]),t._v(" koa-bodyparser")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询对象")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bodyParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用bodyParser")]),t._v("\n")])])]),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("h3",{attrs:{id:"原生路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生路由"}},[t._v("#")]),t._v(" 原生路由")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过解析 url，获取静态文件路径")])]),t._v(" "),s("li",[s("p",[t._v('通过 fs.readFile(文件路径，"binary"，callback)获得解析的页面结构')])]),t._v(" "),s("li",[s("p",[t._v("赋值 ctx.body")])])]),t._v(" "),s("h3",{attrs:{id:"koa-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-router"}},[t._v("#")]),t._v(" koa-router")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"顶层路径"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明路由")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听访问")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("父级路径，router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedMethods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 装载子路由")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册应用路由")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedMethods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 限制请求类型")]),t._v("\n")])])]),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),s("h3",{attrs:{id:"设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("键"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v('值"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \t\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所在域名")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       \t\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所在路径")]),t._v("\n    maxAge"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有效时长")]),t._v("\n    expires"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-12-31'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过期时间")]),t._v("\n    httpOnly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \t\t\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否只用于http请求中获取")]),t._v("\n    overwrite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("  \t\t\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否允许重写")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取"}},[t._v("#")]),t._v(" 获取")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"键"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"视图模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图模版"}},[t._v("#")]),t._v(" 视图模版")]),t._v(" "),s("h3",{attrs:{id:"koa-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-views"}},[t._v("#")]),t._v(" koa-views")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" views "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"koa-views"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("views")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./view"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" extension"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ejs"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[t._v("#")]),t._v(" 静态资源")]),t._v(" "),s("h3",{attrs:{id:"koa-static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-static"}},[t._v("#")]),t._v(" koa-static")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"koa-static"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 资源路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),s("h3",{attrs:{id:"设置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-2"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听端口号")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回适用于http.createServer()回调函数来处理请求")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 载入中间件")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置签名的Cookie密钥 // ctx的原型")]),t._v("\n")])])]),s("h3",{attrs:{id:"错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),s("ul",[s("li",[t._v("执行自定义错误处理逻辑，可以添加一个 error 事件侦听器")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性/方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.req")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Node 的 request 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.res")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Node 的 response 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.request")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("koa 的 request 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.response")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("koa 的 response 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.state")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("推荐的命名空间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.app")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("应用程序实例引用")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.cookies.get()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取 cookie")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.cookies.set()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置 cookie")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.throw()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("抛出错误")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.assert()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("断言测试函数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ctx.respond")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否让 koa 处理 response 对象")])])])]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性/方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.header")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求标头对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.headers")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求标头对象（header 别名）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.method")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求方法类型")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.length")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求的 Content-Length")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.url")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求的 url")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.originalUrl")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求的源 url")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.origin")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取 URL 的来源（包括 protocol 和 host）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.href")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取完整的请求 URL（包括 protocol，host 和 url）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.path")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取请求路径名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.querystring")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据?获取原始查询字符串")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.search")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("使用?获取原始查询字符串")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.host")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取当前主机")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.hostname")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存在时获取主机名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.URL")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取 WHATWG 解析的 URL 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('获取请求 Content-Type 不含参数"charset"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.charse")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在存在时获取请求字符集")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.query")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取解析的查询字符串对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.fresh")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查请求缓存是否“新鲜”，也就是内容没有改变")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.stale")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("与 request.fresh 相反")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.protocol")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回请求协议")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.secure")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('通过 ctx.protocol=="https"来检查请求是否通过 TLS 发出')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.ip")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求远程地址")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.ips")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当 X-Forwarded-For 存在并且 app.proxy 被启用时，这些 ips 的数组被返回")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.subdomains")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将子域返回为数组")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.is(types...)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查传入请求是否包含 Content-Type 头字段")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.accepts(types...)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查给定的 types 是否可以接受")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.acceptsEncodings(encodings)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查 encodings 是否可以接受")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.acceptsCharsets(charsets)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查 charsets 是否可以接受")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.acceptsLanguages(langs)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查 langs 是否可以接受")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.idempotent")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查请求是否是幂等的")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.socket")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回请求套接字")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("request.get(field)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回请求标头")])])])]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性/方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.header")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("响应标头对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.headers")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("响应标头对象（header 别名）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.socket")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求套接字")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.status")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取响应状态")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.message")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("获取响应的状态消息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.length")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("响应的 Content-Length")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.body")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("响应主体")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.get(field)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不区分大小写获取响应标头字段值 field")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.set(field, value)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置响应标头 field 到 value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.append(field, value)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用值 val 附加额外的标头 field")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.set(fields)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用一个对象设置多个响应标头 fields")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.remove(field)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("删除标头 field")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('获取响应 Content-Type 不含参数"charset"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.is(types...)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("非常类似 ctx.request.is()检查响应类型是否是所提供的类型之一")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.redirect(url, [alt])")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("执行重定向")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.attachment([filename])")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将 Content-Disposition 设置为附件以指示客户端提示下载")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.headerSent")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查是否已经发送了一个响应头")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.lastModified")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将 Last-Modified 标头返回为 Date, 如果存在")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.etag")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置包含包裹的 ETag 响应")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.vary(field)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 field 上变化")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("response.flushHeaders()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("刷新任何设置的标头，并开始主体")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);