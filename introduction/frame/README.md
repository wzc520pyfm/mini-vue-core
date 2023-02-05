1. 直接操作DOM性能消耗较大, 使用虚拟DOM尽可能减少DOM操作.
2. 虚拟DOM就是利用JS对象描述DOM, 在更新DOM前先比对其对应的虚拟DOM的差异(Diff算法), 只更新必要的DOM