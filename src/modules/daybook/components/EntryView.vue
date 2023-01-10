<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">
    <!-- Title -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2023, lunes</span>
    </div>
    <div class="entry-description">
        Incididunt in aliqua sunt commodo in ex in est pariatur ex qui elit. Exercitation adipisicing in consequat qui. Qui qui sit amet est sunt. Cupidatat proident amet ipsum nostrud incididunt elit veniam aute nostrud amet reprehenderit magna dolore.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-out;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>