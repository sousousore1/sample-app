<template>
  <div
    class="card"
    style="width: 18rem;"
  >
    <div
      v-for="(article, index) in articles"
      :key="index"
      className="card-body"
    >
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">{{ article.body }}</p>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(`${process.env.apiUrl}/articles.json`)
    return { articles: data }
  }
}
</script>
