<template>
  <nav class="shadow flex justify-between">
    <nuxt-link to="/" class="px-3">
      <div class="flex items-center h-full">
        <img
          class="h-10"
          src="../assets/images/vuepress-tools-logo.png"
          alt="Vuepress tools"
        />
        <h2 class="font-semibold text-base ml-2 uppercase">Vuepress Tools</h2>
      </div>
    </nuxt-link>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"
        ><nuxt-link to="/themes"
          ><i class="el-icon-brush"></i><span>Themes</span></nuxt-link
        ></el-menu-item
      >
      <el-menu-item index="2"
        ><nuxt-link to="/plugins"
          ><i class="el-icon-magic-stick"></i><span>Plugins</span></nuxt-link
        ></el-menu-item
      >
    </el-menu>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
