<template>
    <div class="flex min-h-screen flex-col justify-center bg-slate-100">
        <div class="group h-96 w-96 [perspective:1000px]">
            <div
                class="relative h-full w-full rounded-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0  ">

                    <div class=" bg-white relative flex overflow-hidden justify-center items-center rounded-lg   cursor-pointer shadow-md shadow-black backface-hidden"><img class="w-full p-4 group-hover:opacity-0  z-10 "
                    src="../assets/images/image 33.svg" alt="logo">
                <div class="absolute  w-full h-full overflow-hidden pointer-events-none">

                    <img src="../assets/images/Cylinder.svg" alt="Icon"
                        class="absolute bottom-2 left-6 transform -translate-x-3 -translate-y-3 w-12 h-12  filter blur-sm mix-blend-multiply  animate-blob " />
                </div>
            </div>
                </div>
                <div class="absolute inset-0 backface-hidden rounded-xl flex flex-col items-center justify-center text-slate-200 opacity-0 group-hover:opacity-100  [transform:rotateY(180deg)] ">
                    <p class="text-black px-9  text-base text-center">As a clothing brand, Levis plays an important role in the
                    American and
                    European markets.</p>
                    <img class="w-1/2 h-1/2" src="../assets/images/image 33.svg" alt="img">
                </div>
            </div>

        </div>
    </div>
</template>
