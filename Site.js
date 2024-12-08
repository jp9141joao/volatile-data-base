let Main = ()=>{
    var Data_1 = []
    var Data_2 = []
    var Data_3 = []
    var Data_4 = []

    User_Adm(Data_1,Data_2,Data_3,Data_4)

    document.addEventListener("DOMContentLoaded",()=>{
        let button_1 = document.getElementById("Cadastrar")
        let button_2 = document.getElementById("Procurar1")
        let button_3 = document.getElementById("Mudar")
        let button_4 = document.getElementById("Resetar")
        let button_5 = document.getElementById("Pagina_Cadastro")
        let button_6 = document.getElementById("Voltar")
        let button_7 = document.getElementById("Mudar_Senha")
        let button_8 = document.getElementById("Voltar_Mudar")
        let button_9 = document.getElementById('Resetar2')
        let button_10 = document.getElementById('Continuar')
        
        button_1.addEventListener("click",()=>{
            Cadastrar(Data_1,Data_2,Data_3,Data_4)
        })
        
        button_2.addEventListener("click",()=>{
            setTimeout(()=>{
                Procurar(Data_1,Data_2,Data_3,Data_4)
            },350)
        })
    
        button_3.addEventListener("click",()=>{
            Mudar(Data_4)
        })

        button_4.addEventListener("click",()=>{
            document.getElementById("Codigo1").value = ""
            document.getElementById("Senha1").value = ""
            document.getElementById("Nome").value = ""
            document.getElementById("Boas_Vindas").innerHTML = ""
            document.getElementById("Sobrenome").value = ""
            document.getElementById("Idade").value = ""
            document.getElementById("Data").value = ""
            document.getElementById("Cpf").value = ""
            document.getElementById("Email").value = ""
            document.getElementById("Cep").value = ""
            document.getElementById("Pais").value = ""
            document.getElementById("Estado").value = ""
            document.getElementById("Cidade").value = ""
            document.getElementById("Bairro").value = ""
            document.getElementById("Rua").value = ""
            document.getElementById("Profissao").value = ""
            document.getElementById("Salario").value = ""
            document.getElementById("Experiencia").value = ""
            document.getElementById("Console").value = ""
            document.getElementById("Console2").value = ""
            document.getElementById("Console3").value = ""
            location.reload();
        })

        button_5.addEventListener("click",()=>{
            Pagina_Cadastro()
        })

        button_6.addEventListener("click",()=>{
            Voltar()
        })

        button_7.addEventListener("click",()=>{
            Mudar_Key(Data_1,Data_4)
        })

        button_8.addEventListener("click",()=>{
            Voltar_Mudar()
        })

        button_9.addEventListener("click",()=>{
            document.getElementById("Codigo2").value = ""
            document.getElementById("Senha2").value = ""
            document.getElementById("Senha3").value = ""
            document.getElementById("Nome_Cadastro").value = ""
            document.getElementById("Sobrenome_Cadastro").value = ""
            document.getElementById("Idade_Cadastro").value = ""
            document.getElementById("Data_Cadastro").value = ""
            document.getElementById("Cpf_Cadastro").value = ""
            document.getElementById("Email_Cadastro").value = ""
            document.getElementById("Cep_Cadastro").value = ""
            document.getElementById("Pais_Cadastro").value = ""
            document.getElementById("Estado_Cadastro").value = ""
            document.getElementById("Cidade_Cadastro").value = ""
            document.getElementById("Bairro_Cadastro").value = ""
            document.getElementById("Rua_Cadastro").value = ""
            document.getElementById("Profissao_Cadastro").value = ""
            document.getElementById("Salario_Cadastro").value = ""
            document.getElementById("Experiencia_Cadastro").value = ""
            document.getElementById("Console2").value = ""
        })

        button_10.addEventListener('click',()=>{
            Continuar(Data_4)
        })
    })

}

