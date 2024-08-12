<script lang="ts">
import 'tailwindcss/tailwind.css'
import buttonDelete from '~/components/Buttons/buttonDelete.vue';
import buttonSave from '~/components/Buttons/buttonSave.vue';
export default {
    components: {
        buttonDelete,
        buttonSave
    }
}

/*
Para amanhã:
Fazer um F-for para as labels
Descobrir algum método o pegar só um input
*/
</script>

<template>
    <compHeader />
    <div id="container" class="bg-slate-100 flex justify-center">
        <header>
            <h1 class="flex justify-center text-4xl text-gray-600 mt-16 ">
                CADASTRO DE PRODUTOS
            </h1>
            <div>
                <section class=" mt-8">
                    <div class=" flex justify-evenly align-middle">
                        <form>
                            <label for="">Nome Produto</label>
                            <input type="text">
                            <label for="">Quantidade</label>
                            <input type="text">
                            <label for="">Preço</label>
                            <input type="text">
                            <label for="">Fornecedor</label>
                            <input type="text">
                            <buttonDelete />
                            <buttonSave />
                        </form>
                    </div>
                </section>
            </div>
        </header>
    </div>
</template>