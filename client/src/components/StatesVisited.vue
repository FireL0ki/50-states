<template>
    
    <div>
        <h2>You've Visited These States</h2>

        <div class="states-visited-container">
            <ul>
                <!-- Why is this not showing up? -->
                <li v-for="state in statesVisited" v-bind:key="state.name"
                    v-bind:state="state"
                    v-on:get-all-visited="getAllVisited">WORDS {{ state }}</li>
            </ul>

        </div>

    </div>

</template>


<script>
export default {
    name: 'StatesVisited',
    components: { 
        //needed?
    },
    data() {
        return {
            statesVisited: [] // how do I get the array of statesVisited from the request getAllVisited()?
        }
    },
    mounted() {
        this.getAllVisited()
    },
    methods: {
        getAllVisited() {
            this.$stateService.getVisited().then ( states => {
                this.states = states
        }).catch( err => {
                alert('Sorry, can\'t fetch states visited list')
                console.error(err)
            })
        }
    }
}

</script>


<style scoped>

.states-visited-container {
    color: darkblue;
    height: 10em; 
}

</style>