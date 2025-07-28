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

      <!-- Header Roxo -->
      <div class="bg-purple-700 text-white px-4 pt-10 pb-6 relative">
        <div class="flex justify-between items-center mb-4">
          <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <div class="flex justify-between items-center px-4 text-xl font-bold">
              <router-link to="/Home" class="hover:opacity-80"><-</router-link>
            </div>
            <span class="text-2xl">
              <img class="w-5" src="https://images.icon-icons.com/1863/PNG/512/person_118819.png" alt="">
            </span>
          </div>
          <div class="flex space-x-3 text-lg">
            <span class="flex justify-center items-center">
              <img class="w-5" src="https://cdn-icons-png.flaticon.com/512/6423/6423886.png" alt="">
            </span>
            <span class="flex justify-center items-center">
              <img class="w-4" src="https://cdn-icons-png.flaticon.com/512/69/69544.png" alt="">
            </span>
            <span class="flex justify-center items-center">
              <img class="w-4" src="https://cdn-icons-png.flaticon.com/512/561/561188.png" alt="">
            </span>
          </div>
        </div>
        <h1 class="text-lg font-semibold">Olá, Humano</h1>
      </div>

      <!-- Conta -->
      <div class="bg-white p-4">
        <div class="flex flex-col justify-between items-start mb-2">
          <h2 class="text-base font-semibold">Conta</h2>
          <span class="text-xl">R${{ bankvalue }}</span>
        </div>

        <!-- Ações -->
        <div class="grid grid-cols-4 gap-2 text-center mb-6 mt-10">
          <router-link to="/Nubank/Payment">
            <div class="flex flex-col items-center text-sm">
              <div
                class="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center  hover:bg-gray-200 text-xl">
                🏦</div>
              <span class="mt-1">Pix</span>
            </div>
          </router-link>
          <div class="flex flex-col items-center text-sm">
            <div class="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center text-xl">💳</div>
            <span class="mt-1">Pagar</span>
          </div>
          <div class="flex flex-col items-center text-sm">
            <div class="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center text-xl">💸</div>
            <span class="mt-1">Transferir</span>
          </div>
          <div class="flex flex-col items-center text-sm">
            <div class="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center text-xl">💰</div>
            <span class="mt-1">Depositar</span>
          </div>
        </div>

        <!-- Meus Cartões -->
        <div class="bg-gray-100 rounded-xl px-4 py-3 flex items-center space-x-3 mb-4">
          <span class="text-lg">💳</span>
          <span class="text-sm font-medium">Meus cartões</span>
        </div>

        <!-- Cartão Bloqueado -->
        <div class="bg-white py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <span class="text-lg">🔒</span>
              <span class="text-gray-400 font-semibold">Cartão bloqueado</span>
            </div>
            <span class="text-gray-400 text-xl">›</span>
          </div>

          <div class="mt-3">
            <p class="text-sm text-gray-600 mb-1">Fatura atual</p>
            <div class="w-full h-5 bg-gray-100 rounded-md mb-1"></div>
            <p class="text-sm text-gray-500">Limite disponível de R$ 6,77</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    var bankvalue
    if (sessionStorage.getItem("bankvalue")) {
      bankvalue = sessionStorage.getItem("bankvalue");
    } else {
      sessionStorage.setItem("bankvalue", "10.000")
      bankvalue = sessionStorage.getItem("bankvalue")
    }

    return {
      bankvalue
    };
  }
};
</script>
