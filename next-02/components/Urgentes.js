export default function Tarefas(){
    const listaTarefas = [
        {
            id: 1,
            nomeTarefa: "Comprar Leite",
            urgente: false
        },

        {
            id: 2,
            nomeTarefa: "Estudar React",
            urgente: true
        },

        {
            id: 3,
            nomeTarefa: "Lavar o carro",
            urgente: false

        },

        {
            id: 4,
            nomeTarefa: "Passear com o cachorro",
            urgente: true
        }

    ];

    const tarefasUrgentes = listaTarefas.filter(tarefa => tarefa.urgente);

    const listarTarefasUrgentes = tarefasUrgentes.map((tarefa, id) => <li key={tarefa.id}>{tarefa.nomeTarefa}</li>);

    return <ul>{listarTarefasUrgentes}</ul>;



    





}