<template>
  <div class="min-h-screen flex justify-center bg-gray-200">
    <div class="w-[330px] h-[667px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-300">
      
      <!-- Barra de status -->
      <div class="h-5 bg-black flex items-center justify-between px-4 text-xs text-white font-mono">
        <span class="mt-2">12:43</span>
        <div class="flex gap-1 mt-2">
          <div class="w-4 h-2 bg-white rounded-sm"></div>
          <div class="w-3 h-2 bg-white rounded-sm"></div>
          <div class="w-2 h-2 bg-white rounded-sm"></div>
        </div>
      </div>

      <!-- Cabeçalho -->
      <div class="bg-purple-700 text-white py-3">
        <div class="flex justify-between items-center px-4 text-xl font-bold">
          <router-link to="/Nubank/Payment" class="hover:opacity-80">✕</router-link>
          <span class="text-xl">❓</span>
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="px-5 py-6 space-y-6">
        <div>
          <h1 class="text-2xl font-semibold">Qual o valor da transferência?</h1>
          <p class="text-lg text-gray-700 mt-1">Saldo da conta: <strong>R$ {{ bankvalue }}</strong></p>
        </div>

        <!-- Input com valor formatado -->
        <div class="flex items-center border-b-2 border-purple-600 pb-2">
          <label class="text-2xl text-purple-600 mr-2 font-medium">R$</label>
          <input
            :value="formattedValue"
            @input="onInput"
            inputmode="numeric"
            placeholder="0,00"
            class="w-full text-2xl outline-none placeholder-gray-400 text-start tracking-wide"
          />
        </div>
      </div>
      <div>
        <h1
        v-on:click="Consolado()"
        class="bg-purple-700 text-3xl text-white w-[50px] h-[50px] flex items-center justify-center rounded-full mt-[50%] ml-[80%]">-></h1>
    </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const bankvalue = ref("10.000");
    const cents = ref(0);

    const formattedValue = computed(() => {
      return (cents.value / 100).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    });

    const onInput = (e) => {
      const onlyNumbers = e.target.value.replace(/\D/g, "");
      cents.value = parseInt(onlyNumbers || "0");
    };

    onMounted(() => {
        sessionStorage.removeItem("tradeValue")
      const stored = sessionStorage.getItem("bankvalue");
      if (stored) {
        bankvalue.value = stored;
      } else {
        sessionStorage.setItem("bankvalue", "10.000");
      }
    });

    const Consolado = () => {
        sessionStorage.setItem("tradeValue",formattedValue.value)
        window.location.href = "/Nubank/Payment/Value/Destination"
    }
    return {
      bankvalue,
      formattedValue,
      onInput,
      Consolado
    };
  }
};
</script>
