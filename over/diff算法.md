# diff 算法

`为什么使用diff算法`

> 计算出虚拟树中被改变的部分，然后针对该部分进行原生 DOM 操作，而不用重新渲染整个页面。

`diff算法有三大策略`

> 1. tree diff
> 2. component diff
> 3. element diff

### `tree diff`

> 对同一层次的虚拟树节点进行比较，若相同则比较子节点，不相同不进行向下比较

### `component diff`

> 判断两组件是否为同一类型的组件，若是继续比较，若不是则替换整个组件

### `element diff`

> 相同组件时，进行详细的结构差异比较

### `patch()`

- 找到对应的真实 dom，称为 el
- 判断 Vnode 和 oldVnode 是否指向同一个对象，如果是，那么直接 return
- 如果他们都有文本节点并且不相等，那么将 el 的文本节点设置为 Vnode 的文本节点。
- 如果 oldVnode 有子节点而 Vnode 没有，则删除 el 的子节点
- 如果 oldVnode 没有子节点而 Vnode 有，则将 Vnode 的子节点真实化之后添加到 el
- 如果两者都有子节点，则执行 updateChildren 函数比较子节点

### `updateChildren()`

- oldS 和 newS 相同，不变化，进行 patch，oldS++，newS++
- oldE 和 newE 相同，不变化，进行 patch，oldE--，newE--
- oldS 和 newE 相同，oldS 移动到 oldE 之后，进行 patch，oldS++，newE--
- oldE 和 newS 相同，oldE 移动到 oldS 之前，进行 patch，oldE--，newS++
- 全都不相同情况下，获取 oldVnode->index 的 key，若 oldVnode->index 为 undefined 或 null，说明没有该元素，创建新的元素；创建的 Vnode 和 newS 相同，插入到 oldS 之前，进行 patch，相同的 key 但是不一样的 element. 被视为新的 element
