'use client'
import { useState } from "react";
import Dado from "@/components/Dado";

export default function JogoDados(){
    const [dado1, setdado1]=useState(1);
    const [dado2, setdado2]=useState(1);

    const [dado3, setdado3]=useState(1);
    const [dado4, setdado4]=useState(1);

    const [vezdo1, setvezdo1]=useState(true);

    const [rodada, setrodada]=useState(1);
    const [pontos1, setpontos1]=useState(0);
    const [pontos2, setpontos2]=useState(0);
    const [vencedor, setvencedor]=useState("");

    function jogar(){
        const aleatorio1=Math.floor(Math.random()*6)+1;
        const aleatorio2=Math.floor(Math.random()*6)+1;

        if (vezdo1){
            setdado1(aleatorio1);
            setdado2(aleatorio2);
            setvezdo1(false);
        } else {
            setdado3(aleatorio1);
            setdado4(aleatorio2);
            setvezdo1(true);
            setrodada(rodada+1);
            if (dado1+dado2>aleatorio1+aleatorio2){
                setpontos1(pontos1+1);
                setvencedor("Jogador 1");
            } else if (aleatorio1+aleatorio2>dado1+dado2) {
                setpontos2(pontos2+1);
                setvencedor("Jogador 2");                  
            } else {
                setpontos1(pontos1+0);
                setpontos2(pontos2+0);
                setvencedor("Empate"); 
        }
    }
}

    function reinicio(){
        setdado1(1);
        setdado2(1);
        setdado3(1);
        setdado4(1); 

        setvezdo1(true);
        setvencedor("");
        setrodada(1);
        setpontos1(0);
        setpontos2(0);

    }

    



    return (
        <div>
        {rodada<=5 ? 
        <div className="moldura" style={{border: '2px solid #000', borderRadius: '15px', padding:'20px', marginTop: '30px', marginBottom: '30px', marginLeft: '30%', marginRight: '30%', height: '600px'}}>
            <h2 style={{textAlign:'center'}}>Rodada {rodada}</h2>
            <div className="jogadores" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <div className="dados1" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', justifyContent: 'center', minHeight: '100vh', width: '100vw', padding: '5px', marginTop: '-15%'}}>
                    <h1>Jogador 1</h1>
                    <div className="fotodado" style={{display:'flex'}}>
                    <Dado valor={dado1} />
                    <Dado valor={dado2} />
                    </div>
                    <p>Soma: {dado1 + dado2}</p>
                    <h2>{vencedor=="Jogador 1" ? "Jogador 1 Venceu" : vencedor=="Jogador 2" ? "Jogador 1 Perdeu" : vencedor=="" ? null : "Empate"}</h2>
                    <button onClick={jogar} disabled={!vezdo1}>Jogar Dado</button>

                </div>
                    
                
                <p></p>
                <div className="dados2" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', justifyContent: 'center', minHeight: '100vh', width: '100vw', padding: '5px', marginTop: '-15%'}}>
                    <h1>Jogador 2</h1>
                    <div className="fotodado" style={{display:'flex'}}> 
                    <Dado valor={dado3} />
                    <Dado valor={dado4} />
                    </div> 
                    <p>Soma: {dado3 + dado4}</p>
                    <h2>{vencedor=="Jogador 2" ? "Jogador 2 Venceu" : vencedor=="Jogador 1" ? "Jogador 2 Perdeu" : vencedor=="" ? null : "Empate"}</h2>
                    <button onClick={jogar} disabled={vezdo1}>Jogar Dado</button>
                </div>
            </div>

        </div>
            :

            
                <div className="resultadofinal" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', minHeight: '100vh', width: '100vw', padding: '20px'}}>
                    <h1 >Fim do jogo</h1>
                    <p>{pontos1>pontos2 ? "Venceu o jogador 1": pontos2>pontos1 ? "Venceu o jogador 2" : "Empate geral"}</p>
                    <button onClick={reinicio}>Jogar Novamente</button>
                </div>

            }
            </div>
    )

}
