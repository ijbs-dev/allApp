## allApp - Gerenciando suas Tarefas com Eficiência

Um aplicativo simples e intuitivo para gerenciar tarefas diárias, com suporte a detalhes como título, descrição, data e horários de início e fim. Totalmente personalizável, com design moderno e otimizado para usabilidade.

---

### 🗂 Menu

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Demonstração](#demonstração)
3. [Funcionalidades](#funcionalidades)
4. [Design e Personalização](#design-e-personalização)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Como Usar](#como-usar)
7. [Personalização do Estilo](#personalização-do-estilo)
8. [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

### 📖 Sobre o Projeto

O **TodoApp** foi desenvolvido para fornecer uma maneira eficiente e minimalista de organizar tarefas diárias. Ele permite adicionar, editar, excluir e marcar tarefas como concluídas. Cada tarefa pode conter:

- Um título.
- Uma descrição opcional.
- Data, horário de início e término.

O layout foi projetado para ser leve e responsivo, adequado tanto para desktop quanto para dispositivos móveis.

---

### 🎥 Demonstração

#### Exemplo de Interface:
- **Container Azul Esverdeado** (`teal claro`) para tarefas:
  - `background-color: #b2dfdb`
- **Fundo Verde Claro** para a página:
  - `background-color: #e0f2f1`

<p align="center">
<img src="screenshot.png" alt="Interface do TodoApp" width="600">
</p>

---

### ✨ Funcionalidades

- **Adicionar Tarefas:** Insira título, descrição, data e horários.
- **Editar Tarefas:** Modifique informações já cadastradas.
- **Excluir Tarefas:** Remova tarefas que não são mais necessárias.
- **Marcar como Concluída:** Indique o progresso da tarefa.
- **Persistência:** As tarefas são salvas no `localStorage` para que não sejam perdidas ao recarregar a página.

---

### 🎨 Design e Personalização

O **TodoApp** é estilizado com **Tailwind CSS** e **Bootstrap**. O design padrão utiliza cores suaves para uma experiência visual agradável:

- **Container das Tarefas:** `#b2dfdb` (teal claro).
- **Fundo da Página:** `#e0f2f1` (verde claro).
- **Lista de Tarefas:** `#fce4ec` (rosa claro) com hover em `#f8bbd0` (rosa médio).

#### Exemplo de Personalização:
Para mudar o **container** para um azul claro, edite o arquivo `style.css`:

```css
.container {
    background-color: #bbdefb; /* Azul claro */
}
```

---

### 📁 Estrutura do Projeto

```bash
todo-app/
├── css/
│   └── style.css      # Estilos personalizados
├── js/
│   └── app.js         # Lógica do aplicativo
└── index.html         # Estrutura principal
```

---

### 🛠 Como Usar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/todo-app.git
   cd todo-app
   ```

2. **Abra o Arquivo HTML**:
   Abra o arquivo `index.html` no navegador para usar o aplicativo.

---

### 🎨 Personalização do Estilo

Todas as cores e estilos podem ser alterados no arquivo `style.css`. Por exemplo:

#### Alterar o Fundo da Página:
```css
body {
    background-color: #e3f2fd; /* Azul claro */
}
```

#### Alterar o Fundo do Container:
```css
.container {
    background-color: #bbdefb; /* Azul claro */
}
```

---

### 🖥 Tecnologias Utilizadas

- **HTML5** para estrutura do projeto.
- **CSS3** (Tailwind & Bootstrap) para estilização.
- **JavaScript** para lógica do aplicativo.
- **localStorage** para persistência de dados.

---


