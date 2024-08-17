const logged = true;

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path !== "/login" && !logged) {
        return navigateTo("/login");
    }
});