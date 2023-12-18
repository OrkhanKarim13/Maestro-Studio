<template>
    <section class="w-full bg-white px-9 pb-6 rounded-md">
        <div class=" flex flex-col items-center justify-center">
            <div class="w-full">
                <img class="w-full" src="../assets/images/Rectangle 16.svg" alt="cover">
            </div>
            <div class="w-full flex justify-between items-end bg-[#0047FF] p-12 rounded-t-none rounded-b-md ">
                <h2 class="text-white text-6xl w-1/3 leading-normal">Meet The
                    Monterail Team</h2>
                <p class="text-white w-2/5">When we started in 2010, we were just a tight group dedicated to the craft of
                    product building. Our
                    attitude hasn't changed—but since then, we’ve grown to be a team.</p>
            </div>
        </div>
    </section>
    <ThePartner />
    <section class="mx-9 mb-6 bg-[#0047FF] rounded-md">
        <div class="flex flex-col items-center justify-center">
            <div class="flex justify-between items-center p-8">
                <h3 class="text-white text-6xl w-1/3 leading-normal ">Meet our team</h3>
                <p class="text-white w-2/5">Technology alone is not enough to succeed, every product needs a team of
                    passionate people who will give it their best.</p>
            </div>
            <div class="w-full text-center px-28 py-16 bg-[#0047FF] rounded-md">
                <div class="w-full bg-white flex flex-col items-center justify-center p-12 rounded-md gap-14 ">
                    <h4 class="text-black text-6xl font-bold">Executive Team</h4>
                    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-6 flex flex-col items-center justify-center bg-[#0047FF]  rounded-md">
                            <div class="w-full flex flex-col gap-4">
                                <div class="w-full  bg-white rounded-md"><img class="w-full"
                                        src="../assets/images/image 42.svg" alt="person"></div>
                                <p class="text-white text-left">Front-end developer</p>
                                <h4 class="text-white font-bold text-2xl text-left">Asgar Asgarov</h4>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col items-center justify-center bg-[#0047FF]  rounded-md">
                            <div class="w-full flex flex-col gap-4">
                                <div class="w-full bg-white rounded-md"><img class="w-full"
                                        src="../assets/images/image 42.svg" alt="person"></div>
                                <p class="text-white text-left">Software developer</p>
                                <h4 class="text-white font-bold text-2xl text-left">Ruhid Shukurlu</h4>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col items-center justify-center bg-[#0047FF]  rounded-md">
                            <div class="w-full flex flex-col gap-4">
                                <div class="w-full bg-white rounded-md"><img class="w-full"
                                        src="../assets/images/image 15.svg" alt="person"></div>
                                <p class="text-white text-left">Front-end developer</p>
                                <h4 class="text-white font-bold text-2xl text-left">Orkhan Karimli</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <AboutStatistic />
    <ContactForm />
</template>