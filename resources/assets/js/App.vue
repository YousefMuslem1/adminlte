<template>
    <div>
        <router-view></router-view>
    </div>

</template>

<script>
    import ExampleComponent from "./components/ExampleComponent";
    export default {
        components: {
            ExampleComponent
        }
    }
</script>
