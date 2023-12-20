
<template>
    <section class=" mx-9 mb-6 flex flex-col items-center justify-center gap-12 bg-[#0047FF] p-12 rounded-md ">
        <div class="w-3/4 flex flex-col justify-center items-center mx-auto my-0 gap-3  ">
            <div class=" w-full text-white text-3xl font-bold leading-6 text-center">Proud to be partnered with the best
            </div>
        </div>

        <div
            class="w-11/12 mx-auto my-0 grid  grid-cols-1 md:grid-cols-4 place-content-center  py-4 px-4 gap-4 bg-[#0047FF] pb-24">
            <div class=" bg-white relative flex justify-center items-center rounded-lg "><img class="w-full p-4  z-10 "
                    src="../assets/images/image 33.svg" alt="logo">
                <div class="absolute bottom-20 left-5 w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/Cylinder.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
            <div class=" bg-white relative rounded-lg flex justify-center items-center"> <img
                    class="w-full p-4 absolute z-10" src="../assets/images/image 31.svg" alt="logo">
                <div class="absolute top-6 left-0 w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/SuperToroid-2.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
            <div class=" bg-white  rounded-lg flex flex-col justify-center items-center gap-3 ">
                <p class=" px-12 pt-7 text-base text-center">As a clothing brand, Levis plays an important role in the
                    American and
                    European markets.</p><img class="pb-5" src="../assets/images/image 19.svg" alt="logo">
            </div>
            <div class=" bg-white relative rounded-lg flex justify-center items-center"> <img class="w-full p-4  z-10"
                    src="../assets/images/image 32.svg" alt="logo">
                <div class="absolute top-6 left-0 w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/Sphere.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
            <div class=" bg-white relative rounded-lg flex justify-center items-center"> <img class="w-full p-4  z-10"
                    src="../assets/images/image 24.svg" alt="logo">
                <div class="absolute bottom-12 left-0 w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/Cube-2.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
            <div class=" bg-white relative rounded-lg flex justify-center items-center"> <img class="w-full p-4 z-10"
                    src="../assets/images/image 29.svg" alt="logo">
                <div class="absolute top-10 left-5 w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/RoundCube-1.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
            <div class=" bg-white relative rounded-lg flex justify-center items-center"> <img class="w-full p-4  z-10"
                    src="../assets/images/image 18.svg" alt="logo">
                <div class="absolute bottom-20 right-4 w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/Cone.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
            <div class=" bg-white relative rounded-lg flex justify-center items-center"> <img class="w-full  z-10 p-4 "
                    src="../assets/images/image 28.svg" alt="logo">
                <div class="absolute top-6 left-5 w-full h-full overflow-hidden pointer-events-none">

                    <img  src="../assets/images/SuperToroid-1.svg" alt="Icon"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 filter blur-sm animate-bounce-x" />
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {
    computed: {
        blobPath() {

            return this.generateBlobPath();
        }
    },
    methods: {
        generateBlobPath() {

            return "M105.2,19.8C128.1,43,151,66.3,156.8,92.8C162.6,119.3,151.3,149.2,125.1,163.3C98.9,177.4,58,175.6,31.1,160.4C4.2,145.2,-8.7,116.8,0.4,91.5C9.5,66.1,43.1,43.7,68.2,19.5C93.2,-4.6,109.8,-31.2,105.2,-27.7C100.7,-24.2,75,1.3,105.2,19.8Z";
        }
    }
};
</script>

<style>



@keyframes bounce-x {

    0%,
    100% {
        transform: translateY(35px);
        transform: translateX(0px);

    }

    50% {
        transform: translateX(50px);
    }
    
}

.animate-bounce-x {
    animation: bounce-x 10s ease-in-out infinite;
}
</style>






