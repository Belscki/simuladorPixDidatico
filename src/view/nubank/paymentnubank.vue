<template>
    <div>
        <div class="min-h-screen flex justify-center  bg-gray-200">
            <!-- Container de celular -->
            <div
                class="w-[330px] h-[667px] bg-white rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.2)] overflow-hidden relative border border-gray-300">

                <!-- Barra de status falsa -->
                <div class="h-5 bg-black flex items-center justify-between px-4 text-xs text-white font-mono">
                    <span class="mt-2">12:42</span>
                    <div class="flex gap-1 mt-2">
                        <div class="w-4 h-2 bg-white rounded-sm"></div>
                        <div class="w-3 h-2 bg-white rounded-sm"></div>
                        <div class="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                </div>

                <!-- Cabeçalho -->
                <div class="bg-purple-700 text-white text-start py-3 text-lg font-semibold">
                    <div class="flex justify-between m-3 text-xl">
                        <router-link to="/Nubank">
                            <h1>X</h1>
                        </router-link>
                        <h1>?</h1>
                    </div>
                    <h1 class="text-2xl ml-3">
                        Área Pix
                    </h1>
                </div>

                <!-- Grid de bancos -->
                <div class="grid grid-cols-2 gap-4 p-5">
                    <router-link to="/Nubank/Payment/Value">
                        <div class="flex flex-col justify-center items-center">
                            <h1
                            class="bg-gray-100 hover:bg-gray-200 rounded-full w-[60px] h-[60px] text-2xl flex justify-center items-center">
                            💳</h1>
                            <h1 class="text-xl">Transferir</h1>
                        </div>
                    </router-link>
                        <div class="flex flex-col justify-center items-center">
                        <h1
                            class="bg-gray-100 hover:bg-gray-200 rounded-full w-[60px] h-[60px] text-2xl flex justify-center items-center">
                            X</h1>
                        <h1 class="text-xl">Programar</h1>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <h1
                            class="bg-gray-100 hover:bg-gray-200 rounded-full w-[60px] h-[60px] text-2xl flex justify-center items-center">
                            X</h1>
                        <h1 class="text-xl">Ler QR code</h1>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <h1
                            class="bg-gray-100 hover:bg-gray-200 rounded-full w-[60px] h-[60px] text-2xl flex justify-center items-center">
                            X</h1>
                        <h1 class="text-xl">Pix Copia e Cola</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>