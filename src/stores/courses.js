import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
  const courses=ref([
  {
    names:"Computer Science",
    school:"School of Computing and Engineering",
    description:"Best Course for computer",
    intake:"July 2025",
  },
   {
    names:"Medicine",
    school:"School of Medicine and Surgery",
    description:"Best course for learning medicine",
    intake:"September 2025",
  },
   {
    names:"Data science & stats",
    school:"School of science",
    description:"Best course for learning data science",
    intake:"January 2026",
  },
  {
    names:"Mechanical Engineering",
    school:"School of Engineering",
    description:"Best course for learning Mechanical Engineering",
    intake:"April 2025",
  },
   {
    names:"Business & IT",
    school:"School of Bussiness & IT",
    description:"Best course for learning Business & IT",
    intake:"March 2026",
  },
   {
    names:"Architecture",
    school:"School of Architecture",
    description:"Best course for learning Architecture",
    intake:"May 2026",
  },
   { names:"Law",
    school:"School of law",
    description:"Best course for learning law",
    intake:"May 2026",
}
])

  return { courses }
})
