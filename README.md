# The Eye — landing page

Site React + Vite com páginas estáticas em `/`, `/privacidade/` e `/termos/`.

```sh
cd landing
npm install
npm run dev
npm run build
```

O site usa HLC Software e `contact@henriquecavalcante.com` como responsável e contato. Quando houver listagem pública, copie `.env.example` para `.env` e defina `VITE_PLAY_STORE_URL`. O botão de download só aparece com um link válido `https://play.google.com/store/apps/details?...`.

Para publicar somente a página em um repositório público, use o conteúdo desta pasta como a raiz do repositório separado. Importe esse repositório na Vercel com preset **Vite**. O arquivo `vercel.json` define `npm run build`, saída `dist` e URLs com barra final. Se importar o repositório privado do app, configure **Root Directory** como `landing`; nesse caso, o código do app continua privado.

Na Vercel, adicione `theeye.henriquecavalcante.com` em **Project Settings → Domains**. No Cloudflare, crie um `CNAME` com nome `theeye` e valor exatamente igual ao alvo informado pela Vercel para esse projeto, em modo **DNS only**. Aguarde a verificação do domínio e do certificado HTTPS pela Vercel. O registro do Crivo não precisa mudar.

URL da política para o campo **Privacy policy** do Play Console: `https://theeye.henriquecavalcante.com/privacidade/`. Os termos ficam em `https://theeye.henriquecavalcante.com/termos/`. A política também precisa permanecer acessível dentro do aplicativo; o texto no app deve refletir esta página. Reveja as declarações de **Data safety**, permissões, público-alvo e anúncios para a versão efetivamente enviada. O app atual não cria contas, então o requisito de exclusão de conta não se aplica enquanto isso continuar verdadeiro.

Esta política descreve o código atual do repositório. Reavalie o texto se forem adicionados analytics, publicidade, contas, backend, coleta de dados ou SDKs.
