<template>
    
    <div>
        <h2>You've Visited These States</h2>

        <div class="states-visited-container" v-for="state in statesVisited" v-bind:key="state.name"> -->
            
        </div>

    </div>

</template>


<script>
export default {
    name: 'StatesVisited',
    components: { 
        
    },
    data() {
        return {
            states: []
        }
    },
    mounted() {
        
    }
}

</script>


<style scoped>

</style>