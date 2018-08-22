# Desafio fake users

## To run this project
  * `yarn` ou `npm i`.
  * `yarn start` ou `npm run start`.

## Tecnologias utilizadas
  * reactjs
  * redux
  * es6+
  * webpack com babel transpile
  * sass

## Objetivos e soluções
**Foi incluido um link tanto para adicionar usuario quando para testar o breacrumb dessa forma existe uma navegação e um controle da rota podendo fazer o breacrumb consumindo dados da propria url.**
1. The breadcrumb shall have 10 items starting from the Home link until Current page in the DOM but you should hide the items 3 to 9 as is in the UI
  * **Ok, listando com base no retorno do react-router-dom, no link chamado. Quando a rota nao existe redireciona o usuario para a rota porem com conteudo de "not found"**

2. User table content shall have information from the endpoint: https://jsonplaceholder.typicode.com/users
  * **Request utilizando o fetch() do javascript**

3. E-mail column shall link to user’s e-mail address
  * **href=mailto:'email do usuario'**

4. City column shall link to Google Maps coordinates accordingly
  * **href=googlemapslink/coordenadas**

5. Ride in Group and Day of the week columns shall have the content created by you. You shall add this information for users loaded from endpoint and for new
users added via registration form.
  * **funçao local que gera randomicamente**


6. Posts, Albums and Photos shall be a count of items from the following endpoints:
  * Posts: https://jsonplaceholder.typicode.com/posts
  * Albums: https://jsonplaceholder.typicode.com/albums
  * Photos: https://jsonplaceholder.typicode.com/photos
    * **Essas requisiçoes estao "aninhadas" junto com a requisição de pegar o usuario. Por que isso ? Dessa forma eu consigo fazer um filter e agrupar as fotos posts e albums por usuario em uma unica chamada para cada metodo, nao tendo a nessecidade de varias requests dentro do component, é feito tudo uma unica vez na construçao do mesmo**


7. While hovering any row a trash icon must be shown in order to remove the row entry (data doesn’t need to persist)
  * **OK - a remoção é feita no reducer retornando atravez do filter somente os valores que sao diferentes do passado para ele como removido, assim "removendo" do stado da aplicação, tendo que fazer refresh para voltar o usuario removido**

8. Registration form shall follow the specification on the UI for the mouse over elements, focused field and selected options
  * **O usuario novo é incluido ao fim do array de usuarios no reducer pelo concat() incluindo assim o usuario como ultima posição do array**

9. Filter User table content by any column using the filter field (it can be done in a model level or directly in the DOM element)
  * **O usuario ira fazer a busca pelo filtro de name, ou pode ordenar a tabela asc/desc pelos campos username, name, e-mail**


10. (NICE TO HAVE) Saving a new user the application shall add he/she to the end of the Users' table
  * Do not include link to Google Maps for new users - **OK**
  * Posts, Albums and Photos count shall be set 0 for new users - **OK**
  * Validate form before save - **OK**
    * **A validação do usuario eu optei por validar o estado local de cada input field e mostrar a mensagem de erro e alterar a borda do input text, no input radio ou checkbox, apenas a mensagem é emitida, devido ao custom css do checkbox.**
    * **A parte da validaçao pode ser melhorada, pode sempre pode, porem como era um teste com fins de nivelamento, optei por fazer algo proprio mesmo que simples para que dessa forma eu pudesse mostrar mais o controle sobre o estado do componente =)**
