# MVP-ADS-Unifeso

# **Grupo polo-EAD-Tereópolis 07**

# **Integrantes**

Iago Lima Guinossi - 01020841

Wesley de Souza Freire - 06012510

# **Situação-Problema #1: Circuito Terê Verde**

A geografia do território municipal de Teresópolis é caracterizada por terrenos montanhosos entremeados por vales. A área urbana encontra-se em um planalto a 869 metros acima do nível do mar e é delimitada por três unidades de conservação: o Parque Nacional da Serra dos Órgãos, o Parque Estadual dos Três Picos e o Parque Natural Municipal Montanhas de Teresópolis. A existência das unidades de conservação proporciona ao município o turismo ambiental, em especial de montanhismo, e também limitam o crescimento urbano.

Teresópolis é um destino turístico popular, atraindo visitantes em busca de belezas naturais e atividades ao ar livre, como trilhas e escaladas. A proposta do Circuito Terê Verde busca promover essas atrações, destacando a rica biodiversidade e as opções de ecoturismo disponíveis na região. A plataforma “Terê Verde Online” permitirá que os visitantes tenham acesso a informações atualizadas sobre a biodiversidade, trilhas, cachoeiras e eventos que ocorrem nesses espaços protegidos.

Com uma interface amigável e recursos interativos, o site se tornará uma ferramenta essencial para turistas que desejam explorar as belezas naturais de Teresópolis de forma consciente e atualizada.


# **Possíveis Atores Envolvidos**

●     Visitantes: Usuários em busca de informações sobre ecoturismo.

●     Administradores: Responsáveis por manter o site atualizado com informações relevantes.


# **Exigências**

● Gestão de Disponibilidade: Os administradores devem ter uma área para configurar a disponibilidade e horários de funcionamento de eventos e temporadas, além de atualizações de novidades.

● Desempenho Rápido: O sistema deve responder rapidamente para acomodar um grande número de usuários simultaneamente.

● Interface Intuitiva: A interface do usuário deve ser amigável e de fácil utilização, permitindo navegação fluida.

●  Segurança de Dados: Garantir a segurança e privacidade dos dados pessoais dos administradores.

● Login para Administradores: Um botão de login deve ser disponibilizado para que os administradores acessem áreas restritas do site.

# **Requisitos Funcionais (RF)**

| ID | Descrição |
|----|-----------|
| RF01 | O sistema deve permitir que administradores se registrem com e-mail e senha. |
| RF02 | O sistema deve autenticar administradores via login, retornando um token JWT. |
| RF03 | O sistema deve permitir que administradores criem, editem e excluam trilhas, com até 5 imagens cada. |
| RF04 | O sistema deve permitir que administradores criem, editem e excluam cachoeiras, com até 5 imagens cada. |
| RF05 | O sistema deve permitir que administradores criem, editem e excluam eventos, com até 5 imagens cada. |
| RF06 | O sistema deve permitir que administradores criem, editem e excluam registros de temporada, com 1 imagem cada. |
| RF07 | O sistema deve listar e exibir trilhas, cachoeiras, eventos e temporadas publicamente, sem necessidade de autenticação. |
| RF08 | O sistema deve permitir o upload, substituição e exclusão de imagens associadas aos registros. |
| RF09 | O sistema deve servir as imagens enviadas como arquivos estáticos acessíveis via URL. |

---

# **Requisitos Não Funcionais (RNF)**

| ID | Descrição |
|----|-----------|
| RNF01 | As senhas dos administradores devem ser armazenadas com hash bcrypt (10 rounds). |
| RNF02 | A autenticação deve ser baseada em JWT com validade de 1 dia. |
| RNF03 | O upload de imagens deve aceitar somente os formatos jpeg, jpg, png e webp, com tamanho máximo de 5 MB por arquivo. |
| RNF04 | O banco de dados deve ser SQLite, gerenciado pelo Prisma ORM. |
| RNF05 | A API deve habilitar CORS para permitir requisições de origens distintas. |
| RNF06 | A API deve operar na porta 3000 por padrão. |
| RNF07 | Em ambiente de produção, segredos e configurações sensíveis devem ser fornecidos via variáveis de ambiente (`.env`). |