let User_Adm = (Data_1,Data_2,Data_3,Data_4)=>{

    class Info_1{
        constructor(Codigo,Senha){
            this.Codigo = Codigo 
            this.Senha = Senha
        }
    }

    class Info_2{
        constructor(Nome,Sobrenome,Idade,Data,Cpf,Email){
            this.Nome = Nome
            this.Sobrenome = Sobrenome 
            this.Idade = Idade 
            this.Data = Data 
            this.Cpf = Cpf 
            this.Email = Email 
        }
    }

    class Info_3 {
        constructor(Cep,Pais,Estado,Cidade,Bairro,Rua){
            this.Cep = Cep 
            this.Pais = Pais 
            this.Estado = Estado 
            this.Cidade = Cidade 
            this.Bairro = Bairro 
            this.Rua = Rua 
        }
    }

    class Info_4 {
        constructor(Profissao,Salario,Experiencia){
            this.Profissao = Profissao
            this.Salario = Salario
            this.Experiencia = Experiencia
        }
    }

    var Key = new Info_1(2005,"12345") 
    var User = new Info_2("Joao Pedro","Alguma Coisa",18,"01-01-1999","000.000.000-00","email@gmail.com")
    var Zip = new Info_3("00000-000","Brasil","São Paulo","São Paulo","----","----")
    var Job = new Info_4("Engenheiro de Software","5000","5")

    Data_1.push(User)
    Data_2.push(Zip)
    Data_3.push(Job)
    Data_4.push(Key)
}

let Cadastrar  = async (Data_1,Data_2,Data_3,Data_4)=>{
    let Codigo_Cadastro = document.getElementById("Codigo2").value
    let Senha_Cadastro = document.getElementById("Senha2").value
    let Nome_Cadastro = document.getElementById("Nome_Cadastro").value
    let Sobrenome_Cadastro = document.getElementById("Sobrenome_Cadastro").value
    let Idade_Cadastro = Number(document.getElementById("Idade_Cadastro").value)
    let Data_Cadastro = document.getElementById("Data_Cadastro").value
    let Cpf_Cadastro = document.getElementById("Cpf_Cadastro").value
    let Email_Cadastro = document.getElementById("Email_Cadastro").value
    let Profissao_Cadastro = document.getElementById("Profissao_Cadastro").value
    let Salario_Cadastro = Number(document.getElementById("Salario_Cadastro").value)
    let Experiencia_Cadastro = Number(document.getElementById("Experiencia_Cadastro").value)

    alert(Senha_Cadastro)
    if(Nome_Cadastro === "" || Sobrenome_Cadastro === "" || Idade_Cadastro === "" || Data_Cadastro === "" || Cpf_Cadastro === "" || Email_Cadastro === "" || Profissao_Cadastro === "" || Salario_Cadastro === "" || Experiencia_Cadastro === ""){
        document.getElementById("Console2").innerHTML = `Por favor preencha todas as necessarias!`
        return
    }

    try{
        let Cep_Cadastro = document.getElementById("Cep_Cadastro").value
        let Url = `https://viacep.com.br/ws/${Cep_Cadastro}/json/`
        let Anwser = await fetch(Url)
        let AnwserJson = await Anwser.json()
    
        document.getElementById("Pais_Cadastro").value = "Brasil"
        document.getElementById("Estado_Cadastro").value = AnwserJson.uf
        document.getElementById("Cidade_Cadastro").value = AnwserJson.localidade
        document.getElementById("Bairro_Cadastro").value = AnwserJson.bairro
        document.getElementById("Rua_Cadastro").value = AnwserJson.logradouro

        alert(0)
        if(Data_1.some(item => item.Email == Email_Cadastro)){
            document.getElementById("Console2").innerHTML = `E-mail já cadastrado!`
            return
        }
        alert(10)
        if(Data_1.some(item => item.Cpf == Cpf_Cadastro)){
            document.getElementById("Console2").innerHTML = `Cpf já cadastrado!`
            return
        }
        alert(20)
        class Login {
            constructor(Codigo,Senha){
                this.Codigo = Codigo
                this.Senha = Senha
            }
        }
        alert(30)
        class Cliente {
            constructor(Nome,Sobrenome,Idade,Data,Cpf,Email){
                this.Nome = Nome
                this.Sobrenome = Sobrenome
                this.Idade = Idade
                this.Data = Data
                this.Cpf = Cpf
                this.Email = Email
            }
        }
        
        class Endereco {
            constructor(Cep,Pais,Estado,Cidade,Bairro,Rua){
                this.Cep = Cep
                this.Pais = Pais
                this.Estado = Estado
                this.Cidade = Cidade
                this.Bairro = Bairro
                this.Rua = Rua
            }
    
        }
    
        class Trabalho {
            constructor(Profissao,Salario,Experiencia){
                this.Profissao = Profissao
                this.Salario = Salario
                this.Experiencia = Experiencia
            }
        }
    
        var Key = new Login(Codigo_Cadastro,Senha_Cadastro) 
        var User = new Cliente(Nome_Cadastro,Sobrenome_Cadastro,Idade_Cadastro,Data_Cadastro,Cpf_Cadastro,Email_Cadastro)
        var Zip = new Endereco(Cep_Cadastro,"Brasil",AnwserJson.uf,AnwserJson.localidade,AnwserJson.bairro,AnwserJson.logradouro)
        var Job = new Trabalho(Profissao_Cadastro,Salario_Cadastro,Experiencia_Cadastro)
    
        Data_1.push(User)
        Data_2.push(Zip)
        Data_3.push(Job)
        Data_4.push(Key)
    
        document.getElementById("Console2").innerHTML = `Cadastro concluido!`
    }catch{
        document.getElementById("Console2").innerHTML = `Cep Invalido`
    }
}

