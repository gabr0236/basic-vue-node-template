<template>
  <div>
    <h1>This is page1</h1>
    <button
        class="border-2 mt-4 border-cyan-500 rounded p-2 hover:bg-red-300 mr-4" @click="getResult"
    >
      TEST
    </button>
    <button
        class="border-2 mt-4 border-red-300 rounded p-2 hover:bg-cyan-500 mr-4" @click="getResult2"
    >
      TEST2
    </button>
    <div class="mt-5">
      {{ result }}
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios'

const result = ref('');

const getResult = async () => {
  const response = await axios.get('http://localhost:3000/');
  result.value = response.data;
};

const getResult2 = async () => {
  const response = await axios.get('http://localhost:3000/api/some-resources/4');
  result.value = response.data;
};

</script>

<style></style>
