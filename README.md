# 🗂️ **Banco de Dados Volátil** 💾

Um sistema de gerenciamento de dados temporários com funções administrativas de cadastro, alteração, busca e reset. Ele utiliza armazenamento em memória para armazenar os dados, tornando-os voláteis e não persistentes.

---

## 🚀 **Visão Geral do Projeto**

Este projeto implementa um banco de dados volátil que armazena informações de usuários e dados relacionados no lado do cliente (navegador). Ele inclui funcionalidades administrativas, como:

- **Cadastro de usuários e informações básicas.**  
- **Alteração de senhas seguras.**  
- **Busca e recuperação de dados por meio de informações de login.**  
- **Gerenciamento de dados no front-end sem persistência no servidor.**

O sistema é adequado para uso em testes, simulações ou aplicações de aprendizado, onde dados temporários são suficientes.

---

## 🛠️ **Recursos Principais**

### Funcionalidades Implementadas:

1. **Cadastro de Usuários**  
   - Cadastra novos usuários com detalhes como CPF, e-mail, profissão, dados pessoais e experiência.
   - Validação automática para evitar dados duplicados.

2. **Alteração de Senha**  
   - Permite a alteração de senha mediante a verificação do código de usuário correto.

3. **Busca de Informações**  
   - Busca por dados armazenados em memória através de um sistema de login.

4. **Reset de Dados**  
   - Limpeza de campos de cadastro e formulário com um clique.

5. **Gerenciamento de Interface (Voltar/Redirecionar)**  
   - Interface com controle completo para voltar etapas e corrigir entradas.

---

## ⚙️ **Tecnologias Utilizadas**

- **JavaScript (ES6+)**: Para implementação da lógica no lado do cliente.
- **HTML/CSS**: Estruturação básica e interface de usuário.
- **Fetch API**: Para buscar dados de CEP automaticamente no serviço `viacep`.
- **DOM Manipulation**: Interatividade através de botões e eventos.

---

## 📂 **Estrutura do Projeto**

```
/banco-volatil
│
├── index.html                # Estrutura HTML principal do projeto
├── style.css                 # Estilização da interface
├── script.js                 # Lógica JavaScript principal
├── README.md                 # Documentação do projeto
```

---

## ▶️ **Como Executar**

1. Clone ou faça o download do projeto.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Teste os recursos através da interface web.

---

## 🎮 **Exemplo de Uso**

### **Fluxo de Cadastro**

1. Clique em **"Cadastrar"**.
2. Insira as informações obrigatórias no formulário.
3. Valide os dados clicando em **Continuar**.
4. Confirme seu cadastro.

### **Fluxo de Busca**

1. Utilize **Código/Email** para procurar informações no sistema.
2. Após sucesso na busca, os dados serão exibidos no formulário de informações.

---

## 📊 **Estrutura de Dados**

O banco utiliza as seguintes estruturas de dados em memória:

1. `Data_1`: Contém informações pessoais dos usuários.
2. `Data_2`: Contém detalhes de endereço.
3. `Data_3`: Contém informações de dados profissionais.
4. `Data_4`: Contém senhas e dados básicos para autenticação.

---

Agora você está pronto para testar o banco de dados volátil e explorar suas funcionalidades! 🖥️✨