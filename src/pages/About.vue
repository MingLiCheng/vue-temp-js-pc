<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary">测试</Button>
    <Button type="button" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError"
      >Copy!</Button
    >
  </div>
</template>
<script>
import { Button } from 'element-ui'
export default {
  name: 'About',
  components: { Button },
  data() {
    return {
      message: 'Copy These Text'
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }
}
</script>
