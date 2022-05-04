<template>
    
</template>

<script>
import { useLoadAccidents, deleteAccidents } from "@/db"
export default {
    setup() {
        const accidents = useLoadAccidents()
        return{accidents, deleteAccidents}
    }
}
</script>