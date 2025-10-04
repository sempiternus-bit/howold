function verificar(){

    let fano = new Date()
    fano = fano.getFullYear()
    let img = document.createElement('img')
    let res = document.getElementById('res')
    let ano = document.getElementById('txtano')
    let sexo = document.getElementsByName('radsex')
    let idade = Number(fano - ano.value)
    if (ano.value.length == 0 || Number(ano.value) > fano || ano.value <= 0 || Number.isInteger(Number(ano.value)) == false){

        res.innerHTML = '[ERRO], o valor digitado é inválido, tente novamente!'
        
    }else{

        if(sexo[0].checked){

            if(idade > 1 && idade < 16){

                res.innerHTML = `Detectamos uma pessoa do sexo mascuino de idade ${idade}`
                img.setAttribute('src', 'menino.png')

            }else if(idade < 30){

                res.innerHTML = `Detectamos uma pessoa do sexo mascuino de idade ${idade}`
                img.setAttribute('src', 'jovemadulto.png')

            }else if(idade < 50){

                res.innerHTML = `Detectamos uma pessoa do sexo mascuino de idade ${idade}`
                img.setAttribute('src', 'adulto.png')

            }else{

                res.innerHTML = `Detectamos uma pessoa do sexo mascuino de idade ${idade}`
                img.setAttribute('src', 'idoso.png')

            }

        }else if(sexo[1].checked){

            if(idade > 1 && idade < 16){

                res.innerHTML = `Detectamos uma pessoa do sexo feminino de idade ${idade}`
                img.setAttribute('src', 'menina.png')

            }else if(idade < 30){

                res.innerHTML = `Detectamos uma pessoa do sexo feminino de idade ${idade}`
                img.setAttribute('src', 'jovemadulta.png')

            }else if(idade < 50){

                res.innerHTML = `Detectamos uma pessoa do sexo feminino de idade ${idade}`
                img.setAttribute('src', 'adulta.png')

            }else{

                res.innerHTML = `Detectamos uma pessoa do sexo feminino de idade ${idade}`
                img.setAttribute('src', 'idosa.png')

            }

        }

        res.appendChild(img)

    }



}