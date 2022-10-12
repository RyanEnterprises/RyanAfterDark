<template>
    <div class="bg-white dark:bg-black dark:text-white py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-lg font-semibold text-secondary">Benefits</h2>
          <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-primary sm:text-4xl">The world's only megaconglomerate</p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">From airlines, to zoos, Ryan Enterprises is the world's premire megaconglomerate. Offering a wide range of services, we are the only company in the world that offers these benefits. </p>
        </div>
  
        <div class="mt-10">
          <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                  <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
import newspaper from '../../node_modules/bootstrap-icons/icons/newspaper.svg'
import box from '../../node_modules/bootstrap-icons/icons/box.svg'
import geo from '../../node_modules/bootstrap-icons/icons/geo-fill.svg'
import shield from '../../node_modules/bootstrap-icons/icons/shield.svg'



const features = [
  {
    name: 'Free, passive marketing',
    description:
      'Studies show that customers are 300% more likely to buy a product if the brand is part of Ryan Enterprises',
    icon: newspaper,
  },
  {
    name: 'End-to-end supply chain coverage',
    description:
      'From concept, to manufacturing, to sales and marketing, we\'ve got you covered every step of the way',
    icon: box,
  },
  {
    name: 'Endless locations',
    description:
      'With locations all across the United States, and loacations in China, France, Sweden, and Canada, you\'re always close to a location.',
    icon: geo,
  },
  {
    name: 'Tax Security',
    description:
      'All Ryan Enterprises subsidiaries are exempt from taxes. Federal, State, Municipal, Organizational... you name it, Ryan Enterprises companies are exempt',
    icon: shield,
  },
]
  </script>