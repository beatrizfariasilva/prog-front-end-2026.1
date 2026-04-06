export default function Dado({valor}) {
    if (valor==1){
        return <div> 
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="1.png" />
        </div>
    } else if (valor==2){
        return <div> 
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="2.png" />
        </div>
    } else if (valor==3){
        return <div> 
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="3.png" />
        </div>
    } else if (valor==4){
        return <div> 
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="4.png" />
        </div>
    } else if (valor==5){
        return <div> 
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="5.png" />
        </div>
    } else if (valor==6){
        return <div> 
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="6.png" />
        </div>
    } else {
        return <h1> Erro! Você não inseriu o número corretamente. </h1>
    }


        
}