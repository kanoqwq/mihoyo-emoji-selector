# mihoyo-emoji-selector

基于Vue3+TS+Element Plus的米游社表情包选择器页面

- 按需获取（点击按钮获取表情包）
- 点击表情包自动发送url到对应DOM对象
- iframe框架隔离 + CORS，低冲突

## 免责声明

本项目使用的接口为米游社官方接口，表情包版权归米哈游所有。

## 使用方法

克隆、安装依赖：

```bash
git clone https://github.com/kanoqwq/mihoyo-emoji-selector.git
cd mihoyo-emoji-selector
npm i
```

编译(/dist)：

```bash
npm run build
```

由于官方接口需要跨域使用，需要提前设置好跨域（反向代理目录：`/MiHoYoEmo/getEmo`）

接口地址(米游社)：https://bbs-api.mihoyo.com/misc/api/emoticon_set
