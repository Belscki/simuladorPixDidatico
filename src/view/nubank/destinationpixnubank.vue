<template>
  <div>
    <div class="min-h-screen flex justify-center bg-gray-200">
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

        <div class="bg-purple-700 text-white py-3">
          <div class="flex justify-between items-center px-4 text-xl font-bold">
            <router-link to="/Nubank/Payment" class="hover:opacity-80">✕</router-link>
            <span class="text-xl">❓</span>
          </div>
        </div>

        <!-- Conteúdo -->
        <div class="px-5 py-6 space-y-6">
          <div>
            <h1 class="text-2xl font-semibold">Para quem deseja <br> enviar R$ {{ tradeValue }} ?</h1>
          </div>

          <!-- Input com valor formatado -->
          <div class="flex items-center border-b-2 border-purple-600 pb-2">
            <input v-model="destinationInput" inputmode="text" placeholder="Nome, CPF/CNPJ ou chave PIX"
              class="w-full text-[16px] outline-none placeholder-gray-400 text-start tracking-wide" />
          </div>
        </div>

        <!-- Botão -->
        <div>
          <h1 @click="destino"
            class="bg-purple-700 text-3xl text-white w-[50px] h-[50px] flex items-center justify-center rounded-full mt-[50%] ml-[80%]">
            →
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const tradeValue = sessionStorage.getItem("tradeValue") || "0,00";
    const destinationInput = ref("");

    onMounted(() => {
    });

    const destino = () => {
      if (!destinationInput.value.trim()) {
        alert("Preencha o destinatário.");
        return;
      }
      sessionStorage.setItem("destination", destinationInput.value);
      window.location.href = "/Nubank/Payment/Value/Confirm";
    };

    return {
      tradeValue,
      destinationInput,
      destino
    };
  }
};
</script>
