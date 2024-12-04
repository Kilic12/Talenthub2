<template>
  <q-page>
    <q-table
      :rows="narudzbe"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
  setup() {
    const narudzbe = [
      { id: 1, korisnik: "Petar Petrović", freelancer: "Marko Perić", datum: "2024-01-10", status: "Završeno" },
      { id: 2, korisnik: "Jelena Horvat", freelancer: "Ivana Kovačić", datum: "2024-01-15", status: "U obradi" }
    ]

    const columns = [
      { name: 'id', label: 'ID', field: 'id' },
      { name: 'korisnik', label: 'Korisnik', field: 'korisnik' },
      { name: 'freelancer', label: 'Freelancer', field: 'freelancer' },
      { name: 'datum', label: 'Datum Narudžbe', field: 'datum' },
      { name: 'status', label: 'Status', field: 'status' }
    ]

    return { narudzbe, columns }
  }
}
</script>
