<template>
  <q-page>
    <q-table
      :rows="freelanceri"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
  setup() {
    const freelanceri = [
      { id: 1, ime: "Marko Perić", email: "marko@example.com", opis: "Web developer", kategorija: "Web razvoj" },
      { id: 2, ime: "Ivana Kovačić", email: "ivana@example.com", opis: "Pisac sadržaja", kategorija: "Pisanje i prevođenje" }
    ]

    const columns = [
      { name: 'id', label: 'ID', field: 'id' },
      { name: 'ime', label: 'Ime', field: 'ime' },
      { name: 'email', label: 'Email', field: 'email' },
      { name: 'opis', label: 'Opis', field: 'opis' },
      { name: 'kategorija', label: 'Kategorija', field: 'kategorija' }
    ]

    return { freelanceri, columns }
  }
}
</script>
