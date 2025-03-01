$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
        event.preventDefault();

        var textoTarefa = $('#textoTarefa').val().trim();

        if (textoTarefa !== "") {
            var tarefaItem = $(`
                <li>
                    <span>${textoTarefa}</span>
                    <input type="checkbox" class="checkbox-tarefa">
                    <button class="btn-apagar">Apagar</button>
                </li>
            `);

            $('#TarefaList').append(tarefaItem);
            $('#textoTarefa').val(''); // Limpa o campo corretamente
        }
    });

    $(document).on('click', '.btn-apagar', function() {
        $(this).parent().remove();
    });

    $(document).on('click', '.checkbox-tarefa', function() {
        $(this).siblings('span').toggleClass('completed');
    });
});