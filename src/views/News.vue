<template>
  <div>
    <select @change="loadNews($event.target.value)" name="sourceSelect" selected="abc-news">
      <option v-for="source in sources" :key="source.id" :value="source.id"> {{source.name}}</option>
    </select>
    <button class="btn" @click="loadNewSources($event)">
      Load more sources
    </button>
    <div>
      <div class="article" v-for="(article, index) in articles" :key="index">
        <span> {{article.title}}</span>
        <p>{{article.content}}</p>
        <img class="article-image" :src="article.urlToImage" :alt="article.title">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSource: "abc-news",
      sources: [],
      articles: []
    }
  },
  created() {
    this.loadNews(this.currentSource);
    this.loadSources();
  },
  methods: {
    loadNews(source) {
      this.axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=ffe8239768c948d0a2d00aef31ab7c12`)
        .then(res => {
          this.articles = res.data.articles;
        }) 
    },
    loadSources() {
      this.axios.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey=ffe8239768c948d0a2d00aef31ab7c12')
        .then(res => {
          this.sources = res.data.sources.slice(0, 10);
        })
    },
    loadNewSources() {
      this.axios.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey=ffe8239768c948d0a2d00aef31ab7c12')
        .then(res => {
          this.sources = res.data.sources.slice(11, 20);
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.article, .article-image{
  margin-left: 20px;
  width:650px;
}
</style>