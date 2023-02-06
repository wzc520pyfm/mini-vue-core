/**
 * vue会将模板编译为渲染函数, 再渲染内容到页面,
 * 将模板编译为渲染函数就是编译器的工作.
 */

// 模板
{/* <div @click="handler">click me</div> */}
// 渲染器会将其渲染为一个render函数
render() {
  return h('div', { onClick: handler }, 'click me')
}

/**
 * 同时, 渲染器还有另外一个作用就是可以识别出哪些是静态属性, 哪些是动态属性,
 * 例如 id='foo'是静态属性, :class='cls'是动态属性.
 * 渲染器在查找虚拟DOM更新时, 如果可以提前预知哪些属性可能发生改变, 就可以直接去检查这些元素进而做出更改
 */
{
  // 一个渲染函数
  render() {
    return {
      tag: 'div',
      props: {
        id: 'foo',
        class: cls
      }
    }
  }
  // 编译器识别可能改变的属性, 并作相应的标记
  render() {
    return {
      tag: 'div',
      props: {
        id: 'foo',
        class: cls
      },
      patchFlags: 1 // 姑且假设 1 表示class属性是动态的
    }
  }
}

