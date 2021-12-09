<template>
    <div>
        <!-- v-bind:key binds is a value that is unique for each individual object -->
        <p v-for="state in states" v-bind:key="state.name"> 
            {{ state.name }}
        </p>
    </div>
</template>


<script>

export default {
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then ( states => {
                this.states = states
            })
        }
    }
}
</script>


<style scoped>

</style>