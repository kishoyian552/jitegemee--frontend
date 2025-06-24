<script setup>
import {ref} from "vue"

    const events=ref([
      {
        names:"community outreach at nothern kenya",
        images:"../../public/images/events/community.jpg",
        date:"july 6th 2025",
        location:"northern kenya school",
        category:"community Outreach"
      },
      { names:"inter club sport",
        images:"../../public/images/events/sport image.jpg",
        date:"30th june",
        location:"sport complex",
        category:"clubs"
      },
      { names:"ict club visit to konza ",
        images:"../../public/images/events/ict.jpg",
        date:"28th june",
        location:" ilab africa",
        category:"clubs"
      },
      { names:"worship experience",
        images:"../../public/images/events/church image.jpg",
        date:"1st may",
        location:"malindi",
        category:"religion"
      }
    ])
</script>

<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="event in events" :key="event">
        <v-card
    class="mx-auto"
    max-width="400"
    color="#546E7A"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.images"
      cover
    >
      <v-card-title>{{ event.names }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ event.date }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ event.location }}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :text="event.category"></v-btn>

      <v-btn color="green" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>