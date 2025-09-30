# Lista De Tarefas
Um projeto que consiste em fazer o usuário criar uma lista de tarefas, concluir ou desabilitar tarefas, e fazer com que o site lembre das suas tarefas mesmo depois de recarregar a página usando localStorage

Como funciona:

O layout do site é bem simples e prático, contém um título, um input de texto e dois botões.

Quando algo for digitado no input de texto e o botão "Adicionar Tarefa" for pressionado ou a tecla Enter for pressionada, o JavaScript pegará esse texto e criará um "li" e colocará logo abaixo da caixa de texto, em uma "ul" já preparada no HTML. É possível adicionar infinitas tarefas.

Quando uma tarefa é adicionada, é possível deixar ela como concluída apenas clicando em cima dela, assim a classe "concluida" é adicionada ao item da lista e fica estilizado, caso queira reverter isso é só clicar novamente.

O botão "Remover Tarefas Concluídas" funciona da seguinte maneira, caso tenha alguma tarefa na lista que tenha a classe "concluida" e o botão for apertado, ele exclui ele da lista, se for mais de uma, funciona da mesma maneira, assim fica bem mais prático excluir várias tarefas de uma só vez.

Armazenamento Local:

Com o uso de JSON o JavaScript converte a lista em string e a salva, quando o usuário recarrega a página o JavaScript remonta a lista convertendo novamente de string para object novamente, assim não é necessário criar a lista de tarefas do zero toda vez que acessar o site.