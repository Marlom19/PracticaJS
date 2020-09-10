var miobjeto={
    valor1:10,
    valor2:11,
    valor3:true,
    mifunction:(a,b)=>a+b*1000,
    objeto2:{
        valorobj2_1:2,
        valorobj2_2:222
    },
    Objeto3:434,
    fecha: new Date()

}

console.log(miobjeto.fecha.getMilliseconds())
console.log(miobjeto.mifunction(2,3))