---

# **Modelo de Dados**

| Entidade | Campos principais | Relação |
|----------|-------------------|---------|
| `Admin` | id, email (único), password | — |
| `Trilha` | id, name, summary, distance, location | 1 Trilha → N ImagemTrilha |
| `ImagemTrilha` | id, src, trilhaId | N → 1 Trilha |
| `Evento` | id, name, summary, location, date | 1 Evento → N ImagemEvento |
| `ImagemEvento` | id, src, eventoId | N → 1 Evento |
| `Cachoeira` | id, name, summary, location | 1 Cachoeira → N ImagemCachoeira |
| `ImagemCachoeira` | id, src, cachoiraId | N → 1 Cachoeira |
| `Temporada` | id, text, image | — |

Exclusões em cascata: ao remover um registro pai, as imagens relacionadas são excluídas automaticamente.

---

# **Endpoints da API**

Base URL: `http://localhost:3000`

### Autenticação
| Método | Rota | Autenticação | Descrição |
|--------|------|:------------:|-----------|
| POST | `/register` | Não | Cria conta de administrador |
| POST | `/login` | Não | Autentica e retorna token JWT |

### Trilhas
| Método | Rota | Autenticação | Descrição |
|--------|------|:------------:|-----------|
| GET | `/trilhas` | Não | Lista todas as trilhas |
| GET | `/trilhas/:id` | Não | Retorna uma trilha |
| POST | `/trilhas` | Sim | Cria trilha (até 5 imagens) |
| PUT | `/trilhas/:id` | Sim | Atualiza trilha |
| DELETE | `/trilhas/:id` | Sim | Remove trilha |

### Cachoeiras
| Método | Rota | Autenticação | Descrição |
|--------|------|:------------:|-----------|
| GET | `/cachoeiras` | Não | Lista todas as cachoeiras |
| GET | `/cachoeiras/:id` | Não | Retorna uma cachoeira |
| POST | `/cachoeiras` | Sim | Cria cachoeira (até 5 imagens) |
| PUT | `/cachoeiras/:id` | Sim | Atualiza cachoeira |
| DELETE | `/cachoeiras/:id` | Sim | Remove cachoeira |

### Eventos
| Método | Rota | Autenticação | Descrição |
|--------|------|:------------:|-----------|
| GET | `/eventos` | Não | Lista todos os eventos |
| GET | `/eventos/:id` | Não | Retorna um evento |
| POST | `/eventos` | Sim | Cria evento (até 5 imagens) |
| PUT | `/eventos/:id` | Sim | Atualiza evento |
| DELETE | `/eventos/:id` | Sim | Remove evento |

### Temporada
| Método | Rota | Autenticação | Descrição |
|--------|------|:------------:|-----------|
| GET | `/temporada` | Não | Lista todos os registros de temporada |
| GET | `/temporada/:id` | Não | Retorna um registro de temporada |
| POST | `/temporada` | Sim | Cria registro de temporada (1 imagem) |
| PUT | `/temporada/:id` | Sim | Atualiza registro de temporada |
| DELETE | `/temporada/:id` | Sim | Remove registro de temporada |

### Arquivos Estáticos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/uploads/:filename` | Serve imagens enviadas |

---

# **Variáveis de Ambiente (Produção)**

| Variável | Descrição | Valor padrão (desenvolvimento) |
|----------|-----------|-------------------------------|
| `PORT` | Porta em que a API será executada | `3000` |
| `JWT_SECRET` | Chave secreta para assinar tokens JWT | `segredo-super-seguro` |
| `DATABASE_URL` | Caminho do banco de dados SQLite | `file:./prisma/dev.db` |

---

# **Tecnologia Utilizada**

● NodeJs

● Express

● Prisma

● Multer

● Jest

# **Como Funcionar projeto local**

**install the dependencies**

npm i

**start the development server**

npm start

**Para acessar frontend dentro da pasta frontend**

**install the dependencies on frontend**

npm i

**start the development server**

npm run dev
