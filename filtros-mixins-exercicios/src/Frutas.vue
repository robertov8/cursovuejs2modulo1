<template>
    <div>
        <input type="text" v-model="fruta" @keydown.enter="add">
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Frutas',
        data() {
            return {
                fruta: '',
                frutas: ['banana', 'maça', 'laranja']
            };
        },
        methods: {
            add() {
                this.frutas.push(this.fruta);
                this.fruta = '';
            }
        }
    };
</script>

<style scoped>

</style>