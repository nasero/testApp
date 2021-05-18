/**
 * Botón general
 */
export default {
    name: 'testApp-button',
    props: {
        text: String,
        type: {
            type: String,
            default: 'button'
        },
        maxWidth: Boolean,
        disableButton: Boolean
    },
    methods: {
        buttonClicked () {
            this.$emit('testApp-button-clicked');
        }
    }
};
