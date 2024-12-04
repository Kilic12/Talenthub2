<template>
  <q-page class="flex flex-center">
    <q-card class="login-card" flat bordered>
      <q-card-section>
        <div class="text-h5">Prijavite se</div>
      </q-card-section>

      <q-card-section>
        <q-input
          filled
          v-model="username"
          label="Korisničko ime"
          clearable
        />
        <q-input
          filled
          v-model="password"
          label="Lozinka"
          type="password"
          clearable
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Potvrdi" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const login = () => {
      if (username.value && password.value) {
        alert(`Prijavili ste se kao: ${username.value}`);
      } else {
        alert('Molimo popunite sva polja!');
      }
    };

    return {
      username,
      password,
      login
    };
  }
};
</script>

<style>
.login-card {
  width: 300px;
}
</style>
