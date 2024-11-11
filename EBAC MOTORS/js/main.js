$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })
    //APlicando a máscara com o plugin 'JS'
    $('#telefone').mask('(00) 0000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            messages: {
                required: true
            },
            veiculoDeInteresse: { 
                required: false,
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validate){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos}campos incorretos`)
            }
        }
    }) 
    
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({ 
            scrollTop: destino.offset().top
        }, 1000)
    })    
})
