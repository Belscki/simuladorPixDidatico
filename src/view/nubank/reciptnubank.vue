<template>
    <div class="min-h-screen flex justify-center bg-gray-200">
        <div class="w-[330px] h-[667px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-300">

            <!-- Barra de status -->
            <div class="h-5 bg-black flex items-center justify-between px-4 text-xs text-white font-mono">
                <span class="mt-2">12:44</span>
                <div class="flex gap-1 mt-2">
                    <div class="w-4 h-2 bg-white rounded-sm"></div>
                    <div class="w-3 h-2 bg-white rounded-sm"></div>
                    <div class="w-2 h-2 bg-white rounded-sm"></div>
                </div>
            </div>

            <!-- Cabeçalho -->
            <div class="bg-purple-700 text-white py-3 text-center font-bold text-xl">
                Recibo
            </div>

            <!-- Conteúdo -->
            <div class="p-6 flex flex-col items-center text-center space-y-4">
                <!-- Ícone de sucesso -->
                <div class="text-green-500 text-6xl">✅</div>
                <h2 class="text-xl font-bold text-gray-800">Transferência realizada</h2>

                <!-- Valor -->
                <div class="text-3xl font-bold text-purple-700">
                    R$ {{ tradeValue }}
                </div>

                <!-- Info do destinatário (mockado) -->
                <div class="bg-gray-100 rounded-xl p-4 w-full mt-4 text-left space-y-1">
                    <p class="text-sm text-gray-600">Para:</p>
                    <p class="font-semibold">{{destination}}</p>
                    <p class="text-sm text-gray-600">Banco 260 - Nubank</p>
                    <p class="text-sm text-gray-600">Agência 0001 • Conta 123456-7</p>
                </div>

                <!-- Data e protocolo -->
                <div class="text-xs text-gray-500 mt-4">
                    {{ currentDate }}<br>
                    Protocolo: {{ protocol }}
                </div>

                <!-- Botão voltar -->
                <button @click="voltar"
                    class="mt-6 bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
                    Concluir
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const destination = sessionStorage.getItem("destination")
        const tradeValue = ref("0,00");
        const protocol = ref("");
        const currentDate = new Date().toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
        });

        onMounted(() => {
            const oldvalue = sessionStorage.getItem("bankvalue") || "0";
            const val = sessionStorage.getItem("tradeValue") || "0";

            // Converte para números reais
            const oldNumber = parseFloat(oldvalue.replace(/\./g, "").replace(",", "."));
            const valNumber = parseFloat(val.replace(/\./g, "").replace(",", "."));

            const newvalue = oldNumber - valNumber;

            // Salva o novo saldo formatado
            const newFormatted = newvalue.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
            sessionStorage.setItem("bankvalue", newFormatted);
            tradeValue.value = val;
            // Simula um número de protocolo aleatório
            protocol.value = Math.floor(Math.random() * 9000000000 + 1000000000).toString();
        });

        const voltar = () => {
            sessionStorage.removeItem("tradeValue");
            window.location.href = "/Nubank";
        };

        return {
            tradeValue,
            protocol,
            currentDate,
            voltar,
            destination
        };
    },
};
</script>
