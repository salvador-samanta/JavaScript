        let fechayhora = new Date()
        let numerodia = fechayhora.getDay()
         console.log(fechayhora)
         console.log(numerodia)

        let nombredia = ''
         switch(numerodia){
             case 0:
                 nombredia= 'Domingo'
             break
             case 1:
             nombredia= 'Lunes'
             break   
             case 2:
             nombredia= 'Martes'
             break
             case 3:
             nombredia= 'Miercoles'
             break
             case 4:
             nombredia= 'Jueves'
             break
             case 5:
             nombredia= 'Viernes'
             break
             case 6:
             nombredia= 'Sabado'
             break
             default:
                 nombredia = 'Dia desconocido'
             break    
         }
         document.write('El numero de día es: ' + numerodia + '<br>')
         document.write('Hoy es ' +nombredia + '<br>')
    </script>
</body>
</html>
