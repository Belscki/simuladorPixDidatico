<template>
  <div class="min-h-screen flex justify-center bg-gray-200">
    <!-- Container de celular -->
    <div class="w-[330px] h-[667px] bg-white rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.2)] overflow-hidden relative border border-gray-300">
      
      <!-- Barra de status falsa -->
      <div class="h-5 bg-black flex items-center justify-between px-4 text-xs text-white font-mono">
        <span class="mt-2">12:41</span>
        <div class="flex gap-1 mt-2">
          <div class="w-4 h-2 bg-white rounded-sm"></div>
          <div class="w-3 h-2 bg-white rounded-sm"></div>
          <div class="w-2 h-2 bg-white rounded-sm"></div>
        </div>
      </div>

      <!-- Cabeçalho -->
      <div class="bg-indigo-600 text-white text-center py-3 text-lg font-semibold">
        Selecione seu banco
      </div>

      <!-- Grid de bancos -->
      <div class="grid grid-cols-2 gap-4 p-5">
        <router-link
          v-for="banco in bancos"
          :key="banco"
          :to="`/${banco}`"
          class="flex flex-col items-center bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all duration-200 rounded-xl shadow p-3"
        >
          <img
            :src="getImg(banco)"
            class="w-16 h-16 object-contain mb-2"
            :alt="`Logo ${banco}`"
          />
          <span class="text-sm text-gray-700 text-center leading-tight">
            {{ banco }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

    sessionStorage.removeItem("bankvalue")
    sessionStorage.removeItem("tradeValue")
    sessionStorage.removeItem("destination")

    const bancos = [
      "Nubank",
      "Banco do Brasil",
      "Bradesco",
      "Santander",
      "Itaú",
      "Caixa Economica"
    ];

    const getImg = (name) => {
      return new URL(`../assets/${name}.png`, import.meta.url).href;
    };

    return {
      bancos,
      getImg
    };
  }
};
</script>
