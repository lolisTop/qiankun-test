## 使用 PNPM

### 安装

> `pnpm install` 会直接安装所有项目 **package.json** 的包

### 调试

> `pnpm run dev` 开启 **apps** 中的所有项目

### 打包

> `pnpm run build` 打包 **apps** 中的所有项目

### 预览打包内容

> `pnpm run local-server` 预览**dist**打包文件


## TODO

1. 需要将 **apps/main** 的组件封装到 **packages** 中,使所有项目公用
2. 解决 **vue-router4** 中父应用跳转子应用后使用浏览器系统后退会丢失路由
3. 封装简化父子应用 `useModel` 未实现，目前采用监听的方式
4. 配置开发、生产的子项目路径
5. 将`qiankun`封装 **packages** 组件调用，而不是在主应用中操作
