/**
 * 设计框架三种选择之一: 运行时 + 编译时
 */

// 编译函数, 将html字符串编译为描述DOM的对象
function Compiler(htmlString) {
  // ...
}
// 渲染函数
function Render(obj, root) {
  // ...
}

// use:
const html = `
  <div>
    <span>hello world</span>
  </div>
`
const obj = Compiler(html)
Render(obj, document.body)

/**
 * 我们提供了Render函数将描述DOM的对象渲染为真实DOM, 
 * 提供了Compiler函数将html字符串编译为描述DOM的对象,
 * 用户只需像平常那样编写html即可
 * 
 * 
 * 在编译时可以分析用户提供的内容, 
 * 提取预知哪些可能会改变, 哪些永远不会改变, 针对这些做相应优化
 * 
 * vue3保持了运行时+编译时的架构
 */

