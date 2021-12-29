<template>

  
  <h1 class="text-custom-color">Home.vue</h1>
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

  <div class="form-group">
    <label class="col-sm-2 control-label" for="email">Email</label>
    <div class="col-sm-5">
      <input id="email" class="form-control" type="email" placeholder="Email" name="email">
    </div>
    <div class="col-sm-5 messages"></div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label" for="password">Password</label>
    <div class="col-sm-5">
      <input id="password" class="form-control" type="password" placeholder="Password"
        name="password">
    </div>
    <div class="col-sm-5 messages"></div>
  </div>
  

</template>

<script>
  import {
    axios
  } from "@/common/api.service.js";

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
      // async getKanye() {
      //   let endpoint = 'https://alusha.pythonanywhere.com/api/clients/';
      //   try {
      //     const response = await axios.get(endpoint);
      //     this.quote = response.data.results[0].business_name;
      //   } catch (error) {
      //     console.log(error.response);
      //   }
      // },
    },
    created() {
      document.title = "KanyeTime";
      this.getKanye();
    },
  };

</script>
