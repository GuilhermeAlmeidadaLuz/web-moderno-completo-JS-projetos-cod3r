# Atualização do React-Router-Dom

Olá pessoas! Nas próximas aulas vamos aprender como definir as rotas da nossa aplicação, e com o advento do React Routerv6 o componente Switch deixou de existir, e as rotas passaram a ser implementadas com o uso do componente Routes.

Então antes de começar vamos instalar o react-router-dorm com o seguinte comando:
```powershell
npm install react-router-dom@6
```
Feito essa instalação, fique atento que o professor vai importar nas aulas componentes do react-router. Só que você vai importar o os componentes do react-router-dom, dessa forma:
```jsx
import { Routes, Route } from "react-router-dom";
```
Então ao invés de implementarmos nossas rotas assim:


Passamos a implementar assim:


Perceba que a forma como referenciamos nossos componentes também está diferente, ao invés de passarmos o componente como children (filho) agora passamos como props.


Logo depois no arquivo App.jsx, o professor faz a seguinte importação: import { HashRouter } from " react-router-dom ". Não é para você fazer essa importação, você terá que importar:
```jsx
import { BrowserRouter } from 'react-router-dom'
```
Seu arquivo App.jsx tem que ficar da seguinte forma:


Conclusão:
Vimos que o Switch não existe mais então onde o professor importar/usar o Switch, você importará/utilizará o Routes, tomando cuidado também para passar o componente como propriedade e não mais como filho. Um abraço e bons estudos! : )