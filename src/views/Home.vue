<template>
  <h1>Home.vue</h1>
  <p v-if="quote">{{ quote }}</p>
  <p v-else>ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.
    ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.
    ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.
    ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.
    ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.
    ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.
    ommodi amet alias quasi saepe ducimus, fugiat eaque magni quod quae unde mollit
    ia ex debitis aliquid velit. Voluptas eligendi ne
    cessitatibus commodi cumque vero ullam, non accusamus maxime fugiat.</p>
</template>

<script>
import { axios } from "@/common/api.service.js";

export default {
  name: 'Home',
  data() {
    return {
      quote: null,
    }
  },
  methods: {
    async getKanye() {
      let endpoint = 'https://api.kanye.rest/';
      try {
        const response = await axios.get(endpoint);
        this.quote = response.data.quote;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    document.title = "KanyeTime";
    this.getKanye();
  },
};
</script>
