/**
 * 设计框架三种选择之一: 编译时
 *  - 可以直接将html字符串编译为命令式代码
 */
function Compiler(htmlString) {
  // ...
}

// use:
const html = `
  <div>
    <span>hello world</span>
  </div>
`
Compiler(html);
// 编译后大致如下:
const div = document.createElement('div')
const span = document.createElement('span')
span.innerHTML = 'hello world'
div.appendChild(span)
document.body.appendChild(div)

/**
 * 纯编译时代码不需要任何运行时, 直接编译为可执行的JS代码, 性能会更高,
 * 但有损灵活性, 即用户提供的内容只有编译后才能用.
 */

