<template>
  <section class="overflow-hidden">
    <section
      class="h-[calc(100vh-6rem)]"
      :style="{ backgroundImage: `url(${backgroundHeroLight})` }"
    >
      <div>
        <div class="container flex flex-col justify-center items-start h-36">
          <a href="/">
            <h1 class="font-sans font-bold text-4xl">
              syaad.<span class="text-2xl">dev</span>
            </h1>
          </a>
        </div>
      </div>
      <div class="container mx-auto h-[calc(100%-9rem)]">
        <div class="flex gap-2 flex-col lg:flex-row h-full">
          <div class="flex flex-col justify-center mb-16">
            <h1 class="font-serif font-bold text-6xl">Irsyaad Budi 👋</h1>
            <div class="flex items-center gap-2 mt-6">
              <div class="h-0.5 bg-slate-800 w-24"></div>
              <p class="fonts-sans font-light text-xl">Frontend Engineer</p>
            </div>
            <p class="lg:w-96 text-gray-500 my-8">
              Hello! I'm an experienced Software Engineer with over
              {{ yearsOfCareer() }} years of industry experience. Let's
              collaborate!
            </p>
            <div class="flex gap-4">
              <button
                class="h-16 py-4 px-14 text-center bg-primary font-bold text-xl"
                @click="handleContact"
              >
                Lets Talk
              </button>
              <!-- <button class="font-bold underline underline-offset-1 text-xl">
                Download CV
              </button> -->
            </div>
          </div>
          <div class="flex justify-end flex-1 items-end">
            <img
              :src="heroImg"
              style="aspect-ratio: 1/1; width: 85%"
              class="-mb-4"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen bg-[#F1F3F5] relative flex">
      <div
        class="h-20 bg-primary border-t border-b border-black"
        style="
          transform: rotateZ(-3deg);
          position: absolute;
          top: -0.25rem;
          right: -1rem;
          left: -1rem;
        "
      >
        <div class="flex items-center justify-between h-full px-12">
          <h3 class="text-4xl font-serif font-bold">Web Development</h3>
          <h3
            class="text-7xl text-white"
            style="
              font-family: 'Sora', sans-serif !important;
              margin-bottom: -2rem;

              -webkit-text-stroke: 2px #1d1d1d;
            "
          >
            *
          </h3>
          <h3 class="text-4xl font-serif font-bold">Mobile Apps Development</h3>
          <h3
            class="text-7xl text-white"
            style="
              font-family: 'Sora', sans-serif !important;
              margin-bottom: -2rem;

              -webkit-text-stroke: 2px #1d1d1d;
            "
          >
            *
          </h3>
          <h3 class="text-4xl font-serif font-bold">UI/UX Design</h3>
        </div>
      </div>

      <div class="pt-[210px] flex-1 pb-12">
        <div class="container grid md:grid-cols-2 h-full gap-6 md:gap-32">
          <div class="flex flex-col flex-1">
            <h3
              style="
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 3.08px;
              "
            >
              EXPERIENCE
            </h3>
            <h2 class="font-serif font-bold text-4xl mt-4">My Journey</h2>
            <p
              class="mt-6"
              style="
                color: #6a6a6a;
                font-family: Plus Jakarta Sans;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 25.6px */
              "
            >
              Hello! I'm a skilled Software Engineer, with a unique educational
              background from SMK N 2 Depok Sleman, specializing in Computer &
              Networking Engineering. What sets my education apart is the
              special curriculum, which includes 3 years of intensive study
              followed by a year-long internship program, providing me with
              hands-on experience and a deep understanding of the field.
            </p>
          </div>
          <div class="space-y-6">
            <template v-for="(career, index, arr) in careers">
              <CardCareer
                :data="{
                  ...career,
                  number: index + 1,
                }"
              />
              <hr v-if="index < careers.length - 1" />
            </template>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { CareerItem } from "@/types/careers";

import backgroundHeroLight from "~/assets/images/bg-hero-light.png";
import heroImg from "~/assets/images/illustration-hero.png";

const { yearsOfCareer } = useDate();

const careers: Omit<CareerItem, "number">[] = [
  {
    title: "Mid. Frontend Engineer",
    startDate: "2019-02-01T00:00:00+07:00",
    endDate: "present",
    company: "PrivyID",
  },
  {
    title: "Frontend Engineer",
    startDate: "2019-09-01T00:00:00+07:00",
    endDate: "2019-02-01T00:00:00+07:00",
    company: "PrivyID",
  },
  {
    title: "Technical Trainer",
    startDate: "2019-04-01T00:00:00+07:00",
    endDate: "2019-06-01T00:00:00+07:00",
    company: "Arkademy (Pijar Camp)",
  },
  {
    title: "Software Engineer",
    startDate: "2019-12-01T00:00:00+07:00",
    endDate: "2020-12-01T00:00:00+07:00",
    company: "Virus Media",
  },
  {
    title: "Programmer",
    startDate: "2019-06-01T00:00:00+07:00",
    endDate: "2019-08-01T00:00:00+07:00",
    company: "CV Karya Hidup Sentosa",
  },
  {
    title: "Internship Programmer",
    startDate: "2018-06-01T00:00:00+07:00",
    endDate: "2019-05-01T00:00:00+07:00",
    company: "CV Karya Hidup Sentosa",
  },
];

function handleContact(){
  window.location.href = "mailto:hello@syaad.dev"
}
</script>
