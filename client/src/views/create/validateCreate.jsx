const validateCreate=(input)=>{
    let error={}

    if (input.nombre.length<1){ error.nombre="El nombre no puede estar vacío"}
    if (input.dificultad<1||input.dificultad>5){ error.dificultad="La dificultad debe ser entre 1 y 5"}
    if (input.temporada){
        let temporadaLower=input.temporada.toLowerCase()
    if (
        temporadaLower!=='verano'&&
        temporadaLower!=='invierno'&&
        temporadaLower!=='otoño'&&
        temporadaLower!=='primavera'){ error.temporada="La temporada no es correcta"}
    }
    


    
    return error
}

export default validateCreate