const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const data = document.getElementById('data')

        

         let dt=new Date();
        let diasem=dt.getDay();
        let dia=dt.getDate()
        let mes=dt.getMonth();
        let ano=dt.getFullYear();
        
        let meses=new Array("Janeiro","Fevereirao","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")
        let semanas=new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado")


        document.write("<div class='q1'><marquee behavior= direction='right'><h1>Hoje é ! " + semanas[diasem] + ", " + dia +  " de " + meses[mes] + " de " + ano + ".</marquee></h1></div>");