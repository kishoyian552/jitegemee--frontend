import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
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

  return { events }
})
