/**
 * 设计错误处理
 */

let handleError = null

// 统一的错误处理
function callWithErrorHandling(fn) {
  try {
    fn && fn()
  } catch (e) {
    handleError(e)
  }
}

// 暴露给用户一些方法
const utils = {
  // 暴露给用户的工具函数
  foo(fn) {
    callWithErrorHandling(fn)
  },
  // 支持用户自定义错误处理函数
  registerErrorHandler(fn) {
    handleError = fn
  }
}


// use:
// 用户注册自己的错误处理程序
utils.registerErrorHandler((e) => {
  console.log(e)
})
// 用户使用我们提供的方法
utils.foo(() => { /** ... */ })


// 如果框架不做错误处理, 那么用户使用时就得书写大量的错误处理代码:
utils.foo(() => {
  try {
    // ...
  } catch (e) {
    // ...
  }
})
// 这太糟糕了
