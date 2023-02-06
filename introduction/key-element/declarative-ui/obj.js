//  UI包含：
//    1. DOM元素
//    2. 属性
//    3. 事件
//    4. 元素的层级结构

//   Vue声明式描述UI的方案之二：使用js对象（虚拟DOM）

let level = 3
const title = {
  tag: `h${level}`, // h3标签
}

// js对象描述UI具有更好的灵活性, 因而vue也支持使用虚拟DOM描述UI
export default {
  render() {
    return {
      tag: 'h1',
      props: { onClick: handler }
    }
    // 上述写法较复杂, 如果再设计多层嵌套就更复杂, 因而vue提供h函数来辅助编写虚拟DOM
    return h('h1', { onClick: handler })
  }
}

