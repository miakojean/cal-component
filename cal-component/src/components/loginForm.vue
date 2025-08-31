<template>
    <form action="">
        <inputFamily
            v-for="(field, index) in myFields"
            :key="index"
            :label="field.name"
            :id="label"
        />
    </form>
</template>

<script>
import inputFamily from './inputFamily.vue';
export default {

    components:{
        inputFamily,
    },

    props:{
        
    },

    setup() {
        const myFields = [
            {name:'Nom de famille', type:'text',},
            {name: 'Prenoms'}
        ]

        return {myFields}
    }

}
</script>

<style>

</style>