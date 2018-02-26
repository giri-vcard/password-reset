<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">VCard ID</label>
            <div class="control">
                <input :class="['input', ($v.form.username.$error) ? 'is-danger' : '']" type="text" placeholder="Text input"
                       v-model="form.username">
            </div>
            <p v-if="$v.form.username.$error" class="help is-danger">This username is invalid. Must be at least 8 characters.</p>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'

    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    username: ''
                }
            }
        },
        validations: {
            form: {
                username: {
                    required,
                    minLength: minLength(8)
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