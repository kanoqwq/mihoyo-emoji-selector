# mihoyo-emoji-selector

基于Vue3+TS+Element Plus的米游社表情包选择器页面

- 按需获取（点击按钮获取表情包）
- 点击表情包自动发送url到对应DOM对象
- iframe框架隔离 + CORS，低冲突

![demo](https://github.com/kanoqwq/mihoyo-emoji-selector/blob/main/demo.gif?raw=true)

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

## 演示代码

**将以下代码粘贴到需要添加表情包选择框的位置 (记得更改url地址与comment ID)**

``` html

<div>
    <script>
        const commentElement = '#comment'
        function receiveMsg(e) {
            try {
                let data = e.data;
                if (data.emoUrl) {
                    let comment = document.querySelector(commentElement);
                    comment.value += " " + data.emoUrl;
                }
                if (data.frameHeight) {
                    document.querySelector("#MiHoYoEmo").style.height = `${data.frameHeight}px`
                }
            } catch (e) {
                console.log("发生错误！没有找到评论区位置");
            }
        }
        window.addEventListener("message", receiveMsg)
    </script>
    <iframe src="./dist/index.html" frameborder=0 scrolling="no" width="100%" id="MiHoYoEmo" height="32px" style="transition:all .5s"></iframe>
</div>
```

