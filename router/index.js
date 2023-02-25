import Chatroom from "../views/Chatroom/index.vue";

const routes = [{ path: "/", component: Chatroom }];


const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router