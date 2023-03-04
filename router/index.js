import ChatRoom from "../views/ChatRoom/index.vue";

const routes = [{ path: "/", component: ChatRoom }];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
