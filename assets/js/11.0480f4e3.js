(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{495:function(r,t,a){"use strict";a.r(t);var e=a(41),_=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"游览器的进程和线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器的进程和线程"}},[r._v("#")]),r._v(" 游览器的进程和线程")]),r._v(" "),a("h2",{attrs:{id:"游览器的构成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器的构成"}},[r._v("#")]),r._v(" 游览器的构成")]),r._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/1.png",alt:""}})]),r._v(" "),a("h2",{attrs:{id:"游览器的渲染内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器的渲染内核"}},[r._v("#")]),r._v(" 游览器的渲染内核")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("渲染内核也称渲染引擎，主要有 3 种：")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("Trident 内核： IE")])]),r._v(" "),a("li",[a("p",[r._v("Webkit 内核：Chrome,Safari")])]),r._v(" "),a("li",[a("p",[r._v("Gecko 内核：FireFox")])])])])]),r._v(" "),a("h2",{attrs:{id:"进程和线程的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程的区别"}},[r._v("#")]),r._v(" 进程和线程的区别")]),r._v(" "),a("h3",{attrs:{id:"cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[r._v("#")]),r._v(" CPU")]),r._v(" "),a("p",[r._v("计算机的核心，其负责承担计算机的计算任务（可以比喻为一个工厂）。")]),r._v(" "),a("h3",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[r._v("#")]),r._v(" 进程")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("CPU 资源分配的最小单位，是能拥有资源和独立运行的最小单位。")])]),r._v(" "),a("li",[a("p",[r._v("任一时刻，CPU 总是运行一个进程，其他进程处于非运行状态。")])]),r._v(" "),a("li",[a("p",[r._v("（可以比喻为工厂车间，是一个工厂任务的环节）")])])]),r._v(" "),a("h3",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[r._v("#")]),r._v(" 线程")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("CPU 调度的最小单位，是建立在进程基础上的一次程序运行单位，属于单个的程序执行流，是一个进程中代码的不同执行路线。")])]),r._v(" "),a("li",[a("p",[r._v("（可以比喻为一个车间的工人组成的一个个任务小组，不同的执行流，协同完成一个任务）")])])]),r._v(" "),a("h3",{attrs:{id:"总述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总述"}},[r._v("#")]),r._v(" 总述")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("一个进程中可以拥有多个线程，同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）及一些进程级的资源。")])]),r._v(" "),a("li",[a("p",[r._v("虽然不同进程之间也可以通信，不过代价较大。（可以在电脑的任务管理器中查看进程）")])])]),r._v(" "),a("h2",{attrs:{id:"浏览器是多进程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程的"}},[r._v("#")]),r._v(" 浏览器是多进程的")]),r._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),a("ol",[a("li",[a("p",[r._v("浏览器之所以能够运行，是因为系统给它的进程分配了资源（cpu 和内存）。")])]),r._v(" "),a("li",[a("p",[r._v("每打开一个 Tab 页，就创建了一个独立的浏览器进程，每个进程相互独立。（可以在 Chrome 的任务管理器上验证 tab 页进程）")])])]),r._v(" "),a("h3",{attrs:{id:"多进程的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程的好处"}},[r._v("#")]),r._v(" 多进程的好处")]),r._v(" "),a("ol",[a("li",[a("p",[r._v("不会因为一个 tab 页崩溃，导致其他 tab 页也被影响。")])]),r._v(" "),a("li",[a("p",[r._v("相对于线程，进程之间是不共享资源和地址空间的，所以也不会存在太多的安全问题。")])])]),r._v(" "),a("h3",{attrs:{id:"包含的进程种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含的进程种类"}},[r._v("#")]),r._v(" 包含的进程种类")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("Browser 进程——浏览器的主进程，负责协调、主控，只有一个")])]),r._v(" "),a("li",[a("p",[r._v("第三方插件进程——每种类型的插件对应一个进程，仅当使用该插件时才创建")])]),r._v(" "),a("li",[a("p",[r._v("GPU 进程——最多一个，用于 3D 绘制等")])]),r._v(" "),a("li",[a("p",[r._v("浏览器渲染进程——负责页面的渲染")])])]),r._v(" "),a("h3",{attrs:{id:"browser-进程与渲染进程的通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-进程与渲染进程的通信"}},[r._v("#")]),r._v(" Browser 进程与渲染进程的通信")]),r._v(" "),a("ol",[a("li",[a("p",[r._v("如果打开任务管理器，然后打开一个浏览器，就可以看到任务管理器中出现了两个进程，一个是主控进程，一个则是打开 Tab 页的渲染进程")])]),r._v(" "),a("li",[a("p",[r._v("整个过程如下：")]),r._v(" "),a("ol",[a("li",[r._v("Browser 进程收到用户请求，首先需要获取页面内容，随后将该任务通过 RendererHost 接口传递给 Render 进程。")]),r._v(" "),a("li",[r._v("Renderer 进程的 Renderer 接口收到消息，简单解释后，交给渲染线程，然后开始渲染。")]),r._v(" "),a("li",[r._v("渲染线程接收请求，加载网页并渲染网页，这其中可能需要 Browser 进程获取资源和需要 GPU 进程来帮助渲染。")]),r._v(" "),a("li",[r._v("当然可能会有 JS 操作 DOM（这样可能会造成回流并重绘）")]),r._v(" "),a("li",[r._v("最后 Render 进程将结果传递给 Browser 进程")]),r._v(" "),a("li",[r._v("Browser 进程接收到结果并将结果绘制出来")])])])]),r._v(" "),a("ul",[a("li",[r._v("如图所示")])]),r._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/0.png",alt:""}})]),r._v(" "),a("h2",{attrs:{id:"渲染进程是多线程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程是多线程的"}},[r._v("#")]),r._v(" 渲染进程是多线程的")]),r._v(" "),a("h3",{attrs:{id:"常驻线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常驻线程"}},[r._v("#")]),r._v(" 常驻线程")]),r._v(" "),a("ul",[a("li",[r._v("GUI 渲染线程——负责渲染浏览器界面，解析 HTML，CSS")]),r._v(" "),a("li",[r._v("定时触发器线程——处理 setInterval 与 setTimeout 任务")]),r._v(" "),a("li",[r._v("事件触发线程——处理事件消息，控制事件循环")]),r._v(" "),a("li",[r._v("异步 http 请求线程——处理 XMLHttpRequest 异步请求")])]),r._v(" "),a("h3",{attrs:{id:"线程之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程之间的关系"}},[r._v("#")]),r._v(" 线程之间的关系")]),r._v(" "),a("h4",{attrs:{id:"gui-渲染与-js-运行互斥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-渲染与-js-运行互斥"}},[r._v("#")]),r._v(" gui 渲染与 JS 运行互斥")]),r._v(" "),a("ol",[a("li",[r._v("由于 js 可以 DOM，如果在修改这些元素属性同时渲染界面，那么渲染线程前后获得的元素数据就可能不一致了")]),r._v(" "),a("li",[r._v("由于 gui 渲染与 JS 都运行在渲染主线程上，因此为了防止渲染出现不可预期的结果，浏览器设置为互斥关系")])]),r._v(" "),a("h4",{attrs:{id:"js-为什么会阻塞页面加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-为什么会阻塞页面加载"}},[r._v("#")]),r._v(" js 为什么会阻塞页面加载")]),r._v(" "),a("ol",[a("li",[r._v("由于 gui 渲染与 JS 都运行在渲染主线程上，当浏览器执行 js 程序的时候，GUI 渲染会被保存在一个队列中，直到 JS 程序执行完成才会接着执行。")]),r._v(" "),a("li",[r._v("因此如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。")])]),r._v(" "),a("h4",{attrs:{id:"webworker-与-sharedworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webworker-与-sharedworker"}},[r._v("#")]),r._v(" WebWorker 与 SharedWorker")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("WebWorker——运行在 web 后台的线程，相当于 js 引擎向浏览器申请开一个子线程，由浏览器所开的，完全受主线程控制，而且不能操作 dom")])]),r._v(" "),a("li",[a("p",[r._v("SharedWorker——是浏览器所有页面共享的，不能采用与 Worker 同样的方式实现，因为它不隶属于某个 Render 进程，可以为多个 Render 进程共享使用")])]),r._v(" "),a("li",[a("p",[r._v("WebWorker 与 SharedWorker 本质上就是进程和线程的区别，SharedWorker 由独立的进程管理，WebWorker 只是属于 render 进程下的一个线程")])])]),r._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[r._v("#")]),r._v(" 参考")]),r._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.imweb.io/topic/58e3bfa845e5c13468f567d5",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://www.imweb.io/topic/58e3bfa845e5c13468f567d5"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/mininice/p/4298952.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://www.cnblogs.com/mininice/p/4298952.html"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/5a6547d0f265da3e283a1df7",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://juejin.im/post/5a6547d0f265da3e283a1df7"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=_.exports}}]);