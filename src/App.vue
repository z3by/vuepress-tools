<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import SimpleLayout from "./layouts/SimpleLayout";
export default {
  data() {
    return {
      layout: SimpleLayout
    };
  }
};
</script>
