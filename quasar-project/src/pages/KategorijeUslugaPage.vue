<template>
  <q-page>
    <q-list>
      <q-item v-for="kategorija in kategorije" :key="kategorija.id">
        <q-item-section>{{ kategorija.naziv }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  setup() {
    const kategorije = [
      { id: 1, naziv: "Web razvoj" },
      { id: 2, naziv: "Pisanje i prevođenje" }
    ]

    return { kategorije }
  }
}
</script>
