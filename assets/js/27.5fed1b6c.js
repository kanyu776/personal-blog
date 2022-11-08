(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{509:function(t,s,a){"use strict";a.r(s);var n=a(41),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-核心基础总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-核心基础总结"}},[t._v("#")]),t._v(" javascript 核心基础总结")]),t._v(" "),a("h2",{attrs:{id:"词法作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("作用域就是，程序查找变量和有效执行所在的区域，也称词法作用域。")])]),t._v(" "),a("li",[a("p",[t._v("词法作用域分为，静态作用域和动态作用域。")])]),t._v(" "),a("li",[a("p",[t._v("静态作用域取决于程序代码定义的时候，动态作用域取决于程序动态执行时的具体作用域环境。")])]),t._v(" "),a("li",[a("p",[t._v("js 采用静态作用域，对于变量对象的获取只基于定义环境，而不受执行变化的影响。")])])]),t._v(" "),a("h3",{attrs:{id:"示例如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例如下"}},[t._v("#")]),t._v(" 示例如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果为local scope")]),t._v("\n")])])]),a("h2",{attrs:{id:"执行上下文栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈"}},[t._v("#")]),t._v(" 执行上下文栈")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("js 可执行代码类型分为 3 种：全局代码、函数代码、eval 代码")])]),t._v(" "),a("li",[a("p",[t._v("执行时，会进行代码分析，以一种执行栈的方式去执行代码，类似数组的入栈和出栈，以后进先出的方式完成代码执行")])]),t._v(" "),a("li",[a("p",[t._v("压栈和出栈的内容，被称之为执行上下文，又分为全局上下文和函数上下文")])]),t._v(" "),a("li",[a("p",[t._v("压栈的时候，js 引擎首先遇到的即是全局代码，也就是全局上下文，然后就是可执行的函数上下文")])])]),t._v(" "),a("h2",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("全局代码和函数代码在被引擎分析时，都会形成一个入栈对象，称之为执行上下文")])]),t._v(" "),a("li",[a("p",[t._v("可以将其抽象的理解为 object，用来追踪关联代码的执行进度")])]),t._v(" "),a("li",[a("p",[t._v("包含 3 个属性：变量对象，作用域链，this")])]),t._v(" "),a("li",[a("p",[t._v("拥有 2 个状态：代码准备，代码执行")])])]),t._v(" "),a("h2",{attrs:{id:"变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("变量对象就是，与执行上下文相关的数据作用域，包含变量，形参和函数声明等")])]),t._v(" "),a("li",[a("p",[t._v("因为存在全局上下文和函数上下文之分，所以在变量对象上存在区别")])]),t._v(" "),a("li",[a("p",[t._v("在全局上下文中，变量对象就是宿主环境代表的 window，初始化拥有规范内置的一系列属性，在进入全局上下文时，会给 window 添加变量和函数声明等初始值")])]),t._v(" "),a("li",[a("p",[t._v("在函数上下文中，变量对象初始化时只拥 arguments 属性对应的 Arguments 对象，在进入函数上下文时，会给变量对象添加形参、函数声明、变量声明等初始值")])]),t._v(" "),a("li",[a("p",[t._v("在代码准备阶段(进入上下文时)，会给变量对象的属性赋入初始值；在代码执行阶段，会再次修改变量对象的属性值")])]),t._v(" "),a("li",[a("p",[t._v("在全局上下文中，变量对象属性就称为 VO(变量对象)；在函数上下文中，变量对象属性就被称为 AO(活动对象)")])])]),t._v(" "),a("h2",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当查找变量时，js 会先从当前上下文的变量对象中查找，如果没有找到，就会从父级上下文的变量对象中查找，这样由多个执行上下文的变量对象构成的链表就叫做作用域链")])]),t._v(" "),a("li",[a("p",[t._v("在 js 中，全局上下文属于一级链条，函数上下文开始为次级链条")])]),t._v(" "),a("li",[a("p",[t._v("函数有一个作用域属性[[scope]]，用于保存父变量对象，作为父变量对象的层级链存在，一级一级直至全局上下文的变量对象，因而构成作用域链")])]),t._v(" "),a("li",[a("p",[t._v("函数创建时，函数的作用域属性[[scope]]也被创建，直至函数销毁前一直存在")])]),t._v(" "),a("li",[a("p",[t._v("函数激活时（进入函数上下文时），创建 AO(活动对象)后就会将其添加到作用链的前端，因此变量查找才会一级一级逐上")])]),t._v(" "),a("li",[a("p",[t._v("通过 Function 函构造函数创建的函数的[[scope]]属性总是唯一的全局对象")])])]),t._v(" "),a("h2",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在一个上下文中，this 由调用者提供，由调用的方式决定，因此 this 为何值只取决于调用时")])]),t._v(" "),a("li",[a("p",[t._v("调用函数方式对 this 值的影响取决于规范里的抽象类型 Reference（包含 base value，referenced name 和 strict reference）")])]),t._v(" "),a("li",[a("p",[t._v("在函数调用中，如果调用括号()的左边是引用类型(Reference type)的值，this 将设为引用类型值的 base 对象（base object），在其他情况下（与引用类型不同的任何其它属性），这个值为 null（第 5 版的 ECMAScript 中，已经不强迫转换成全局变量了，而是赋值为 undefined）")])]),t._v(" "),a("li",[a("p",[t._v("在分析 this 的时，这里的引用类型是指代的是程序内部运行的描述名称，具体可参考 ECMAScript 5.1，或者"),a("a",{attrs:{href:"http://www.cnblogs.com/TomXu/archive/2012/01/17/2310479.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"示例如下-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例如下-2"}},[t._v("#")]),t._v(" 示例如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例3")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例4")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//示例5")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n")])])]),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在自身的作用域外被调用并使得作用域和活动对象被保存的现象，也就是内部作用域被外部作用域持有的情况")])]),t._v(" "),a("li",[a("p",[t._v("从理论角度讲，所有的 JavaScript 函数都是闭包，因为它们都在创建的时候就将上层上下文的数据保存起来了")])]),t._v(" "),a("li",[a("p",[t._v("从实践角度讲，一个函数执行时将内部函数引用返回给外部变量持有时就产生了闭包，返回的内部函数依然会持有执行函数的上下文")])])]),t._v(" "),a("h2",{attrs:{id:"原型与原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("每一个函数都拥有一个 prototype 属性，每一个 js 对象都拥有一个 proto 属性")])]),t._v(" "),a("li",[a("p",[t._v("prototype 和 proto 的关系是，prototype 属于对应 js 对象的 proto 所指")])]),t._v(" "),a("li",[a("p",[t._v("所有 js 函数(包括内置函数)的 prototype 都指向 Object.prototype，所有函数作为对象，其 proto 都指向 Function 内置对象的 prototype")])]),t._v(" "),a("li",[a("p",[t._v("js 内置函数中，只有 Function 内置函数的 proto 指向了自身的 prototype，被自身创建")])]),t._v(" "),a("li",[a("p",[t._v("js 内置函数中，只有 Object 的 prototype 的 proto 为 null，属于原型链的终点")])]),t._v(" "),a("li",[a("p",[t._v("每个 prototype 都有一个 constructor 属性指向关联的构造函数，每一个通过 new 进行初始化的函数实例的 proto 都指向函数的 prototype")])]),t._v(" "),a("li",[a("p",[t._v("js 通过 prototype 和 proto 的关系实现了一个委托链条，proto 一级接一级构成原型链")])])]),t._v(" "),a("h2",{attrs:{id:"参数传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数传递"}},[t._v("#")]),t._v(" "),a("strong",[t._v("参数传递")])]),t._v(" "),a("h3",{attrs:{id:"图示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图示"}},[t._v("#")]),t._v(" 图示")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/javascript/8.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/javascript/9.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"说明图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明图"}},[t._v("#")]),t._v(" 说明图")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/javascript/10.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);