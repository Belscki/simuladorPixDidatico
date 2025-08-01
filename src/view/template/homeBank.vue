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

      <div class=" ">
        <div class=" ">
          <div class=" ">
            <div class=" ">
              <div class=" ">
                <router-link to="/Home">
                  <- 
                </router-link>
              </div>
            </div>
          </div>
          <h1 class=" ">Olá, Humano</h1>
        </div>
        <!-- Conta -->

        <div class=" ">
          <div class=" ">
            <h2 class=" ">Conta</h2>
            <span class=" ">R${{ bankvalue }}</span>
          </div>
          <!-- Ações -->
          <div class=" ">
            <router-link to="/{{thisBank}}/Payment">
              <div class=" ">
                <div class=" ">🏦</div>
                <span class=" ">Pix</span>
              </div>
            </router-link>

            <div class=" ">
              <div class=" ">💳</div>
              <span class=" ">Pagar</span>
            </div>

            <div class=" ">
              <div class=" ">💸</div>
              <span class=" ">Transferir</span>
            </div>

            <div class=" ">
              <div class=" ">💰</div>
              <span class=" ">Depositar</span>
            </div>
          </div>
          <!-- Meus Cartões -->

          <div class=" ">
            <span class=" ">💳</span>
            <span class=" ">Meus cartões</span>
          </div>
          <!-- Cartão Bloqueado -->
          <div class=" ">
            <div class=" ">
              <div class=" ">
                <span class=" ">🔒</span>
                <span class=" ">Cartão bloqueado</span>
              </div>
              <span class=" ">›</span>
            </div>

            <div class=" ">
              <p class=" ">Fatura atual</p>
              <div class=" "></div>
              <p class=" ">Limite disponível de R$ 6,77</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
  const thisBank = "";
    
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
