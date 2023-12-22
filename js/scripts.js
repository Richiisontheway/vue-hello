const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
        }
    },
    methods: {
        getPClasses() {
            return 'py-4 bg-success';
        },
        sayHi() {
            alert('Ciao user!');
        },
        printTextInConsole() {
            console.log(this.text);
            console.log(this.getPClasses());
        }
    }
}).mount('#app');
