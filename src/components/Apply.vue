<script setup>
import { useCoursesStore } from '../stores/courses'

const coursesStore= useCoursesStore() 
const courses= coursesStore.courses

//const updateSelectedCourse =courses.find(course => course.id == coursesStore.selectedCourse);

// models (to  uniquely each text field)
const firstName=defineModel('firstName')
const middleName=defineModel('middleName') 
const lastName=defineModel('lastName')
const emailAddress=defineModel('emailAddress')
const phoneNumber=defineModel('phoneNumber')
const PhysicalAddress=defineModel('physicalAddress')
const gender=defineModel('gender')
const dob= defineModel('dob')
const nationality=defineModel('nationality')
//object to hold
const applicationFormDetails= ref({
  firstName:firstName,
  middleName:middleName,
  lastName:lastName,
  emailAddress:emailAddress,
  phoneNumber:phoneNumber,
  physicalAddress:PhysicalAddress,
  gender:gender,
  dob:dob,
  nationality:nationality,
  courses:selectedCourse
})
//function to save data
function savedata(){
  for(let item in applicationFormDetails.value){
    console.log(applicationFormDetails.value[item])
  }
}

</script>

<template>
  <v-container>
    <v-row>
      <p> You are applying for
         , the next intake is in</p>
    </v-row>
  </v-container>
  <!--Apply-->
  <!--first name,middle name,last name-->
  <v-container>
    <v-row>
      <v-col md="4">
          <v-text-field label="First Name" v-model ="firstName"></v-text-field>
      </v-col>
      <v-col md="4">
          <v-text-field label="First Name"v-model ="middleName" ></v-text-field>
      </v-col>
      <v-col md="4">
          <v-text-field label="First Name"v-model ="lastName" ></v-text-field>
      </v-col>
    </v-row>
    <!--email,phone,pysical address-->
    <v-row>
      <v-col md="4">
          <v-text-field label="Email Address" v-model ="emailAddress"></v-text-field>
      </v-col>
      <v-col md="4">
          <v-text-field label="Phone Number" v-model ="phoneNumber"></v-text-field>
      </v-col>
      <v-col md="4">
          <v-text-field label="Physical Address" v-model ="PhysicalAddress"></v-text-field>
      </v-col>
    </v-row>
    <!--gender,date of birth,nationality-->
    <v-row>
      <v-col md="4">
          <v-text-field label="Gender" v-model ="gender"></v-text-field>
      </v-col>
      <v-col md="4">
          <v-text-field label="Date of birth" v-model ="dateofBirth"></v-text-field>
      </v-col>
      <v-col md="4">
          <v-text-field label="Nationality"v-model ="nationality" ></v-text-field>
      </v-col>
    </v-row>
<v-row>
  <v-btn block color="primary" @click="savedata()">submit</v-btn>
</v-row>

  </v-container>
</template>