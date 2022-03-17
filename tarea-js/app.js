let contenedor = []

let nombre = document.getElementById('nombre')
let gmail = document.getElementById('gmail')
let textarea = document.getElementById('textarea')
let cabesa = `
<thead class="thead-dark ">
    <tr>
        <th>nombre</th>
        <th>Gmail</th>
        <th>asunto</th>
        <th>Eliminar</th>
    </tr>
    </thead>
`


document.addEventListener('click', (e) => {
    if (e.target.id == 'btn') {
        e.preventDefault
        if (nombre.value.length != '' && gmail.value.length != '' && textarea.value.length != '') {
            alertify.success('DATOS ENVIADOS');
            pintarDatos()
            nombre.value = ''
            gmail.value = ''
            textarea.value = ''
        } else {
            alertify.alert("DATOS INCOMPLETOS O INVALIDOS", function() {
                alertify.message('COMPLETAR CAMPOS');
            });
        }
    }
})

function pintarDatos() {
    cabesa += `
<tr>
<td>${nombre.value}</td>
<td>${gmail.value}</td>
<td>${textarea.value}</td>
<td><button>Eliminar</button></td>
</tr>
`
    document.getElementById('tabla').innerHTML = cabesa
}