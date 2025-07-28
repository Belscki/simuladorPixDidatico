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
                        <h1 class="text-2xl font-semibold">Confirme os Dados para transferência</h1>
                    </div>
                </div>

                <div class="flex flex-col gap-10 mr-5 ml-5">
                    <div class="flex flex-col gap-10">
                        <div>
                            <h1>Nome destinatário:</h1>
                            <span>{{ destination }}</span>
                            <hr>
                        </div>
                        <div>
                            <h1>Valor a ser transferido:</h1>
                            <span>R$ {{ tradeValue }}</span>
                            <hr>
                        </div>
                        <div>
                            <h1>Saldo atual:</h1>
                            <span>R$ {{ bankvalue }}</span>
                            <hr>
                        </div>
                    </div>
                    <div>
                        <h1>Novo Saldo:</h1>
                        <span>R$ {{ newBalance }}</span>
                        <hr>
                    </div>
                </div>

                <div>
                    <h1 @click="destino"
                        class="bg-purple-700 text-3xl text-white w-[50px] h-[50px] flex items-center justify-center rounded-full mt-[20%] ml-[80%]">
                        →
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';

export default {
    setup() {
        const bankvalueRaw = sessionStorage.getItem("bankvalue") || "0";
        const tradeValueRaw = sessionStorage.getItem("tradeValue") || "0";
        const destination = sessionStorage.getItem("destination") || "";

        // Limpeza: remove R$, espaços e troca vírgulas por ponto
        const cleanCurrency = (value) => {
            return parseFloat(
                value.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
            ) || 0;
        };

        const bankvalue = ref(bankvalueRaw);
        const tradeValue = ref(tradeValueRaw);

        const newBalance = computed(() => {
            return (cleanCurrency(bankvalue.value) - cleanCurrency(tradeValue.value)).toFixed(2).replace(".", ",");
        });

        const destino = () =>{
            window.location.href = "/Nubank/Payment/Value/Recipt"
        }

        return {
            bankvalue,
            tradeValue,
            destination,
            newBalance,
            destino
        };
    }
};
</script>
