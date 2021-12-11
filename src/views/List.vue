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
        <li>
          <router-link
            class="stretched-link"
            :to="{
              name: 'Detail',
              params: {
                id: sale.id
              }
          }">
            {{ sale.name }}
          </router-link>
      </li>
        <li>{{ sale.email }}</li>
        <li>{{ sale.phone }}</li>
        <li>{{ sale.status }}</li>
        <li><AppButton label="Fuck" :action="sortSales" /></li>
      </ul>
      <ul class="more-content">
        <li>{{ sale.notes }}</li>
      </ul>
  </article>
</section>
</template>

<script>
import AppButton from '@/components/Button.vue';

export default {
  name: 'List',
  components: {
    AppButton,
  },
  data() {
    return {
      sales: [
        {
          id: 1,
          name: 'Alex',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'nfl',
          status: 'Assigned',
          notes: 'This guy is a prick',
        },
        {
          id: 2,
          name: 'Chris',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'nhl',
          status: 'Contacted',
          notes: 'This guy is, in fact, also a prick',
        },
        {
          id: 3,
          name: 'Fucko',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'mlb',
          status: 'Scheduled',
          notes: 'An actually nice guy',
        },
        {
          id: 4,
          name: 'Your Mom',
          phone: '555-555-5555',
          email: 'test@test.com',
          type: 'pga',
          status: 'Fucked',
          notes: 'Goes to college',
        },
      ],
    };
  },
  methods: {
    sortSales() {
      this.sales.sort((a, b) => a.id + b.id);
    },
    testFunc(e){
      console.log(e);
    }
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
  padding:1rem 0;
  height:8rem;
  font-size:0;
  position:relative;
  overflow:hidden;
  transition:all 0.2s ease-out;
  border-top:1px solid darken($light-bg, 100%);
}
.row:hover {
  background-color:lighten($dark-bg, 10%);
  height:15rem;
  @media only screen and (max-width : 767px) {
    height:85px;
  }
  @media only screen and (max-width : 359px) {
    height:105px;
  }
}

.title {
  padding:20px 0 5px 0;
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
