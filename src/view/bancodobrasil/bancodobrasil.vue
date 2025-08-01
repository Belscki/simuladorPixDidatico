<template>
  <div class="min-h-screen bg-white flex justify-center">
    <!-- Simulação do celular -->
    <div class="w-[330px] h-[667px] rounded-3xl shadow-2xl overflow-hidden border border-gray-300">
      <!-- Barra de status -->
      <div class="h-5 bg-black flex items-center justify-between px-4 text-xs text-white font-mono">
        <span class="mt-2">12:41</span>
        <div class="flex gap-1 mt-2">
          <div class="w-4 h-2 bg-white rounded-sm"></div>
          <div class="w-3 h-2 bg-white rounded-sm"></div>
          <div class="w-2 h-2 bg-white rounded-sm"></div>
        </div>
      </div>

      <div class="bg-blue-800 pt-2 flex flex-col pt-25">
        <div class="flex gap-2 justify-between items-center">
          <div class="flex items-end">
            <img class="w-10" src="../../assets/BancodoBrasil.png" alt="">
            <h1 class="ml-5 text-white text-3xl">
              Hello!
            </h1>
          </div>
          <div>
            <router-link to="/Home">
              <h2 class="text-white text-2xl">Voltar</h2>
            </router-link>
          </div>
        </div>
        <div class="w-full h-2 bg-yellow-400">
        </div>
      </div>

      <div class="bg-blue-100 flex justify-between ml-5 mr-5">
        <div class="flex flex-col ml-3 mr-3">
          <h1 class="text-gray-900">Saldo disponivel:</h1>
          <h2 class="text-blue-500">{{ bankvalue }}</h2>
        </div>
        <div class="flex flex-col ml-3 mr-3">
          <h1 class="text-gray-900">Agendado</h1>
          <h2 class="text-blue-500">{{ bankvalue }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const thisBank = "BancodoBrasil";

    var bankvalue
    if (sessionStorage.getItem("bankvalue")) {
      bankvalue = sessionStorage.getItem("bankvalue");
    } else {
      sessionStorage.setItem("bankvalue", "10.000")
      bankvalue = sessionStorage.getItem("bankvalue")
    }

    return {
      bankvalue,
      thisBank
    };
  }
};
</script>
