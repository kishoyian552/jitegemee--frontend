<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#546E7A">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      "At this university, every challenge is an opportunity, every question a doorway to discovery. As you walk these halls, remember that you're not just earning a degree—you’re shaping your future, forging your character, and building the skills to change the world. Stay curious, stay driven, and never underestimate the power of your potential. The journey may be long, but every step forward is a victory."
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Jitegemee</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>