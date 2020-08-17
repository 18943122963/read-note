# `props/ $emit`

> - 父组件将值放入标签中`:tar="这是值"`，子组件用`props:{tar:{}}`可以接收到
> - 子组件用`this.$emit("afunc","这是值")`，父组件用`@afunc`事件接收到，用其中的 e 参数可以拿到

# `$ref/ $parent/ $children`

> - 强行拿到组件实例，不推荐

# `provide/ inject`

> - 父组件使用`provide`函数（类似于 data 函数）注入
> - 子组件使用`inject`（类似于 props）进行提取

# `vuex`

> 比较重，有文档

# `$attrs`

> - \$attrs 属性可以拿到全部子组件属性（除了 prop，class，style）
