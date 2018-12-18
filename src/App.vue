<template>
    <div id="app">
        <router-view/>

    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    html {
        height: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #FFFEFC;

        height: 100%;
    }
#app{
    font-family: 'B612', sans-serif;

}
</style>
