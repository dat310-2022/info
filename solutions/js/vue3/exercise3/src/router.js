const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
      // dynamic segments start with a colon
      { path: '/student/:student_no', component: studentC, props: true},
      { path: '/course/:course_id', component: courseC, props: true },
      { path: '/', component: mainC }
    ]
  })