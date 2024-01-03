# Api Facilita Systems:

- Projeto feito para adicionar comentários á respeito da empresa.

## Instalação

1. Clone o repositório: `git clone https://github.com/Martim-Fuhr/api-fullstack-facilita`
2. Navegue até a raiz do projeto.
3. Instale as dependências: `docker-compose up --build`

# Configuração

Antes de iniciar a aplicação, configure as seguintes variáveis de ambiente:

- `DB_HOST`: Host do banco de dados MySQL.
- `DB_USER`: Usuário do banco de dados.
- `DB_PASSWORD`: Senha do banco de dados.
- `DB_NAME`: Nome do banco de dados.

Crie um arquivo `.env` na raiz do projeto e adicione essas variáveis.

Contudo, deixei meu arquivo `.env` dentro de `/backend` para visualização/utilização caso necessário.

# Uso

1. Inicie a aplicação: `docker-compose up`
2. No navegador, acesse o link para ver se o backend subiu corretamente: `http://localhost:3030`
3. Acesse a aplicação no navegador para usá-la: `http://localhost:3000`
4. Use as APIs conforme a documentação.
