class Billete{
    constructor(v, c){
        this.Valor = v;
        this.Cantidad = c;
    }  
}
let caja =[];           //Cantidad de Billetes que poseo
let entregado=[];       //Cantidad de billetes a entregar
let papeles;            // No las puse en 0
let div;                // No las puse en 0

// Intro de billetes: tanto valor como cantidades //

caja.push(new Billete (50,3));
caja.push(new Billete (20,2));
caja.push(new Billete (10,2));
let dinero;                              //Dinero del usuario
let btn = document.getElementById("Extraction") //Traemos el boton a una variable
let r = document.getElementById("result")       //Traemos el div que mostrara el resultado
btn.addEventListener("click", entregarDinero)   //Ponemos un escuchador y llamamos a una funcion


function entregarDinero(){
    nmb = document.getElementById("Amount")
    dinero = nmb.value 
    for(b of caja){
        if(dinero>0){
            div=Math.floor(dinero/b.Valor)
            if(div>b.Cantidad){
                papeles=b.Cantidad
            }
            else{
                papeles=div
            }
            entregado.push(new Billete(b.Valor, papeles))
            dinero = dinero-(b.Valor*papeles)
        }
    }
    if(dinero>0){
        r.innerHTML = "Lo sentimo, no tenemos la money"
    }
    else{
        for(it of entregado){
            if(it.Cantidad>0){
                r.innerHTML = r.innerHTML + it.Cantidad + " billetes de $" + it.Valor + "<hr>"
            }
        }
    }
}

