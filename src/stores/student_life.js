import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the Books:A journey through student life ",
                image: "../images/ahnaf-tahsin-ZbZuNj1j414-unsplash potait 3.jpg",
                description: "Mary ",
            },
            {
                id: 2,
                title: "Study.chill.repeat.life at its best",
                image: "../images/happy-birthday-party-drinking-champagne square.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
             { id: 3,
                title: "Study.chill.repeat.life at its best",
                image: "../images/happy-birthday-party-drinking-champagne square.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
             { id: 4,
                title: "Study.chill.repeat.life at its best",
                image: "../images/hrushi-chavhan-s5vr9TVunR8-unsplash comp.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
             { id: 5,
                title: "Study.chill.repeat.life at its best",
                image: "../images/lead the way.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
             { id: 6,
                title: "Study.chill.repeat.life at its best",
                image: "../images/manuelthelensman-gwpElDVmBvQ-unsplash potrait.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
              {id: 7,
                title: "Study.chill.repeat.life at its best",
                image: "../images/vadim-morozov-_uRFTXc6Xso-unsplash basketball.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
              {id: 8,
                title: "Study.chill.repeat.life at its best",
                image: "../images/mometrix-test-prep-ugXAdG6tJgo-unsplash phone.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
                {id: 9,
                title: "Study.chill.repeat.life at its best",
                image: "../images/kawe-rodrigues-8e1olG4hRR0-unsplash drawing.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
              {id: 10,
                title: "Study.chill.repeat.life at its best",
                image: "../images/hrushi-chavhan-s5vr9TVunR8-unsplash comp.jpg",
                description: "creating a mantra to increase your output in class can be beneficial ",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})
