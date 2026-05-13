# Portfolio — Bruno Borlido Pereira

Site pessoal feito em **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.
Pensado para deploy gratuito no **Vercel**.

## Estrutura

```
Portfolio_Web/
├── src/
│   ├── app/                 ← rotas Next.js (App Router)
│   │   ├── layout.tsx       metadata + html root
│   │   ├── page.tsx         página inicial (compõe os 4 sectores)
│   │   └── globals.css      tailwind + reset + fonte Inter
│   ├── components/          ← 1 ficheiro por secção
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Footer.tsx
│   └── data/                ← tudo o que é "conteúdo editável"
│       ├── profile.ts       nome, email, GitHub, bio, stack
│       └── projects.ts      lista de projetos (título, descrição, tech, links)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Correr localmente

```bash
cd Portfolio_Web
npm install     # primeira vez (~1 min)
npm run dev     # arranca em http://localhost:3000
```

Hot reload: edita qualquer ficheiro em `src/` e o browser atualiza sozinho.

## Editar o conteúdo

99% do que vais querer mudar está em `src/data/`:

- **`profile.ts`** — nome, email, telefone, GitHub, LinkedIn, pitch, biografia, stack
- **`projects.ts`** — lista de projetos. Para adicionar um novo, copia um existente e edita

Não precisas de mexer em `components/` ou `app/` para mudar texto.

Para mudar o **esquema de cores** (azul de marca):
- `tailwind.config.ts` → `theme.extend.colors.accent`
- `src/app/globals.css` → variável CSS `--accent`

## Deploy gratuito no Vercel

1. Cria um repositório no GitHub com esta pasta (ex.: `brunombpereira/portfolio`)
2. Vai a [vercel.com](https://vercel.com), faz login com a tua conta GitHub
3. Clica **"Add New Project" → Import** e seleciona o repo
4. Aceita as defaults — o Vercel deteta Next.js automaticamente — e carrega **Deploy**
5. Em <2 min tens uma URL `portfolio-xxx.vercel.app`
6. Opcional: liga um domínio próprio (ex.: `brunoborlido.dev` ~10€/ano) em
   **Project → Settings → Domains**

Cada push para `main` no GitHub faz redeploy automático.

## Próximos passos sugeridos

- [ ] Adicionar foto pessoal em `public/avatar.jpg` e usar no `<Hero>`
- [ ] Substituir os projetos placeholder pelos teus (se quiseres mais detalhe / screenshots)
- [ ] Acrescentar uma secção `/blog` (Next.js dá-te isto quase de graça com MDX)
- [ ] Configurar Open Graph image (`src/app/opengraph-image.tsx`)
- [ ] Ligar Google Analytics ou Plausible (opcional)

## Stack

| Layer       | Tech                                |
| ----------- | ----------------------------------- |
| Framework   | Next.js 14 (App Router)             |
| Linguagem   | TypeScript                          |
| Estilos     | Tailwind CSS 3                      |
| Tipografia  | Inter (Google Fonts)                |
| Deploy      | Vercel (gratuito tier hobby)        |
| Node        | 18+ recomendado                     |
