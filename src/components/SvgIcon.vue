<template>
  <svg :class="svgClass" class="svg-icon" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: "svgIcon",
  props: {
    svgClass: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconName() {
      return `#${this.prefix + "-"}${this.iconClass}`;
    }
  }
};
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
