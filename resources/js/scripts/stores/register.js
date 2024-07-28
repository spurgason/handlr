import { defineStore } from 'pinia';
import { useForm } from '@inertiajs/vue3';

export const useRegisterStore = defineStore('registerStore', {
    state: () => ({
        form: useForm({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }),
    }),
    actions: {
        submit() {
            this.form
                .transform((data) => ({
                    ...data,
                }))
                .submit('post', route('register'), {
                    onSuccess: () => {
                        this.form.reset();
                    },
                });
        },
    },
});
