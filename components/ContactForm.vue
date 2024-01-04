<template>
    <div class="grid grid-cols-1 md:grid-cols-2 mx-9 my-6 gap-6">
        <div class="bg-[#0047FF]  p-12 flex flex-col items-start justify-between  rounded-md">
            <div class="w-4/5 text-white text-6xl font-bold leading-11">Need a project estimate?
            </div>
            <div class="my-12 flex items-center justify-center "><img src="../assets/images/Arrow 2.svg" alt="arrow">
            </div>
            <div class="flex flex-col items-start justify-center gap-5">
                <p class="text-white text-lg w-2/3 font-normal">Drop us a line, and we provide you with a qualified
                    consultation.</p>
            </div>
        </div>
        <div class=" bg-[#0047FF]  p-12 flex flex-col items-start justify-between gap-6  rounded-md">
            <input
                class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white text-white font-semibold"
                type="text" name="" id="" value="Full Name">
            <input
                class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white  text-white font-semibold"
                type="text" name="" id="" value="Phone">
            <input
                class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white  text-white font-semibold"
                type="email" name="" id="" value="Email">
            <label
                class="w-full cursor-pointer px-8 py-5 rounded-full bg-transparent border border-white  text-white font-semibold text-center"
                for="file">Attach File</label>
            <input class="w-full hidden px-8 py-5 rounded-full bg-transparent border border-white  text-white font-semibold"
                placeholder="asd" type="file" name="" id="file">
            <p class="w-full px-8 py-5 text-white">Your personal data will be processed in accordance with our
                <a href="/">privacy policy</a> for further contacting you regarding your request.
            </p>
            <button
                class="w-full bg-white uppercase text-black-500 rounded-full font-bold py-5 border yx-8 hover:text-white hover:bg-transparent hover:border-white ">Send</button>
        </div>
</div></template>
