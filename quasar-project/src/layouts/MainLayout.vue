<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          TalentHub Platform
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Početna</q-item-section>
        </q-item>
        <q-item to="/freelanceri" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>Freelanceri</q-item-section>
        </q-item>
        <q-item to="/kategorije_usluga" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="category" />
          </q-item-section>
          <q-item-section>Kategorije Usluga</q-item-section>
        </q-item>
        <q-item to="/narudzbe" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>
          <q-item-section>Narudžbe</q-item-section>
        </q-item>
        <q-item to="/o_nama" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>O Nama</q-item-section>
        </q-item>
        <q-item to="/login" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>
          <q-item-section>Login</q-item-section>
        </q-item>
        <q-item to="/registracija" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
          <q-item-section>Registracija</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
