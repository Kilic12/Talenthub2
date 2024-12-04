<template>
  <q-page class="q-pa-md">
    <q-table
      title="Popis knjiga"
      :rows="books"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
  setup() {
    const books = [
      { id: 1, naslov: "Na Drini ćuprija", autor: "Ivo Andrić", opis: "Kratki opis", stanje: "10" },
      { id: 2, naslov: "Ana Karenjina", autor: "Lav Tolstoj", opis: "Kratki opis", stanje: "7" },
    ];

    const columns = [
      { name: "id", label: "ID", align: "left", field: "id" },
      { name: "naslov", label: "Naslov", align: "left", field: "naslov" },
      { name: "autor", label: "Autor", align: "left", field: "autor" },
      { name: "opis", label: "Opis", align: "left", field: "opis" },
      { name: "stanje", label: "Stanje", align: "left", field: "stanje" },
    ];

    return { books, columns };
  },
};
</script>
