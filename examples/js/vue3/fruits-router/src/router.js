let router = VueRouter.createRouter({
    // this will tell vue to use routes including #
    history: VueRouter.createWebHashHistory(),
    routes: [
      { path: '/', component: allC },
      { path: '/favorite', component: favoriteC},
    ]
});
