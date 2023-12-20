Para lidar com problemas de CORS (Cross-Origin Resource Sharing) em uma aplicação Node.js usando Express, você precisará usar o pacote `cors`. Esse pacote permite que você defina as configurações de CORS de maneira fácil e flexível.

Aqui estão os passos para corrigir o problema do CORS:

1. Instale o pacote `cors`:
   ```bash
   npm install cors
   ```

2. Importe e use o `cors` em sua aplicação Express:

   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();
   
   app.use(cors()); // Isso vai permitir todas as origens. Para maior segurança, configure conforme necessário.
   app.use(express.json());

   // ... restante do código (rotas, manipulação de usuários, etc.)
   ```

Quando você chama `app.use(cors())`, o Express vai automaticamente adicionar cabeçalhos de resposta HTTP adequados para permitir o compartilhamento de recursos entre diferentes origens. Isso é útil especialmente quando sua API é acessada por um cliente web que está hospedado em um domínio diferente.

### Configurando o CORS para Domínios Específicos

Se você quiser restringir o acesso à sua API para domínios específicos, você pode passar opções para o `cors`:

```javascript
const corsOptions = {
    origin: 'https://meudominioespecifico.com',
    optionsSuccessStatus: 200 // Para navegadores legados que não suportam o código de status 204
};

app.use(cors(corsOptions));
```

Lembre-se, configurar o CORS adequadamente é essencial para a segurança da sua aplicação. Permitir todas as origens (`app.use(cors())` sem opções) pode ser perigoso, dependendo do contexto da sua aplicação.
