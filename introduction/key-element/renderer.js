/**
 * 虚拟DOM就是用JS对象来描述真实DOM的结构
 * 渲染器的作用就是把虚拟DOM渲染为真实DOM
 */

// 一个简单的渲染器
function renderer(vnode, container) {
  if (typeof vnode.tag === 'string') {
    // 说明vnode描述的是标签元素
    mountElement(vnode, container)
  } else if (typeof vnode.tag === 'function') {
    // 说明vnode描述的是组件
    mountComponent(vnode, container)
  }
}
function mountElement(vnode, container) {
  // 使用vnode.tag作为标签名称创建DOM元素
  const el = document.createElement(vnode.tag)
  // 遍历vnode.props, 将属性、事件添加到DOM元素
  for (const key of vnode.props) {
    if (/^on/.test(key)) {
      // 以on开头的是事件
      el.addEventListener(
        key.substr(2).toLowerCase(), // 事件名称 onClick ---> click
        vnode.props[key] // 事件处理函数
      )
    }
  }
  // 处理children
  if (typeof vnode.children === 'string') {
    // 如果是字符串, 表明是元素的文本子节点
    el.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    // 是数组, 说明还有子节点, 递归地调用renderer函数渲染子节点
    vnode.children.forEach(child => renderer(child, el))
  }
  // 将渲染好的元素挂载到节点
  container.appendChild(el)
}
function mountComponent(vnode, container) {
  // 调用组件函数, 获取组件要渲染的内容(虚拟dom)
  const subtree = vnode.tag()
  // 递归地调用renderer, 渲染subtree
  renderer(subtree, container)
}
// ps: 渲染器的更新操作此处并没有涉及 

// use:

const vnode = {
  tag: 'div',
  props: {
    onClick: () => alert('hello')
  },
  children: 'click me'
}
renderer(vnode, document.body)

// 组件
const MyComponent = function () {
  return {
    tag: 'div',
    props: {
      onClick: () => alert('hello')
    },
    children: 'click me'
  }
}
const vnodeIncludeComponent = {
  tag: MyComponent
}
renderer(vnodeIncludeComponent, document.body)
// ps: 描述组件并不是一定要用函数, 而是取决于渲染器支持我们如何去描述
//     事实上, vue中有状态组件就是使用对象结构来表达的