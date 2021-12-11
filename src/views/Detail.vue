<template>
<div>
  <h1>{{ detail.name }}</h1>
  <p>{{ detail.phone }}</p>
  <p>{{ detail.email }}</p>
  <textarea v-model="detail.notes" rows="4" cols="50"></textarea>
  <br>
  <router-link to="/list">Back</router-link>
</div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      required: true,
    },
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
  computed: {
    detail() {
      return this.sales.find((e) => +e.id === +this.id);
    },
  },
};
</script>

<style>

</style>
