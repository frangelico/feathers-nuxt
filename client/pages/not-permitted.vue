<template>
  <section>
    <navigation />
    <h1>No Permissions</h1>
    <p>You do not have the correct rights and permissions.</p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/navigation';

export default {
  name: 'Not-Permitted',
  components: { Navigation },
  methods: {}
}
</script>
