# visualLargeScreen【可视化大屏】
基于Vue.js和Echarts的可视化大屏模板

# 大屏适配方案

固定显示容器的宽高，并修改容器的变形的原点为左上角。获取浏览器可视窗口的宽高，用可视窗口的宽度比标准宽度求出缩放比，通过transfrom的缩放属性修改显示容器的缩放比进行屏幕适配。

###### CSS实现部分 

```CSS
//固定容器的宽高，并修改元素变形的原点
#app{
    width:1920px;
    height:1080px;
    overflow:hidden;
    overflow-y:auto;
    transform-origin: 0 0;
}
```
###### javascript实现部分 

```javascript
//固定标准宽度
const standardWidth = 1920;
//获取可视窗口的宽度
let clientWidth = window.innerWidth;
//计算缩放比例
let scale = clientWidth / standardWidth;
//获取容器节点
const htmlNode = document.querySelector("#");
//对容器按照比例缩放
htmlNode.style.transform = "scale(" + scale + ")";
```