<template>
    <v-app>
        <NavigationDrawer />

        <Toolbar />

        <Content />

        <Footer />
    </v-app>
</template>

<script>
    import NavigationDrawer from "./NavigationDrawer";
    import Toolbar from "../Toolbar";
    import Content from "./Content";
    import Footer from "./Footer";

    export default {
        components: {
            Footer,
            NavigationDrawer,
            Toolbar,
            Content
        }
    }
</script>
