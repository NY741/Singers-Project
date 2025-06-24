<template>
  <header>
    <nav>
      <router-link to="/singers">Singers</router-link>
      <router-link to="/bands">Bands</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding: 20px;
  color: #fff;
  background-color: #226;
  text-align: center;
}

nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

a:visited,
a:link {
  padding: 8px 25px;
  font-weight: bold;
  color: #eef;
  background-color: transparent;
  border-radius: 5px;
}

a:hover,
a.active {
  color: #226;
  background-color: #fff;
}

a.active {
    background-color: #eb0;
}
</style>
