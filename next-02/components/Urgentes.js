'use client'
export default function Tarefas(){
    const [tarefas, setTarefas]=useState([]);
    async function handleCarregarTarefas() {
        const responsa=await fetch("https://parseapi.back4app.com/classes/MyCustomClassName?where={\"myCustomKey1Name\\\":\\\"myCustomKey1Value\\\"}", {
        headers: {
            "X-Parse-Application-Id": "el7FFbgt5B6xbZUCs3jsJTjvnyiTuzUTCAYK0yoZ",
            "X-Parse-Rest-Api-Key": "l4ba2Qc1c9WA0819Nb5eJahEbVIHrvfkNG2DlIAb"
        }
        })
        const data=await response.json();
        console.log("data", data);
        setTarefas(data.results ?? []);
    }




    return (
    <div>
        <h1>Lista de Tarefas</h1>
        <hr />
        <button onClick={handleCarregarTarefas}> Carregar Tarefas</button>
        <hr />
        <ol> 
            {tarefas.map((tarefa) => (
                <li key={tarefa.objectId}>
                    {tarefa.descricao} ({`${tarefa.concluida}`})
                </li>
            ))}
            
        </ol>
    </div>
    );
    





}