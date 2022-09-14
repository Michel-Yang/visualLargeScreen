<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("resize", this.AutoSize);
    this.$nextTick(() => {
      this.AutoSize();
    });
  },
  methods: {
    AutoSize() {
      const standardWidth = 1920;
      let clientWidth = window.innerWidth;
      // let clientHeight = window.innerHeight;
      let scale = clientWidth / standardWidth;
      const htmlNode = document.querySelector("#app");
      // htmlNode.style.width = standardWidth + "px";
      // htmlNode.style.height = clientHeight / scale + "px";
      htmlNode.style.transform = "scale(" + scale + ")";
    }
  }
};
</script>

<style lang="scss">
@import "./assets/css/style.css";
#app {
  width: 1920px;
  height: 1080px;
  background-color: #a85e5e;
  overflow: hidden;
  overflow-y: auto;
  transform-origin: 0 0;
}
</style>
