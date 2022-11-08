(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{512:function(t,a,v){"use strict";v.r(a);var _=v(41),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"javascript-内存管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascript-内存管理"}},[t._v("#")]),t._v(" javascript 内存管理")]),t._v(" "),v("h2",{attrs:{id:"生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),v("p",[t._v("无论什么编程语言，内存生命周期都是一致的————分配，使用，释放")]),t._v(" "),v("h2",{attrs:{id:"内存管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[t._v("#")]),t._v(" 内存管理")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("某些类似 C 语言的程序，一般都有内存管理接口，开发人员需要显式分配和释放操作系统的内存。")])]),t._v(" "),v("li",[v("p",[t._v("javascript 会自动进行内存分配，并在不被使用时进行自动释放，这个过程被称为"),v("strong",[t._v("垃圾回收")]),t._v("。")])])]),t._v(" "),v("h2",{attrs:{id:"垃圾回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("有两种回收策略————引用计数和标记清除")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("引用计数")]),t._v("——跟踪记录每个引用，存在引用的+1，不存在引用的-1，在代码操作过程中，最终引用为 0 的会被垃圾收集\n器在下次运行时清除")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("标记清除")]),t._v("——检查对象是否可以获得。通过生成一个根列表，将引用保存在运行时的全局变量中(window)，使得所\n有根和子对象都被标记为活跃的，而从根元素不可达的部分则被认为是垃圾，可以被回收")])])])]),t._v(" "),v("li",[v("p",[t._v("现代绝大多数游览器已经都采用标记清除。")])]),t._v(" "),v("li",[v("p",[t._v("垃圾回收算法依赖的主要概念是引用。")])])]),t._v(" "),v("h2",{attrs:{id:"内存泄漏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),v("p",[t._v("1.由于某些原因，使得一些内存没有归还给操作系统或者进入可用内存池，出现内存被占用的情形")]),t._v(" "),v("p",[t._v("2.由于引用计数策略对于循环引用的对象不会进行回收，导致 IE9 以下采用引用计数策略的 BOM 和 DOM 对象出现互相引用时，会出现内存泄漏问题，只能手动处理和置空")]),t._v(" "),v("h3",{attrs:{id:"常见的内存泄漏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的内存泄漏"}},[t._v("#")]),t._v(" 常见的内存泄漏")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("未带 var 声明的全局变量")])]),t._v(" "),v("li",[v("p",[t._v("被遗忘的定时器/回调")])]),t._v(" "),v("li",[v("p",[t._v("脱离 dom 的变量引用")])]),t._v(" "),v("li",[v("p",[t._v("闭包")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);