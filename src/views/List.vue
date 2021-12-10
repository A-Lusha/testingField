/* eslint-disable max-len */
<template>
<section class="wrapper">
  <main class="row title">
    <ul>
      <li>Name</li>
      <li>Email</li>
      <li><span class="title-hide">Phone</span> #</li>
      <li @click="sortSales">Status</li>
      <li>Action</li>
    </ul>
  </main>
  <article  v-for="(sale,i) in sales" :key="i" class="row" :class="sale.type">
    <ul>
      <li><router-link :to="sale.url">{{ sale.name }}</router-link></li>
      <li>{{ sale.email }}</li>
      <li>{{ sale.phone }}</li>
      <li>{{ sale.status }}</li>
      <li>button here</li>
    </ul>
    <ul class="more-content">
      <li>{{ sale.notes }}</li>
    </ul>
  </article>
</section>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      sales: [
        {
          name: 'Alex',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'nfl',
          status: 1,
          notes: 'This guy is a prick',
          url: '/form',
        },
        {
          name: 'Chris',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'nhl',
          status: 2,
          notes: 'This guy is, in fact, also a prick',
          url: 'http://test.com/',
        },
        {
          name: 'Fucko',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'mlb',
          status: 4,
          notes: 'An actually nice guy',
          url: 'http://test.com/',
        },
        {
          name: 'Your Mother',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'pga',
          status: 6,
          notes: 'I fucked this lady',
          url: 'http://test.com/',
        },
      ],
    };
  },
  methods: {
    sortSales() {
      this.sales.sort((a, b) => a.status + b.status);
      console.log(this.sales);
    },
  },
};

</script>

<style lang="scss" scoped>
/* colors */
.nfl {border-left:3px solid darken($blue, 30%);}
.nfl:hover {border-left:3px solid $blue;}
.mlb {border-left:3px solid darken($green, 30%);}
.mlb:hover {border-left:3px solid $green;}
.nhl {border-left:3px solid darken($yellow, 30%)}
.nhl:hover {border-left:3px solid $yellow;}
.pga {border-left:3px solid darken($orange, 30%);}
.pga:hover {border-left:3px solid $orange;}

/* links */
.nfl a, .mlb a, .nhl a, .pga a {text-decoration:none;transition: color 0.2s ease-out;}
.nfl a {color:$blue;}
.nfl a:hover {color:darken($blue, 20%);}
.mlb a {color:$green;}
.mlb a:hover {color:darken($green, 20%);}
.nhl a {color:$yellow;}
.nhl a:hover {color:darken($yellow, 20%);}
.pga a {color:$orange;}
.pga a:hover {color:darken($orange, 20%);}

/* wrapper */
.wrapper {
  width:100%;
  max-width:1000px;
  margin:20px auto 100px auto;
  padding:0;
  background:$light-bg;
  color:$text;
  overflow:hidden;
  position:relative;
}

/* lists */
.row ul {
  margin:0;
  padding:0;
}
.row ul li  {
  margin:0;
  font-size:$default-font-size;
  font-weight:normal;
  list-style:none;
  display:inline-block;
  width:20%;
  box-sizing:border-box;
  @media only screen and (max-width:767px) and (min-width:480px) {
    font-size:13px;
  }
  @media only screen and (max-width:479px) {
    font-size:13px;
  }
}

.title ul li {
  padding:15px 13px;
}
.row ul li {
  padding:5px 10px;
}

/* rows */
.row {
  padding:20px 0;
  height:8rem;
  font-size:0;
  position:relative;
  overflow:hidden;
  transition:all 0.2s ease-out;
  border-top:1px solid darken($light-bg, 100%);
}
.row:hover {
  background-color:lighten($dark-bg, 10%);
  height:12rem;
  @media only screen and (max-width : 767px) {
    height:85px;
  }
  @media only screen and (max-width : 359px) {
    height:105px;
  }
}
.title {
  padding:25px 0 5px 0;
  height:7.5rem;
  font-size:0;
  background-color:$light-bg;
  border-left:3px solid lighten($light-bg, 100%);
}
.title:hover {
  height:7.5rem;
  background-color:$light-bg;
  border-left:3px solid lighten($light-bg, 100%);
}

.title-hide {
  @media only screen and (max-width:767px) {
    display:none;
  }
}

/* more content */
ul.more-content li {
  position:relative;
  top:22px;
  font-size:13px;
  margin:0;
  padding:10px 13px;
  display:block;
  height:50px;
  width:100%;
  color:darken($text,50%);
  @media only screen and (max-width:767px) {
    font-size:11px;
  }
}

</style>
