<template>
    <v-app>
        <NavigationDrawer />

        <Toolbar />

        <Content />

        <Footer />
    </v-app>
</template>

<script>
    import NavigationDrawer from "@/components/template/NavigationDrawer";
    import Toolbar from "@/components/template/Toolbar";
    import Content from "@/components/widgets/Content";
    import Footer from "@/components/template/Footer";

    export default {
        components: {
            Footer,
            NavigationDrawer,
            Toolbar,
            Content
        }
    }
</script>
