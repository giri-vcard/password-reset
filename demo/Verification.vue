<template>
    <div class="card" style="margin: 3rem">
        <header class="card-header">
            <p class="card-header-title">
                Verification
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
        </header>
        <div class="card-content">

            <div class="field">
                <label class="label">Input 6 digits verification code send to your registered phone number</label>
                <div class="control">
                    <input :class="['input', ($v.form.code.$error) ? 'is-danger' : '']" type="text" placeholder="Verification Code"
                           v-model="form.code">
                </div>
                <p v-if="$v.form.code.$error" class="help is-danger">The code is invalid</p>
                <p v-if="isCodeValid" class="help is-success">Code is Valid</p>
            </div>

        </div>
        <footer class="card-footer">
            <a class="card-footer-item" @click="verifyCode">Verify Code</a>
        </footer>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'

    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    code: '',
                },
                isCodeValid: false
            }
        },
        validations: {
            form: {
                code: {
                    required,
                    minLength: minLength(6)
                }
            }
        },
        watch: {
            $v: {
                handler: function (val) {
                    if(!val.$invalid) {
                    } else {
                        this.isCodeValid = false;
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

        methods: {
            verifyCode() {
                console.log('err', this.$v.form.$error);
                if(!this.$v.form.$error) {
                    this.isCodeValid = true;
                    this.$emit('can-continue', {value: true});
                }
            }
        },

        mounted() {
//            this.$emit('can-continue', {value: true})
        }
    }
</script>