<script>
import 'tailwindcss/tailwind.css'

</script>
<template>
    <div id="container" class="bg-slate-100 flex justify-center">
        <div>
            <h1 class="flex justify-center text-4xl text-gray-600 mt-16 ">
                CONTROLE DE ESTOQUE
            </h1>
            <div class=" mt-8">
                <div class=" flex justify-evenly align-middle">
                    <div class="shadow-xl w-[242px] mx-8 h-44 border-solid border-2  text-center">
                        <img class="w-[120px] ml-16 mt-2" src="/assets/png-man-removebg-preview.png" alt="">
                        <h1 class="mt-1">
                            Gestão de Usuário
                        </h1>
                    </div>
                    <div class="shadow-xl w-[242px] mx-8 border-solid border-2  text-center">
                        <img class="w-[120px] ml-16 mt-3" src="/assets/Fornecedores.png" alt="">
                        <h1 >
                            Cadastro de Fornecedor
                        </h1>
                    </div>
                    <nuxtLink to="/cadProd">
                    <div class="shadow-xl w-[242px] h-44 mx-8 border-solid border-2  text-center">
                        <img class="w-[130px] ml-14 mt-2" src="/assets/entradadeestoque.png" alt="">
                        <h1 class="mt-10">
                            Cadastro de Produtos
                        </h1>
                    </div>
                </nuxtLink>
                </div>
                <div class="flex justify-evenly align-middle my-8">
                    <div class="shadow-xl w-[242px] mx-8 h-44 border-solid border-2  text-center">
                        <img class="w-[120px] ml-16 mt-2" src="/assets/saidaEstoque.png" alt="">
                        <h1>
                            Saída de Estoque
                        </h1>
                    </div>
                    <div class="shadow-xl w-[242px] mx-8 border-solid border-2  text-center">
                        <img class="w-[120px] ml-16 mt-2" src="/assets/stock.png" alt="">
                        <h1 class="">
                            Entrada do Estoque
                        </h1>
                    </div>
                    <div class="shadow-xl w-[242px] mx-8 border-solid border-2  text-center">
                        <img class="w-[130px] ml-14 mt-2" src="/assets/pngwing.com.png" alt="">
                        <h1 class="mt-7">
                            Gráficos
                        </h1>
                    </div>
                </div>
                <div class="shadow-xl w-[242px] h-44 mx-8 border-solid border-2  text-center">
                    <img class="w-[160px] ml-12 mt-2" src="/assets/clientes-removebg-preview.png" alt="">
                    <h1 class="mt-8">
                        Cadastro de clientes
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>