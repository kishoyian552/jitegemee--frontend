import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
            {
                id: 2,
                title: "",
                image: "public/images/library/book 2.jpg",
                description: "",
            }, 
                {id: 3,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
                {id: 4,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },  
               {id: 5,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            }, 
                {id: 6,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
                {id: 7,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
                {id: 8,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
                {id: 9,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
                {id: 10,
                title: "computerr science",
                image: "public/images/library/book 1.jpg",
                description: "",
            },
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})
