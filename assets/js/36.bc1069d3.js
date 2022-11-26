(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{553:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"本地微信公众号页面开发调试配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地微信公众号页面开发调试配置"}},[t._v("#")]),t._v(" 本地微信公众号页面开发调试配置")]),t._v(" "),a("h2",{attrs:{id:"第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),a("p",[t._v("欺骗微信开发者工具，让对应域名解析到本地主机 ip 上")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("打开"),a("code",[t._v("c:\\windows\\system32\\drivers\\etc")]),t._v("，找到 host 文件")])]),t._v(" "),a("li",[a("p",[t._v("打开 host 文件，底部添加"),a("code",[t._v("127.0.0.1 对应域名")])])])]),t._v(" "),a("h2",{attrs:{id:"第二步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("用到微信 jsApi 时，微信开发者工具不认带端口的地址，所以需要通过 nginx，将对应域名反向代理到本地主机 ip 地址全称（127.0.0.1:开发端口）")])]),t._v(" "),a("li",[a("p",[t._v("下载 nginx，修改 "),a("code",[t._v("nginx.conf")]),t._v("，在 "),a("code",[t._v("http {}")]),t._v("内添加如下代码")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定端口（nginx默认监听的端口，不用管）")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改位置——被代理的对应域名")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" bag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kdk56"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改位置——代理到的开发地址")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v("   off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("  Host       "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("  X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("  X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_next_upstream")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timeout")]),t._v(" invalid_header http_500 http_502 http_503 http_504"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_max_temp_file_size")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_connect_timeout")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_send_timeout")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_read_timeout")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffer_size")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffers")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_busy_buffers_size")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_temp_file_write_size")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"第三步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[t._v("#")]),t._v(" 第三步")]),t._v(" "),a("ul",[a("li",[t._v("开启 nginx 服务，微信开发者工具地址上，输入被代理的对应域名即可")])])])}),[],!1,null,null,null);s.default=e.exports}}]);