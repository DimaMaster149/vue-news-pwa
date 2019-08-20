<template>
  <renderless-list v-model="inputValue">
    <div slot-scope="{value, news}">
      {{news[0]}}
    </div>
  </renderless-list>
</template>

<script>
import RenderlessList from '@/components/RenderlessList'
export default {
  name: 'list',
  components: {
    RenderlessList
  },
  data() {
    return {
      inputValue: 'abc-news'
    }
  }
}
</script>