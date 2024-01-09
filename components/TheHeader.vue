<template>
    <header class="w-full bg-white p-4 lg:p-9">
        <div class="w-full flex items-center justify-between">
            <div class="w-[209px]">
                <NuxtLink to="/">
                    <img class="w-full" src="../assets/images/logo-maestro-black.svg" alt="logo">
                </NuxtLink>
            </div>
            
            <button class="lg:hidden" @click="toggleMenu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <ul class="flex border border-blue-500 rounded-full lg:flex lg:items-center lg:justify-end " :class="{ 'hidden': !showMenu, 'flex-col': showMenu }">
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
</script>

