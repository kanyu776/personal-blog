(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{543:function(t,a,n){"use strict";n.r(a);var s=n(34),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"javascript-细节知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-细节知识"}},[t._v("#")]),t._v(" javascript 细节知识")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("字符串转数字："),n("code",[t._v("字符串 * 1")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("其他类型转字符串："),n("code",[t._v('字符串" + 值')]),t._v("。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("!!值")]),t._v("，可以将值转换为布尔类型。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("!值")]),t._v("，可以将值转换为布尔类型并取反。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v('""，null，undefined，0，NaN')]),t._v("，在进行条件判断时，会被自动转换为"),n("code",[t._v("false")]),t._v("。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Boolean，Number，String的new对象")]),t._v("都可以通过"),n("code",[t._v("valueOf()")]),t._v("转换为对应值。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("for..in")]),t._v("会自动过滤掉不存在的元素（比如数组设置 length 数）。")])]),t._v(" "),n("li",[n("p",[t._v("数组"),n("code",[t._v("arr.length")]),t._v("设大不会分配更多空间。")])]),t._v(" "),n("li",[n("p",[t._v("数组"),n("code",[t._v("delete")]),t._v("只会删除值，不会删除数组位。")])]),t._v(" "),n("li",[n("p",[t._v('对象字面量的"键"可为空字符串。')])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Array.prototype.slice.call(arguments)")]),t._v("转化速度比较慢。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("setTimeout/setInterval")]),t._v("从第三个参数开始，全部都为函数参数项。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("eval")]),t._v("只在被直接调用并且调用函数就是"),n("code",[t._v("eval本身")]),t._v("时，才在当前作用域中执行。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("typeof()")]),t._v("中的括号代表的是分组操作符，而不是意味着 typeof 是作为函数使用。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("NaN")]),t._v('——"不是数字"，属于特殊数字')])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("运算失败会得到 NaN")])]),t._v(" "),n("li",[n("p",[t._v("NaN 与任何数字运算结果都为 NaN")])])]),t._v(" "),n("ol",{attrs:{start:"16"}},[n("li",[n("code",[t._v("（Infinity | -Infinity）")]),t._v("——无穷数")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("任何数除以 0 都为（Infinity|-Infinity）")])]),t._v(" "),n("li",[n("p",[t._v("Infinity 和-Infinity 的相互运算都为 NaN")])]),t._v(" "),n("li",[n("p",[t._v("Infinity 和-Infinity 与数字的常规运算都为（Infinity|-Infinity）")])])]),t._v(" "),n("ol",{attrs:{start:"17"}},[n("li",[t._v("对象数组化")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { 0: 1, 1: 2, age: 12, length: 2 }")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);