# Imagens grátis
- https://pixabay.com/pt/


# informações importantes
- NAS IMAGENS GRÁTIS NÃO POSSO PEGAR IMAGENS E DIZER QUE SÃO MINHAS
- NAS IMAGENS NÃO POSSO COLOCAR O FUNDO DA UNITEPAC LÁ
- `terminal` npx create-react-app nome-do-projeto
- `npm start` para iniciar o projeto
- `npm install` já resolve todas as nossas dependências
- fiz a instalação do Bootstrap
- `npm install bootstrap` mas vou fazer o teste usando apenas npm install
- instalei o react-router-dom `npm install react-router-dom`
- instalei o bootstrap-icons `npm install bootstrap-icons`
- já tinha o fav icons no projeto
- arquivos de textos necessários para o projeto foram adicionados
- navBar foi unificada
- no momento atual (19/09/2024) estou listando todas as partes do corpo
- precisamos listar apenas aquelas que tem um link
- idéia é iplemnetar uma função para renderizar apenas aqueles que estiverem link definido
- mas primeiro temos que deixar a lista funcional
- lista de imagens que eu preciso adicionar
- home --> ParteDoCorpo --> Visualizacao
- fiz algumas alterações no header 



# Anotações
- a parte de cima onde está escrito Unitpac Afya é um botão
- não consegui adicionar estilhos ao html, talvez seja por conflitos com o bootstrap
- não consegui nem adicionar css in line
- nem css em um arquivo separado
- useNavigate precisa ficar dentor do Router
- pelo visto vou ter que colocar os links de icons no imagebotton
- forma de importa css no js `import styles from '../styles/ImageButton.module.css'`
- 25/09/2024
- a pasta text foi movida para a home 
- fiz uma modificação para renderizar a lista de partes
- a modificação é poder escolher qual lista você vai renderizar
- no futuro serão vários sistemas além do ósseo e a home precisará mudar para a lista
- não devo me esquecer de mexer no id
- preciso de uma página para ser acessada quando clica em por exemplo divisão da pelve
- pra isso preciso criar um componente para usar em cada parte
- foi adicionado o título que pode ser modificado e reutilizado
- esse título é usado na lista de partes para rederizar o titulo da lista
- a lista funciona com o arquivo txt e o titulo
- 25/09/2024 --> 16:47
- redirecionamento está funcional mas precisa modificar a página
- parte detalhada é só um exemplo, irei trocar ainda
- a troca tá descrita lá na análise de requisitos
- a página da torca ainda deve ser criada
- o nome da página seria algo como NomeDaParte 
- 25/09/2024 --> 17:21
- pelo jeito vou precisar de um arquivo por elemento da lista
- a página home vai listar os sistemas que estão descritos na partes `Sistemas`
- não sei se vou conseguir finalizar a tempo
- fiz outras instalações do bootstrap
- deu tudo certo, falta só deixar mais bonito
- está tudo funcional mas você precisa rodar o comando npm install para instalar as dependências
- parte do home tem apenas o sistema esquelético provisório deve ser feita algumas alterações nele 
- a função lista os sistemas e o link

- 08/10/2024 --> 14:20
- verifiquei um problema na barra de pesquisa na forma que é de pesquisar
- ele deveria pesquisar na lista mas também pesquisou em outros lugares
- ele faz diferenciação de letras minúsculas para maiúsculas
- erro corrigido, agora graças ao className `lista-de-partes` não existe mais esse erro
- 08/10/2024 --> 14:46
- mais um erro foi descoberto que a tag do instagram não some, erro de responsividade.
- 08/10/2024 --> 16:00
- quando você clica em uma letra ela redireciona a um negócio, o que não deve acontecer.
- devo adiconar a Notfound
- mudei o título para cima da imagem tanto no home quanto no sistema esquelético
- 08/10/2024 --> 16:50
- achei melhor deixar a lista um pouco mais distanciada das letras, pra mim ficou mais bonito visualmente
- queria colocar o hover no h5 da lista mas não consegui
- adicionada a página not found
- 08/10/2024 --> 17:14
- depois a gente tem que ver a questão da parte detalhada
- fiz a remoção no `app.js` que ele redirecionava a uma página sem sentido e devemos rever isso
- ainda falta organizar os sistemas

- 09/10/2024 --> 16:39
- fiz mudança no nome do arquivo parte detalhada pois ainda vai ter o Arquivo chamado parteDetalhada
- O arquivo ListaPartes não precisa mais do título então retirei

# Sistemas 
- Sistema Esquelético
- Sistema Muscular
- Sistema Nervoso
- Sistema Endócrino
- Sistema Cardiovascular
- Sistema Respiratório
- Sistema Digestivo
- Sistema Urinário
- Sistema Imunológico
- Sistema Tegumentar
- Sistema Reprodutivo

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
