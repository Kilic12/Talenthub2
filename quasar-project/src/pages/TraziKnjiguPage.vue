<template>
  <q-page padding>
    <q-input
      v-model="searchQuery"
      label="Pretraži knjige"
      hint="Pretraži po naslovu ili autoru"
      clearable
    />

    <q-option-group
      v-model="searchBy"
      :options="options"
      label="Pretraži po"
      inline
    />

    <q-btn label="Traži" @click="searchBooks" color="primary" />

    <q-table
      v-if="filteredBooks.length > 0"
      :rows="filteredBooks"
      :columns="columns"
      row-key="id"
      title="Rezultati pretraživanja"
    />

    <div v-else class="text-subtitle1 q-mt-lg">
      Nema rezultata pretraživanja.
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');
    const searchBy = ref('title');
    const books = ref([
      { id: 1, title: 'Na Drini ćuprija', author: 'Ivo Andrić', description: 'Opis knjige', state: 'Dostupno' },
      { id: 2, title: 'Ponos i predrasude', author: 'Jane Austen', description: 'Roman o ljubavi', state: 'Dostupno' },
      { id: 3, title: '1984', author: 'George Orwell', description: 'Distopijski roman', state: 'Nije dostupno' }
    ]);

    const filteredBooks = ref([]);
    const columns = [
      { name: 'title', label: 'Naslov', align: 'left', field: 'title' },
      { name: 'author', label: 'Autor', align: 'left', field: 'author' },
      { name: 'description', label: 'Opis', align: 'left', field: 'description' },
      { name: 'state', label: 'Stanje', align: 'left', field: 'state' }
    ];

    const options = [
      { label: 'Naslov', value: 'title' },
      { label: 'Autor', value: 'author' }
    ];

    const searchBooks = () => {
      filteredBooks.value = books.value.filter((book) =>
        book[searchBy.value].toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    };

    return {
      searchQuery,
      searchBy,
      books,
      filteredBooks,
      searchBooks,
      columns,
      options
    };
  }
};
</script>
