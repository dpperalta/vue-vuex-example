<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input 
            type="text"
            class="form-control"
            placeholder="Buscar entrada"
            v-model="termn"
        />
    </div>
    <div 
        class="mt-2 d-flex flex-column"
        @click="$router.push({ name: 'entry', params: { id: 'new' } })">
        <button class="btn btn-primary mx-3">
            <i class="fa fa-plus-circle"></i>
            Nueva entrada
        </button>
    </div>
    <div class="entry-scrollarea">
        <EntryComponent 
            v-for="entry in entriesByTermn"
            :key="entry.id"
            :entry="entry"
        />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
export default {
    components: {
        EntryComponent: defineAsyncComponent(() => import("./EntryComponent.vue")),
},
    computed: {
        ...mapGetters('journal', ['getEntriesByTermn']),
        entriesByTermn() {
            return this.getEntriesByTermn(this.termn)
        }
    },
    data() {
        return {
            termn: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .entry-list-container {
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
        height: calc(100vh - 100px);
        overflow: scroll;
    }
</style>