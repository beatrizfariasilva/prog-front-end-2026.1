export default function Avatar({valor}) {
    if (valor==1){
        return <div> 
            <img src="1.png" />
        </div>
    } else if (valor==2){
        return <div> 
            <img src="2.png" />
        </div>
    } else if (valor==3){
        return <div> 
            <img src="3.png" />
        </div>
    } else if (valor==4){
        return <div> 
            <img src="4.png" />
        </div>
    } else if (valor==5){
        return <div> 
            <img src="5.png" />
        </div>
    } else if (valor==6){
        return <div> 
            <img src="6.png" />
        </div>
    } else {
        return <h1> Erro! Você não inseriu o número corretamente. </h1>
    }


        
}