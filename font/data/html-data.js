var local_htmlbase = [
  {
    title: "HTML 简介",
    content: "什么是 HTML？\n HTML是用来描述网页的一种语言。\nHTML 指的是超文本标记语言 (Hyper Text Markup Language)\n HTML 不是一种编程语言，而是一种标记语言(markup language)\n 标记语言是一套标记标签 (markup tag)\n HTML 使用标记标签来描述网页\n\n HTML标签\n HTML 标记标签通常被称为HTML标签 (HTML tag)。\nHTML 标签是由尖括号包围的关键词，比如<html>\nHTML 标签通常是成对出现的，比如<b> 和 </b >\n标签对中的第一个标签是开始标签，第二个标签是结束标签\n开始和结束标签也被称为开放标签和闭合标签",
    htmlId:0,
  },
  {
    title:"HTML 元素",
    content: "HTML 文档是由 HTML 元素定义的。\nHTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。\n\nHTML 元素语法\nHTML 元素以开始标签起始\nHTML 元素以结束标签终止\n元素的内容是开始标签与结束标签之间的内容\n某些 HTML 元素具有空内容（empty content）\n空元素在开始标签中进行关闭（以开始标签的结束而结束）\n大多数 HTML 元素可拥有属性\n\n嵌套的 HTML 元素\n大多数 HTML 元素可以嵌套（可以包含其他 HTML 元素）。HTML 文档由嵌套的 HTML 元素构成。\n\n<p> 元素\n<p> 元素定义了 HTML 文档中的一个段落。\n这个元素拥有一个开始标签 <p>，以及一个结束标签</p >。元素内容是：This is my first paragraph。\n\n<body> 元素\n<body> 元素定义了 HTML 文档的主体。\n这个元素拥有一个开始标签 <body>，以及一个结束标签</body >。\n元素内容是另一个 HTML 元素（p 元素）。\n\n<html> 元素\n<html> 元素定义了整个 HTML 文档。\n这个元素拥有一个开始标签 <html>，以及一个结束标签</html >。\n元素内容是另一个 HTML 元素（body 元素）。",
    htmlId:1,
  },
  {
    title: "HTML 属性",
    content: "HTML 属性\nHTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。\n属性总是以名称/值对的形式出现，比如：name='value'。\n属性总是在 HTML 元素的开始标签中规定。\n\n属性实例\nHTML 链接由 < a > 标签定义。链接的地址在 href 属性中指定：\n<a href= 'http://www.w3school.com.cn'> This is a link</a>\n\nHTML 提示：使用小写属性\n属性和属性值对大小写不敏感。\n不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。\n而新版本的(X)HTML 要求使用小写属性。",
    htmlId:2,
  },
  {
    title:"HTML 标题",
    content: "HTML 标题\n标题（Heading）是通过<h1>-<h6>等标签进行定义的。\n<h1>定义最大的标题。<h6>定义最小的标题。\n\n标题很重要\n请确保将 HTML heading 标签只用于标题。不要仅仅是为了产生粗体或大号的文本而使用标题。\n搜索引擎使用标题为您的网页的结构和内容编制索引。\n因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。\n应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。",
    htmlId:3,
  },
  {
    title:"HTML 段落",
    content: "HTML 段落\n段落是通过 <p> 标签定义的。\n\n实例\n<p>This is a paragraph</p>\n<p> This is another paragraph</p>\n注释：浏览器会自动地在段落的前后添加空行。（<p> 是块级元素）\n提示：使用空的段落标记<p></p> 去插入一个空行是个坏习惯。用 <br / > 标签代替它！（但是不要用 < br /> 标签去创建列表。不要着急，您将在稍后的篇幅学习到 HTML 列表。）\n\nHTML 折行\n如果您希望在不产生一个新段落的情况下进行换行（新行），请使用<br /> 标签：\n\n<p>This is< br />a para< br />graph with line breaks</p>\n<br /> 元素是一个空的 HTML 元素。由于关闭标签没有任何意义，因此它没有结束标签。",
    htmlId:4,
  },
  {
    title: "HTML 样式",
    content: "style 属性用于改变 HTML 元素的样式。\nHTML 的 style 属性\nstyle 属性的作用：\n提供了一种改变所有 HTML 元素的样式的通用方法。\n样式是 HTML 4 引入的，它是一种新的首选的改变 HTML 元素样式的方式。通过 HTML 样式，能够通过使用 style 属性直接将样式添加到 HTML 元素，或者间接地在独立的样式表中（CSS 文件）进行定义。",
    htmlId: 5,
  }, 
  {
    title: "HTML 引用",
    content: "HTML <q> 用于短的引用\nHTML <q> 元素定义短的引用。\n浏览器通常会为<q> 元素包围引号。\n实例\n<p> WWF 的目标是：<q> 构建人与自然和谐共存的世界。</q></p>\n\n用于长引用的 HTML <blockquote>\nHTML <blockquote> 元素定义被引用的节。\n浏览器通常会对<blockquote> 元素进行缩进处理。\n实例\n<p>以下内容引用自 WWF 的网站：</p>\n< blockquote cite='http://www.worldwildlife.org/who/index.html'>\n五十年来，WWF 一直致力于保护自然界的未来。\n世界领先的环保组织，WWF 工作于 100 个国家，\n并得到美国一百二十万会员及全球近五百万会员的支持。\n</blockquote>",
    htmlId: 6,
  },
  {
    title: "HTML 注释",
    content: "注释标签 <!-- 与 --> 用于在 HTML 插入注释。\nHTML 注释标签\n您能够通过如下语法向 HTML 源代码添加注释：\n实例\n<!-- 在此处写注释 -- >\n注释：在开始标签中有一个惊叹号，但是结束标签中没有。\n浏览器不会显示注释，但是能够帮助记录您的 HTML 文档。\n您可以利用注释在 HTML 中放置通知和提醒信息：\n实例\n< !--这是一段注释 -->\n<p>这是一个段落。</p>\n< !--记得在此处添加信息 -->",
    htmlId: 7,
  },
  {
    title: "HTML CSS",
    content: "通过使用 HTML4.0，所有的格式化代码均可移出 HTML 文档，然后移入一个独立的样式表。\n如何使用样式\n当浏览器读到一个样式表，它就会按照这个样式表来对文档进行格式化。有以下三种方式来插入样式表：\n1.外部样式表\n当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。\n<head >\n<link rel='stylesheet' type= 'text/css' href= 'mystyle.css' >\n</head>\n2.内部样式表\n当单个文件需要特别样式时，就可以使用内部样式表。你可以在 head 部分通过 < style > 标签定义内部样式表。\n<head>\n<style type='text/css' >\nbody {background-color: red }\np {margin-left: 20px}\n< /style>\n< /head>\n3.内联样式\n当特殊的样式需要应用到个别元素时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。以下实例显示出如何改变段落的颜色和左外边距。\n<p style=color: red; margin-left: 20px' >\nThis is a paragraph\n</p>",
    htmlId: 8,
  },
  {
    title: "HTML 链接",
    content: "HTML 使用超级链接与网络上的另一个文档相连。\n几乎可以在所有的网页中找到链接。点击链接可以从一张页面跳转到另一张页面。\nHTML 超链接（链接）\n超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。\n当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。\n我们通过使用<a> 标签在 HTML 中创建链接。\n有两种使用<a> 标签的方式：\n通过使用 href 属性 - 创建指向另一个文档的链接\n通过使用 name 属性 - 创建文档内的书签",
    htmlId: 9,
  },
  {
    title:"HTML 图像",
    content:"",
    htmlId:10,
  },
  {
    title: "HTML 表格",
    content: "",
    htmlId: 11,
  },
  {
    title: "HTML 列表",
    content: "",
    htmlId: 12,
  },
  {
    title: "HTML 块",
    content: "",
    htmlId: 13,
  },
  {
    title: "HTML 类",
    content: "",
    htmlId: 14,
  },
  {
    title: "HTML 布局",
    content: "",
    htmlId: 15,
  },
  {
    title: "HTML 布局",
    content: "",
    htmlId: 16,
  },
  {
    title: "HTML 布局",
    content: "",
    htmlId: 17,
  },
  {
    title: "HTML 布局",
    content: "",
    htmlId: 18,
  },
  {
    title: "HTML 布局",
    content: "",
    htmlId: 19,
  },
  {
    title: "HTML 布局",
    content: "",
    htmlId: 20,
  },
]
module.exports = {
  htmlList: local_htmlbase,
}