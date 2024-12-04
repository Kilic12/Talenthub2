<template>
  <q-page class="q-pa-md">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="https://cdn.discordapp.com/attachments/399927078490865674/1313957481780740170/talenthub-poboljsanaSlika.png?ex=675205c3&is=6750b443&hm=e48dc649c6171795d0f2675471b8afe95d15ebd1a54212bf025bf5d738739a78&">
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
