# Space Time Backend

Este é o repositório do backend para o aplicativo Space Time. Aqui você encontrará a lógica do servidor, integração com o FaunaDB, funções serverless com Faastify, autenticação GitHub e outras funcionalidades relacionadas ao backend.

## Tecnologias Utilizadas

- **Faastify:** Framework para funções serverless.
- **Prisma:** Camada de acesso a dados.
- **Autenticação GitHub:** Utilizada para proteger o acesso e as operações no aplicativo.

## Configuração do Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias para o backend. Veja o exemplo no arquivo `.env.example`.

```bash
# Instale as dependências
npm install

# Execute as funções serverless localmente (exemplo)
faastify local
