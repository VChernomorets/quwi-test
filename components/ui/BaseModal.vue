<template>
  <div class="wrapper" @click.self="$emit('close')">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
}
</script>


<style scoped>
.wrapper {
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #55555530;
  position: fixed;
  cursor: auto;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px 40px;
  background: #fff;
  border: 1px solid rgba(0,0,0,.11);
  box-shadow: 0 0 12px rgba(0,0,0,.25);
  border-radius: 15px;
  display: flex;
  width: max-content;
}
</style>
