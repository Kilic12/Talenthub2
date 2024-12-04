<template>
  <q-page class="q-pa-md">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="https://cdn.discordapp.com/attachments/486217640860450816/1313943978835443844/talenthub.jpg?ex=6751f930&is=6750a7b0&hm=2f25c06c5847d2e7534dedb742a0407cc9e40688b15246e93c78d4f5dea707ac&">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">
            O nama
          </div>
        </q-img>
      </q-card-section>
      <q-card-section class="text-h4 text-justify">
        {{ o_nama }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      o_nama: "Talenthub je online platforma koja povezuje freelancer-e sa potencijalnim klijentima. Platforma pruža razne usluge koje uključuju grafički dizajn, pisanje radova, prijevode, digitalni marketing, programiranje i druge slične usluge. TalentHub omogućuje klijentima da lako pronađu potrebne usluge koje nude freelancer-i te ih mogu zaposliti za određeni projekt ili narudžbu."
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
