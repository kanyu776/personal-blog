(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{497:function(t,a,s){"use strict";s.r(a);var n=s(41),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"正则表达式知识概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式知识概览"}},[t._v("#")]),t._v(" 正则表达式知识概览")]),t._v(" "),s("blockquote",[s("p",[t._v("本文中用 n 指代具体字符")])]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("核心 ——"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 正则表达式是匹配模式，要么匹配字符，要么匹配位置。\n组成 ——"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 修饰符、元字符、量词、特殊符号和特定语言API。\n")])])]),s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("h3",{attrs:{id:"量词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量词"}},[t._v("#")]),t._v(" 量词")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("n+     大于等于1个字符\nn*     大于等于0个字符\nn?     包含0个或1个字符\nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   包含x个字符\nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  包含x个以上字符\nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x,y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" 包含x到y个字符\n")])])]),s("h3",{attrs:{id:"修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("g 全局匹配\ni 字母大小写不敏感\nm 多行匹配\ny 粘连匹配\ns 拓展点字符（任意字符）\nu 处理超范围Unicode字符\n")])])]),s("h3",{attrs:{id:"元字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("D 数字/非数字\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("W 字母/非字母\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("S 空白/非空白\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("B 单词/非单词边界\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("xxx 查找8进制字符\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("udd 查找16进制\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("数字 反向引用\n")])])]),s("h3",{attrs:{id:"特殊符号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊符号"}},[t._v("#")]),t._v(" 特殊符号")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         分组\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         字符组\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          或\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("n    先行断言\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("n  后行断言\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("          匹配开头\n$          匹配结尾\n")])])]),s("h3",{attrs:{id:"特定语言-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特定语言-api"}},[t._v("#")]),t._v(" 特定语言 API")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以javascript为例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译正则表达式。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检索字符串中指定的值。返回 true 或 false。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检索字符串中指定的值。返回找到的值，并确定其位置。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检索与正则表达式相匹配的值。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到一个或多个正则表达式的匹配。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换与正则表达式匹配的子串。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把字符串分割为字符串数组。")]),t._v("\n")])])]),s("h2",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("h3",{attrs:{id:"位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[t._v("#")]),t._v(" 位置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("开头/结尾 => ^、$\n单词边界  => \\b、\\B\n断言/环视 => ?=n、?!n、?<=n、?<!n\n")])])]),s("h3",{attrs:{id:"模糊匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配"}},[t._v("#")]),t._v(" 模糊匹配")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("（量词）横向模糊匹配  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x,y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("、n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("、n+、n*、n？\n（字符组）纵向模糊匹配 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("d、"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("D、"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("w、"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("W、"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("s、"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("S\n")])])]),s("h3",{attrs:{id:"分组-分支-引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分组-分支-引用"}},[t._v("#")]),t._v(" 分组/分支/引用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("分组 => ()\n分支 => |\n引用 => \\数字\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);