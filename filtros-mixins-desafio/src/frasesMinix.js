export default {
    computed: {
        changeSpaces() {
            return this.frase.split(' ').join(',');
        },
        countWords() {
            return this.frase.split(' ').map(w => `${w} (${w.length})`).join(' ');
        }
    }
}