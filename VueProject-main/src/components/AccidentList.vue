<template>
    <div>
        <div class="markers">
            <google-map>
                <div v-for="{ id, latitude, longitude, traffic} in accidents" :key="id">
                    const myLatLng = { lat: {{ latitude }}, lng: {{ longitude }} };
                    new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title= {{ traffic }}
                    });  
                </div>
            </google-map>   
            
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
    for(){

    }
    
}
</script>