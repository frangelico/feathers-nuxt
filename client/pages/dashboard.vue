<template>
  <section>
    <navigation />
    <h1>Dashboard</h1>
    <p>This section requires user authentication and admin righsts.</p>
    <button @click.prevent="exit">Logout</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/navigation';

export default {
  name: 'Dashboard',
  components: { Navigation },
  middleware: ['admin'],
  methods: {
    ...mapActions('auth', ['logout']),
    async exit() {
      await this.logout();
      this.$router.push('/');
    }
  }
}
</script>
