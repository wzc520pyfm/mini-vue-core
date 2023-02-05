/**
 * 设计框架三种选择之一: 运行时
 */
function Render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    // 数组, 递归调用Render, 使用el作为挂载节点
    obj.children.forEach((child) => Render(child, el))
  }

  // 将元素挂载到root节点
  root.appendChild(el)
}

// use:
const obj = {
  tag: 'div',
  children: [
    { tag: 'span', children: 'hello world' }
  ]
}
Render(obj, document.body)

/**
 * 我们提供了Render函数将描述DOM的对象渲染为真实DOM, 
 * 用户必须提供描述DOM的对象
 * 
 * 
 * 纯运行时的框架没有编译的过程, 也就无法分析用户提供的内柔, 
 * 不容易做进一步的优化
 */
