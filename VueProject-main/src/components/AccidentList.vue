<template>
    <div>
        <div class="markers">
            
                <div v-for="{ id, latitude, longitude, traffic} in accidents" :key="id">
                
                    new google.maps.Marker({
                    position: { lat: {{ latitude }}, lng: {{ longitude }} },
                    map,
                    title= {{ traffic }}
                    });
                     
                </div>
               
            
        </div>
    </div>
</template>

<script>
import { useLoadAccidents, deleteAccident } from "@/db"
export default {
    setup() {
        const accidents = useLoadAccidents()
        return{accidents, deleteAccident}
    },
    
    
}
</script>