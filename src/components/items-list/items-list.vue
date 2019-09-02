<template>
  <div class="items--list">
    <item-card :item="item" v-for="item in items" :key="`image${item.id}`"/>
  </div>
</template>

<script type="text/javascript" src="./items-list.js"></script>
<style lang="scss" scoped src="./items-list.scss"></style>
