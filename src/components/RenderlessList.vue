<script>
export default {
  data() {
    return {
      news: []
    }
  },
  props: {
    value: {
      type: String
    }
  },
  created() {
    this.loadNews(this.value);
  },
  methods: {
    loadNews(source) {
      this.axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=ffe8239768c948d0a2d00aef31ab7c12`)
        .then(res => {
          this.news = res.data.articles;
        }) 
    }
  },
  render() {
    return this.$scopedSlots.default({
      value: this.value,
      news: this.news
    })
  },
}
</script>