let Procurar = (Data_1,Data_2,Data_3,Data_4)=>{
    let Email = document.getElementById("Codigo1").value
    let Senha = document.getElementById("Senha1").value

    let iEmail = Data_4.findIndex(item => item.Codigo == Email)
    let iSenha = Data_4.findIndex(item => item.Senha == Senha)

    if(!Data_4.some(item => item.Codigo == Email)){
        document.getElementById("Console").innerHTML = `Codigo não existe`
        return
    }

    if(iEmail == iSenha){
        j = Data_4.findIndex(item => item.Codigo == Email)
        document.getElementById("Nome").value = Data_1[j].Nome
        document.getElementById("Boas_Vindas").innerHTML = `Olá ${Data_1[j].Nome}, segue seus dados: `
        document.getElementById("Sobrenome").value = Data_1[j].Sobrenome
        document.getElementById("Idade").value = Data_1[j].Idade
        document.getElementById("Data").value = Data_1[j].Data
        document.getElementById("Cpf").value = Data_1[j].Cpf
        document.getElementById("Email").value = Data_1[j].Email
        document.getElementById("Cep").value = Data_2[j].Cep
        document.getElementById("Pais").value = Data_2[j].Pais
        document.getElementById("Estado").value = Data_2[j].Estado
        document.getElementById("Cidade").value = Data_2[j].Cidade
        document.getElementById("Bairro").value = Data_2[j].Bairro
        document.getElementById("Rua").value = Data_2[j].Rua
        document.getElementById("Profissao").value = Data_3[j].Profissao
        document.getElementById("Salario").value = Data_3[j].Salario
        document.getElementById("Experiencia").value = Data_3[j].Experiencia + " anos"

        document.getElementById("Codigo1").style.display = "none"
        document.getElementById("Senha1").style.display = "none"
        document.getElementById("Console").style.display = "none"

        let Pg_1 = document.getElementById("A1")
        let Pg_2 = document.getElementById("A2")
        let Pg_3 = document.getElementById("Procurar1")

        Pg_1.style.display = "none"
        Pg_2.style.display = "block"
        Pg_3.style.display = "none"

    }else{
        document.getElementById("Console").innerHTML = `Senha invalida!`
    }
}

let Pagina_Cadastro = ()=>{
    let Pg_1 = document.getElementById("X1")
    let Pg_2 = document.getElementById("X2")
    let Pg_3 = document.getElementById("X3")
    let Pg_4 = document.getElementById("Cadastrar")
    let Pg_5 = document.getElementById("B2")
    let Pg_6 = document.getElementById("Continuar")
    let Pg_7 = document.getElementById("B1")

    Pg_1.style.display = "none"
    Pg_2.style.display = "block"
    Pg_3.style.display = "none"
    Pg_4.style.display = "none"
    Pg_5.style.display = "none"
    Pg_6.style.display = "inline-block"
    Pg_7.style.display = "block"
}

