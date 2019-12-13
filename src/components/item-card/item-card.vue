<template>
  <transition name="item-card">
    <div class="item--card">
      <div class="wide--container">
        <div :class="{'card-inner--layer': true, 'active': item.isSelected}"
            v-lazy:background-image="imgObj"
            :key="`inner-layer${item.id}`">
        <div class="card--header">
          {{ item.title }}
        </div>
        <div class="card--footer">
          <i class="fas fa-check-circle fa-lg" @click="select"></i>
          <i class="fas fa-times-circle fa-lg" @click="remove"></i>
        </div>
      </div>
    </div>
  </div>
  </transition>

</template>

<script type="text/javascript" src="./item-card.js"></script>
<style lang="scss" scoped src="./item-card.scss"></style>
