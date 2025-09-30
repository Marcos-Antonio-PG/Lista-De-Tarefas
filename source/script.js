const inputTarefa = document.getElementById('inputTarefa')
const btnAdicionar = document.getElementById('btnAdicionar')
const lista = document.querySelector('.lista')
const btnRemover = document.getElementById("btnRemover")

function salvarTarefas() {
    const tarefas = []

    document.querySelectorAll('.item-lista').forEach(tarefa => {
        tarefas.push({
            texto: tarefa.textContent,
            concluida: tarefa.classList.contains('concluida')
        })

        console.log(tarefas)
    })

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || []

    tarefasSalvas.forEach(tarefa => {
        const li = document.createElement("li")
        li.textContent = tarefa.texto
        li.classList.add('item-lista')
        
        if (tarefa.concluida) {
            li.classList.add('concluida')
        }

        lista.appendChild(li)
    })
}

function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim()

    if (tarefa === "") {
        alert('Por Favor, adicione uma tarefa!')
        return
    }

    const li = document.createElement("li")
    li.classList.add('item-lista')
    li.textContent = tarefa

    lista.appendChild(li)

    inputTarefa.value = ""

    salvarTarefas()
}

btnAdicionar.addEventListener("click", adicionarTarefa)
inputTarefa.addEventListener("keydown", function(e) {
if(e.key === "Enter") {
    adicionarTarefa()
}
})

function tarefaConcluida(e) {
    const li = e.target

    li.classList.toggle('concluida')

    lista.classList.remove('concluida')

    salvarTarefas()
}

lista.addEventListener("click", tarefaConcluida)

function removerConcluidas() {
    const concluidas = document.querySelectorAll(".concluida")

    concluidas.forEach(tarefa => tarefa.remove())

    salvarTarefas()
}

btnRemover.addEventListener("click", removerConcluidas)
carregarTarefas()