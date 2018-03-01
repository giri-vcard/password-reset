<template>
    <div id="app">
        <!--Example dependecies-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css">

        <!--Example Elements-->
        <section class="hero">
            <div class="hero-body" style="padding: 1rem 0">
                <div class="container">
                    <div class="columns">
                        <div class="" style="display: inline-flex; align-items: center;margin: 0 auto;">
                            <div class="is-pulled-left">

                                <img class="data-uri-example" title="VCARD" src="data:image/jpeg;base64,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" alt="VCARD">

                            </div>
                            <div class="is-pulled-left" style="text-align: left">
                                <h1 class="title text-medium-grey" style="margin-bottom: .5rem; margin-left: 1.2rem">
                                    PASSWORD RESET
                                </h1>
                                <hr class="is-marginless">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="padding-top: .5rem">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <horizontal-stepper :steps="demoSteps" @completed-step="completeStep" :top-buttons="false"
                                            @active-step="isStepActive" @stepper-finished="alert"></horizontal-stepper>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <strong>VCard Account Password Reset</strong>
                    </p>
                    <p>
                        <small>Copyright 2018</small>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import HorizontalStepper from '../src/HorizontalStepper2.vue';

    import StepOne from './SubmitVcard.vue';
    import StepTwo from './Verification.vue';
    import StepThree from './ResetPassword.vue';


    export default {
        name: 'app',
        components: {
            HorizontalStepper
        },
        data(){
            return {
                demoSteps: [
                    {
                        icon: 'mail',
                        name: 'first',
                        title: 'Submit VCard ID',
                        subtitle: 'Submit your VCard ID',
                        component: StepOne,
                        completed: false

                    },
                    {
                        icon: 'report_problem',
                        name: 'second',
                        title: 'Verification',
                        subtitle: 'Input verification code',
                        component: StepTwo,
                        completed: false
                    },
                    {
                        icon: 'announcement',
                        name: 'third',
                        title: 'Reset Password',
                        subtitle: 'Input new password',
                        component: StepThree,
                        completed: false
                    }
                ],
                activeStep: 0,
                verifyCode: '',
                requestId: ''
            }
        },
        computed: {},
        methods: {
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            alert(payload) {
                console.log('alert', payload);
            }
        }
    }
</script>

<style scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .pointer {
        cursor: pointer;
    }

    h1, h2 {
        font-weight: normal;
    }

    hr {
        background-color: transparent;
        border: none;
        display: block;
        height: inherit;
        margin: 1.5rem 0;
        border-top: dashed 1px;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #0b99b9;
        text-decoration: underline;
    }

    .text-medium-grey {
        color: #333;
    }

    .text-light-grey {
        color: #888;
    }

    .box.formated {
        position: relative;
        padding: 0;
    }

    .box.formated .heading {
        font-size: 1rem;
        text-transform: capitalize;
        padding: .8rem 1.5rem;
        background-color: #fafafa;
    }

    .box.formated .content {
        padding: 1rem 2rem;
    }

    i.top-left {
        position: absolute;
        left: 1.5rem;
        top: 0.8rem;
    }

    .vertical-separator {
        display: flex;
        justify-content: space-around;
    }

    .vertical-separator .line {
        border-right: 1px solid #cccccc;
    }

    .card-header-title {
        text-align: center;
    }
</style>