let Voltar = ()=>{
    let Pg_1 = document.getElementById("X1")
    let Pg_2 = document.getElementById("X2")
    let Pg_3 = document.getElementById("X3")
    let Pg_4 = document.getElementById('A1')
    let Pg_5 = document.getElementById('A2')
    let Pg_6 = document.getElementById('Codigo1')
    let Pg_7 = document.getElementById('Senha1')
    let Pg_8 = document.getElementById('Procurar1')
    
    Pg_1.style.display = "inline-block"
    Pg_2.style.display = "none"
    Pg_3.style.display = "none"
    Pg_4.style.display = 'inline-block'
    Pg_5.style.display = 'none'
    Pg_6.style.display = 'block'
    Pg_7.style.display = 'block'
    Pg_8.style.display = 'block'

    document.getElementById('Codigo1').value = ''
    document.getElementById('Senha1').value = ''
    document.getElementById("Codigo2").value = ""
    document.getElementById("Senha2").value = ""
    document.getElementById("Senha3").value = ""
    document.getElementById("Nome_Cadastro").value = ""
    document.getElementById("Sobrenome_Cadastro").value = ""
    document.getElementById("Idade_Cadastro").value = ""
    document.getElementById("Data_Cadastro").value = ""
    document.getElementById("Cpf_Cadastro").value = ""
    document.getElementById("Email_Cadastro").value = ""
    document.getElementById("Cep_Cadastro").value = ""
    document.getElementById("Pais_Cadastro").value = ""
    document.getElementById("Estado_Cadastro").value = ""
    document.getElementById("Cidade_Cadastro").value = ""
    document.getElementById("Bairro_Cadastro").value = ""
    document.getElementById("Rua_Cadastro").value = ""
    document.getElementById("Profissao_Cadastro").value = ""
    document.getElementById("Salario_Cadastro").value = ""
    document.getElementById("Experiencia_Cadastro").value = ""
    document.getElementById("Console2").value = ""
}

let Mudar = ()=>{
    let Pg_1 = document.getElementById("X1")
    let Pg_2 = document.getElementById("X2")
    let Pg_3 = document.getElementById("X3")

    Pg_1.style.display = "none"
    Pg_2.style.display = "none"
    Pg_3.style.display = "block"

    document.getElementById('Codigo1').value = ''
    document.getElementById('Senha1').value = ''
}

let Mudar_Key = (Data_1,Data_4)=>{
    let Codigo = document.getElementById("Codigo_Mudar").value
    let Senha = document.getElementById("Senha_Mudar").value
    let Csenha = document.getElementById("Senha_Cmudar").value
    let j = Data_4.findIndex(item => item.Codigo == Codigo)

    if(!Data_4.some(item => item.Codigo == Codigo)){
        document.getElementById("Console3").innerHTML = "Codigo Invalido!"
        return
    }
    if(Data_4.findIndex(item => item.Codigo == Codigo) == Data_4.findIndex(item => item.Senha == Senha)){
        Data_4[j].Senha = Csenha
        document.getElementById("Console3").innerHTML = `${Data_1[j].Nome} sua senha foi alterada com sucesso!`
    }else{
        document.getElementById("Console3").innerHTML = "Senha Invalida!"
    }
}

let Voltar_Mudar = ()=>{
    Pg_1.style.display = "inline-block"
    Pg_2.style.display = "none"
    Pg_3.style.display = "none"
    Pg_4.style.display = 'block'
    Pg_5.style.display = 'none'
    Pg_6.style.display = 'block'
    Pg_7.style.display = 'block'
    Pg_8.style.display = 'block'
    Pg_9.style.display = 'block'

    document.getElementById("Codigo_Mudar").value = ""
    document.getElementById("Senha_Mudar").value = ""
    document.getElementById("Senha_Cmudar").value = ""
    document.getElementById("Console3").innerHTML = ""
}

let Continuar = (Data_4)=>{
    let Codigo_Cadastro = document.getElementById("Codigo2").value
    let Senha_Cadastro = document.getElementById("Senha2").value
    let Senha_Check = document.getElementById("Senha3").value

    if(Data_4.some(item => item.Codigo == Codigo_Cadastro)){
        document.getElementById("Console2").innerHTML = `Codigo já Cadastrado!`
        return
    }
    if(Senha_Cadastro != Senha_Check){
        document.getElementById("Console2").innerHTML = `As senhas não estão iguais!`
        return
    }

    let Pg_1 = document.getElementById("B1")
    let Pg_2 = document.getElementById("Continuar")
    let Pg_3 = document.getElementById("Cadastrar")
    let Pg_4 = document.getElementById("B2")
    
    Pg_1.style.display = "none"
    Pg_2.style.display = "none"
    Pg_3.style.display = "inline-block"
    Pg_4.style.display = "inline-block"

    document.getElementById('Console2').innerHTML = ''

}

Main()
