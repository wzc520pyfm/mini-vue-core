/**
 * 副作用
 *  - 如果一个函数的执行会直接或间接影响其他函数的执行, 我们就说这个函数产生了副作用.
 *  - 副作用应尽量减少且集中, 并非没有副作用是最好的, 如果所有的函数都没有副作用, 那我们的代码执行也不过是浪费了一点电而已.
 */

// effect函数设置了body的文本内容， 但其他任何函数也都有可能修改body的内容， 因而产生副作用
function effect() {
  document.body.innerHTML = 'hello vue3'
}

let val = 1 // 全局变量
function effect2() {
  val = 2 // 修改全局变量, 产生副作用
}

const obj = { text: 'hello world' }
function effect3() {
  document.body.innerText = obj.text
  // 所有getter和setter也都可能产生副作用, 即obj.text是读取操作, 其getter就有可能产生副作用
}
