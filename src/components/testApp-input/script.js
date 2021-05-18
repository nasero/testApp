/**
 * Input
 */
export default {
    name: 'testApp-input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: String,
        placeholder: String,
        validations: String,
        inputAlias: String,
        name: String,
        inputId: String
    },
    methods: {
        emitValue (event) {
            this.$emit('testApp-input-value', event.target.value.trim());
        }
    }
};
