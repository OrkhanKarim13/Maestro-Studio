<template>
    <section class="mx-9 mb-6 bg-[#0047FF] p-12 rounded-md">
        <div class="w-full flex flex-col items-start justify-center p-12 gap-6">
            <h2 class="text-white text-8xl leading-tight uppercase">Medical Information
                System Medstar™</h2>
            <p class="text-white text-xl">Web application for managing hospitals and storing healthcare data.</p>
            <div class="flex items-center justify-between gap-2">
                <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">Digital Health</a>
                <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">MIS</a>
                <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">HIS</a>
            </div>
        </div>

    </section>
    <section class="mx-9 mb-6 p-12 rounded-md bg-[#0047FF]">
        <div class="flex flex-col items-start justify-center gap-6">
            <h2 class="text-6xl text-white uppercase ">Partner's Profile</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 ">
                <div
                    class="p-12 col-span-1 text-4xl text-white border border-blue rounded-lg flex items-center justify-center">
                    BACKGROUND</div>
                <div class="p-12 col-span-2 text-md text-black border border-blue rounded-lg bg-white">Medstar Solutions LLC
                    is the
                    biggest digital health provider in Ukraine and one of the active contributors to national healthcare
                    reforms, and a creator of the first cloud-based medical system in Ukraine with a security certificate
                    for medical data protection. Focusing on the basic needs of doctors, patients, and pharmacists, the
                    company implements medical software and digitizes healthcare administration.</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 ">
                <div
                    class="p-12 col-span-1 text-4xl text-white border border-blue rounded-lg flex items-center justify-center">
                    <h3 class="mr-20">Objective</h3>
                </div>
                <div class="p-12 col-span-2 text-md text-black border border-blue rounded-lg bg-white">To create a unified
                    document
                    management system for the health facilities, medical laboratories, and patients' shared use. The system
                    automates the physicians' workflow regarding appointment management, patient records and interaction,
                    treatment process, and laboratory tests.</div>
            </div>
        </div>
    </section>
    <section class="mx-9 mb-6 rounded-md">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div class="col-span-1 ">
                <img class="rounded-md " src="../assets/images/home1.svg" alt="cover">
            </div>
            <div class="col-span-1 flex flex-col gap-6 ">
                    <div class="w-full"><img class=" w-full h-[385px] object-cover rounded-md" src="../assets/images/home2.svg" alt="cover"></div>
                    <div class="w-full"><img class="w-full h-[385px] object-cover rounded-md" src="../assets/images/clohes1.svg" alt="cover"></div>
            </div>
            
        </div>
        
       

    </section>
    <section class="mx-9 mb-6 rounded-md">
        <div class="w-full" ><img  class="w-full rounded-md" src="../assets/images/internalPage1.svg" alt="cover"></div>
    </section>
    <section class=" rounded-md">
    
           
            <ContactForm/>
  
    </section>
</template>