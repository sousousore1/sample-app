<template>
  <div>
    <article>
      <div>
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
      </div>
    </article>
    <nuxt-link :to="{ name: 'articles' }">Back</nuxt-link>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `${process.env.apiUrl}/articles/${params.id}.json`
    )
    return { article: data }
  }
}
</script>
