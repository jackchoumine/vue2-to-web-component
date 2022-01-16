<template>
  <div>
    <HelloWorld />
    <MyVueName />
    <MyRating />
  </div>
</template>

<script>
// @ is an alias to /src
import { HelloWorld, MyVueName, MyRating } from '@/components'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyVueName,
    MyRating
  }
}
</script>
