const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/freelanceri', component: () => import('pages/FreelanceriPage.vue') },
      { path: '/kategorije_usluga', component: () => import('pages/KategorijeUslugaPage.vue') },
      { path: '/narudzbe', component: () => import('pages/NarudzbePage.vue') },
      { path: '/o_nama', component: () => import('pages/ONamaPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/registracija', component: () => import('pages/RegistracijaPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;
