import { defineStore } from 'pinia';
import { useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';

export const useForgotPasswordStore = defineStore('forgotPassword', {
    state: () => ({
        form: useForm({
            token: '',
            email: '',
            password: '',
            password_confirmation: '',
        }),
    }),
    actions: {
        init(forgotPassword) {
            onMounted(() => {
                this.form.defaults(forgotPassword).reset();
            });
        },

        submit() {
            this.form
                .transform((data) => ({
                    ...data,
                }))
                .submit('post', route('password.store'), {
                    onSuccess: () => {
                        this.form.reset();
                    },
                });
        },
    },
});
