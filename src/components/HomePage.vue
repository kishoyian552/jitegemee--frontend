<script setup>

</script>

<template>
  <!--rotating images-->
  <v-carousel>
  <v-carousel-item
    src="../../public/images/rut-miit-BcEmfG0xKrc-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg"
    cover></v-carousel-item> 
  

  <v-carousel-item
    src="../../public/images/rut-miit-JY9bBAcs0vs-unsplash.jpg"
    cover> 
  ></v-carousel-item>

   <v-carousel-item
    src="../../public/images/yuvraj-singh-LTn4LhsxzZs-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

  <!--latest from jitegemee-->
  <v-container>
     <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="'From Milestone to Mission'"
        text="'Go confidently in the direction of your dreams. Live the life you have imagined. – Prize Wise"
        title="Graduation"
        color="#546E7A"
      ></v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="#546E7A">
        <template v-slot:title>
          Sport
        </template>

        <template v-slot:subtitle>
          'Chasing Greatness, One Game at a Time'
        </template>

        <template v-slot:text>
         "Champions aren't made in gyms. They are made from something deep inside — a desire, a dream, and a vision." – Muhammad Ali
        </template>
      </v-card>

     
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="#546E7A">
        <v-card-item>
          <v-card-title>Club Ict</v-card-title>

          <v-card-subtitle>'Your Gateway to the Tech Universe'</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          "The best way to predict the future is to invent it." – Alan Kay
        </v-card-text>
      </v-card>

     
    </v-col>
  </v-row>
  </v-container>
  <!--partners-->
  <v-container>
    <v-row>  
     <v-col cols="12" md="2">
     <v-img src="../../public/images/delloitte logo.png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
     <v-img src="../../public/images/Google-02-01-400x280.png "></v-img>
      </v-col>
      <v-col cols="12" md="2">
     <v-img src="../../public/images/SAF-MAIN-LOGO-400x280.png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
     <v-img src="../../public/images/dubai logo.png"></v-img>
      </v-col>
      <v-col cols="12" md="2">
     <v-img src="public/images/events/Booking_Com_Logo.svg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>