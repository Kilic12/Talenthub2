<template>
  <q-page class="flex flex-center">
    <q-card class="registration-card" flat bordered>
      <q-card-section>
        <div class="text-h5">Registracija</div>
      </q-card-section>

      <q-card-section>
        <q-input
          filled
          v-model="name"
          label="Ime"
          clearable
        />
        <q-input
          filled
          v-model="email"
          label="E-mail"
          type="email"
          clearable
        />
        <q-input
          filled
          v-model="password"
          label="Lozinka"
          type="password"
          clearable
        />
        <q-input
          filled
          v-model="confirmPassword"
          label="Potvrdi lozinku"
          type="password"
          clearable
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Potvrdi" color="primary" @click="register" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const register = () => {
      if (name.value && email.value && password.value && confirmPassword.value) {
        if (password.value === confirmPassword.value) {
          alert(`Registracija uspešna za: ${name.value}`);
        } else {
          alert('Lozinke se ne poklapaju!');
        }
      } else {
        alert('Molimo popunite sva polja!');
      }
    };

    return {
      name,
      email,
      password,
      confirmPassword,
      register
    };
  }
};
</script>

<style>
.registration-card {
  width: 300px;
}
</style>
