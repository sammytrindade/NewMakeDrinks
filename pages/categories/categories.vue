<template>
    <div>
        Página categorias exibe: {{ idParams }}
        <categories />
        <IconsFacebook />

    </div>

</template>
<script setup>

const route = useRoute();
const idParams = computed(() => route.params.id);

</script>