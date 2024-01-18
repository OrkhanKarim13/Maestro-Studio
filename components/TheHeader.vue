<!-- <template>
    <header class="w-full bg-white p-4 lg:p-9">
        <div class="w-full flex items-center justify-between">
            <div class="w-[209px]">
                <NuxtLink to="/">
                    <img class="w-full" src="../assets/images/logo-maestro-black.svg" alt="logo">
                </NuxtLink>
            </div>
            
            <button class="lg:hidden block" @click="toggleMenu">
                <svg class=" w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <ul class="flex lg:border lg:border-blue-500 rounded-full lg:flex lg:items-center lg:justify-end " :class="{ 'hidden': !showMenu, 'flex-col': showMenu }">

                <li class="px-8 py-4 text-black hover:text-blue-700">
                    <NuxtLink to="/about">
                        ABOUT
                    </NuxtLink>
                </li>
                <li class="px-8 py-4 text-black hover:text-blue-700">
                    <NuxtLink to="/services">
                        SERVICES
                    </NuxtLink>
                </li>
                <li class="px-8 py-4 text-black hover:text-blue-700">
                    <NuxtLink to="/projects">
                        PROJECTS
                    </NuxtLink>
                </li>
                <li class="px-8 py-4 text-black hover:text-blue-700">
                    <NuxtLink to="/blog">
                        BLOG
                    </NuxtLink>
                </li>
                
                <li class="px-8 py-4 text-black hover:text-blue-700">
                    <NuxtLink to="/contact">
                        CONTACT US
                    </NuxtLink>
                </li>

            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
};
</script> -->




<template>
    <div
      class=" text-black w-full bg-white p-4 lg:p-9"
      :class="{ 'absolute w-full  top-0 left-0': menu }"
    >
      <div class="container  justify-between flex ">
        <div class="w-auto p-6">
          <!-- Title -->
          <div class="w-[209px]">
                <NuxtLink to="/">
                    <img class="w-full" src="../assets/images/logo-maestro-black.svg" alt="logo">
                </NuxtLink>
            </div>
          <!-- Icon -->
  
        </div>
        <!-- Desktop nav list -->
        <nav class=" hidden md:border md:border-blue-500 md:rounded-full sm:flex items-center">
          <ul class="flex ">
            <li
              v-for="(item, index) in items"
              :key="index"
            >
              <a
                :href="item.href"
                class="p-6 block text-black"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
        <!-- Toggle menu mobile icon -->
          <div
            class="ml-auto sm:hidden p-6"
            @click="menu = !menu"
          >
          <svg class=" w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
          </div>
        </div>
        <!-- Mobile nav list -->
        <nav v-show="menu" class="w-full">
          <ul class="flex flex-col text-center">
          <li
            v-for="(item, index) in items"
            :key="index"
          >
            <a
              :href="item.href"
              class="pb-2 text-black block"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        menu: false,
        items: [
          {
            title: 'ABOUT',
            href: '/about'
          },
          {
            title: 'SERVICES',
            href: '/services'
          },
          {
            title: 'PROJECTS',
            href: '/projects'
          },
          {
            title: 'BLOG',
            href: '/blog'
          },
          {
            title: 'CONTACT',
            href: '/contact'
          },
        ]
      }
    }
  }
  </script>