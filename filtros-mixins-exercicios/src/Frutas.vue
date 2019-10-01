<template>
    <div>
        <h1>{{ global }}</h1>

        <input type="text" v-model="fruta" @keydown.enter="add">

        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta}}</li>
        </ul>
    </div>
</template>

<script>
    import frutasMixin from './frutasMixin';
    import usuarioMixin from './usuarioMixin';

    export default {
        created() {
            console.log('Created - Frutas.vue!');
        },
        mixins: [frutasMixin, usuarioMixin],
    };
</script>

<style scoped>

</style>