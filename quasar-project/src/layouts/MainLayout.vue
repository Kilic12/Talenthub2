<template>
  <q-layout view="hHh lpR fFf">
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
        <q-toolbar-title class="text-h5 text-weight-bold">
          Talenthub
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>Izbornik</q-item-label>

        <q-item v-for="link in linksList" :key="link.title" clickable :to="link.link">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>{{ link.caption }}</q-item-label>
          </q-item-section>
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

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  { title: 'Naslovnica', caption: 'Početna stranica', icon: 'home', link: '/' },
  { title: 'Popis usluga', caption: 'Pregled svih knjiga', icon: 'menu_book', link: '/popis_knjiga' },
  { title: 'Pretraživanje', caption: 'Pronađite knjigu', icon: 'search', link: '/pretrazivanje' },
  { title: 'O nama', caption: 'Informacije o knjižnici', icon: 'info', link: '/o_nama' },
  { title: 'Lokacija', caption: 'Naša lokacija', icon: 'location_on', link: '/lokacija' },
  { title: 'Login', caption: 'Prijava korisnika', icon: 'login', link: '/login' },
  { title: 'Registracija', caption: 'Kreirajte račun', icon: 'person_add', link: '/registracija' },
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
