<template>
    <div class ="accidentReport">
        <form @submit.prevent="onSubmit" style="border-style: solid; border-width: medium; background: grey">
          
        <div>What is the slow down?: {{ selected }}</div>

        <select v-model="form.traffic">
            <option default value="accident">Accident</option>
            <option value="roadWork">Road Work</option>
            <option value="event">Campus Event</option>
        </select>

          <label for="location">Longitude:</label>
          <input 
            v-model="form.longitude"
            class="form-control"
            type="location"
            required
          />
          <label for="location">Latitude:</label>
          <input 
            v-model="form.latitude"
            class="form-control"
            type="location"
            required
          />
          

          <button> Submit </button>
        </form>
    </div>
</template>

<script>
import { createAccident } from '@/db'
import { reactive } from "vue"
export default {
    setup() {
        const form = reactive({latitude: '',longitude: '', traffic: ''})

        const onSubmit = async () => {
            await createAccident({ ...form})
            form.traffic = ''
            form.latitude = ''
            form.longitude = ''
            
        }

        return { form, onSubmit }
    }
}
</script>