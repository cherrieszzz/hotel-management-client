import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: () => (
        {
            username: 'Gatsby',
            email: 'greenteacore@outlook.com',
            isAuth: false
        }
    ),
    actions: {
        login() {
            this.isAuth = true;
        },
        logout() {
            this.isAuth = false;
        }
    }
})