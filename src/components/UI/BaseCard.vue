<template>
  <div class="card">
    <slot> </slot>
  </div>
</template>

<style scoped>
.card {
  width: 60%;
  min-width: 500px;
  padding: 15px;
  margin: auto;
  margin-bottom: 25px;
  border: 1px dashed #225;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px #aaa;
}
</style>
