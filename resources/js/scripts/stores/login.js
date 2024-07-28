import { defineStore } from 'pinia';
import { useForm } from '@inertiajs/vue3';

export const useLoginStore = defineStore('loginStore', {
    state: () => ({
        form: useForm({
            email: '',
            password: '',
            remember: false,
        }),
        id: null,
    }),
    actions: {
        submit() {
            this.form
                .transform((data) => ({
                    ...data,
                    remember: data.remember ? 'on' : '',
                }))
                .submit('post', route('login'), {
                    onSuccess: () => {
                        this.form.reset();
                    },
                });
        },
    },
});
