# Gemini API Playground

Um projeto Next.js simples para testar a API gratuita do Google Gemini.

## Configuração

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar API Key
1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crie uma API key gratuita
3. Copie a chave e cole no arquivo `.env.local`:

```env
GEMINI_API_KEY=sua_chave_aqui
```

### 3. Executar o projeto
```bash
npm run dev
```

## Como usar

### Endpoint da API
- **URL**: `http://localhost:3000/api/gemini`
- **Método**: POST
- **Content-Type**: application/json

### Exemplo de requisição
```bash
curl -X POST http://localhost:3000/api/gemini \
  -H "Content-Type: application/json" \
  -d '{"message": "Olá, como você está?"}'
```

### Exemplo de resposta
```json
{
  "success": true,
  "response": "Olá! Eu estou bem, obrigado por perguntar. Como posso ajudá-lo hoje?",
  "message": "Olá, como você está?"
}
```

### Testar se a API está funcionando
```bash
curl http://localhost:3000/api/gemini
```

## Estrutura do Projeto

```
src/
  app/
    api/
      gemini/
        route.ts    # API route para comunicação com Gemini
.env.local          # Variáveis de ambiente (API key)
```

## Próximos passos

- Adicionar interface web para testar a API
- Implementar streaming de respostas
- Adicionar suporte a imagens
- Implementar histórico de conversas
- Adicionar diferentes modelos do Gemini
