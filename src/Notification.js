export default {
    props: ['message'],
    template: `
        <div><h1>{{ notification }}</h1></div>
    `,
    computed: {
        notification() {
            return this.message.toUpperCase();
        }
    }
}
