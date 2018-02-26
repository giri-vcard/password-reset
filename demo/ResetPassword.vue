<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input :class="['input', ($v.form.password.$error) ? 'is-danger' : '']" type="password" placeholder="Password"
                       v-model="form.password">
            </div>
        </div>
        <div class="field">
            <label class="label">Repeat Password</label>
            <div class="control">
                <input :class="['input', ($v.form.repeatPassword.$error) ? 'is-danger' : '']" type="password" placeholder="Repeat Password"
                       v-model="form.repeatPassword">
            </div>
            <p v-if="$v.form.repeatPassword.$error" class="help is-danger">Password not matching</p>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import { required, sameAs } from 'vuelidate/lib/validators'

    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    password: '',
                    repeatPassword: ''
                }
            }
        },
        validations: {
            form: {
                password: {
                    required
                },
                repeatPassword: {
                    sameAsPassword: sameAs('password')
                }
            }
        },
        watch: {
            $v: {
                handler: function (val) {
                    if(!val.$invalid) {
                        this.$emit('can-continue', {value: true});
                    } else {
                        this.$emit('can-continue', {value: false});
                        setTimeout(()=> {
                            this.$emit('change-next', {nextBtnValue: false});
                        }, 3000)
                    }
                },
                deep: true
            },

            clickedNext(val) {
                console.log(val);
                if(val === true) {
                    this.$v.form.$touch();
                }
            }
        },
        mounted() {
            if(!this.$v.$invalid) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
        }
    }
</script>