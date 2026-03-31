// Aula 427. Componente Cadastro Usuário #01
import React, { Component } from "react"
import axios from 'axios'   // Aula 430. Componente Cadastro Usuário #02
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}
// Componente de classe
// Uso de método de ciclo de vida do React
// Uso de estado
/*
 * Component.remount executada antes do componente ser exibido para obter a lista de usuários do backend
 * possibilitando renderizar a tabela
 **/
// Refatorar em UserTable, UserForm, separando UserCrud em componentes menores

// url backend
const baseUrl = 'http://localhost:3001/users'
// estado inical do formulário de usuário para restaurar quando clicar em cancelar // Aula 430. Componente Cadastro Usuário #02
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    state = { ...initialState } // cópia de um objeto por meio de operador spread (espalhamento) para a variável state do componente
    
    componentWillMount() {  // Aula 432. Componente Cadastro Usuário #04
        // componente irá montar, então processa os dados do backend antes de exibir
        axios(baseUrl).then( resp => {  // consulta na url pelo método get
            this.setState({ list: resp.data })
            // console.log(resp.config.method) // Extensão Console Ninja => 
        })  
    }

    clear() {   // limpa para o estado inicial do estado, no objeto user
        this.setState({ user: initialState.user })
    }

    save() {    // incluir (post) e alterar (put) usuário
        const user = this.state.user    // não precisa clonar o objeto com spread pois não vai alterar
        const method = user.id ? 'put' : 'post' // se tiver id, fará put para atualizar, caso contrário, post para inserir
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl    // se tiver id, a url terá um Route Param incluído para o método put fazer a atualização com base no id definido
        
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)     // dado retornando pelo json web server é passado para a lista de estado (state) do Frontend
                this.setState({ user: initialState.user, list })    // limpeza do estado (state) depois da requisição bem sucedida e exibição da lista atualizada
            })
        
    }

    getUpdatedList(user, add = true) {  // recebe um objeto user com nome e email para gerar uma lista atualizada de usuários
        const list = this.state.list.filter( u => u.id !== user.id)    // filtrar por u (users) que tenham id diferente do user.id
        if (add) list.unshift(user)  // adiciona ao início do Array
        return list
    }

    updateField(event) {    // atualiza um campo do formulário - funciona para ambos (name e email)
        const user = { ...this.state.user } // clonando para variável, percorre e espalha os 
        // importante não alterar diretamente a referência para user que encontra em state (estado), por isso a clonagem, modificação e depois sobreescrever o estado com setState().
        // É um processo de evolução do estado e não de alteração da referência
        
        user[event.target.name] = event.target.value    // propriedades name e value do campo input do formulário
        this.setState({ user })     // forma reduzida do ecmascript 2015
    }

    renderForm() {
        // jsx que vai renderizar o formulário
        return (
            <div className="form">  {/** define um formulário */}
                <div className="row"> {/* define uma linha */}
                    <div className="col-12 col-md-6">   {/* define a coluna com classes bootstrap para name*/}
                        {/* col-12 para dispositivos celulares ocuparem 12 colunas; col-md-6 para dispositivo médios, grandes e extra-grandes ocuparem 6 colunas*/}
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6"> {/* define a coluna com classes bootstrap para email*/}
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..."/>
                        </div>
                    </div>
                </div>

                <hr />
                {/* botões: */}
                <div className="row">   {/*outra linha separada para os botões */}
                    <div className="col-12 d-flex justify-content-end"> {/* define a coluna com classes bootstrap para receber os dois botões*/}
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    load(user) {    // Aula 432. Componente Cadastro Usuário #04
        this.setState({ user })
    }

    remove(user) {  // Aula 432. Componente Cadastro Usuário #04
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)  // com base na lista atual, cria uma lista sem o usuário apagado para atribuir a lista do estado (state)
            this.setState({ list }) // atribui ao estado a nova lista
        })
    }

    renderTable() { // Aula 432. Componente Cadastro Usuário #04
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()} {/** tr estarão em outro método de renderização só para linhas */}
                </tbody>
            </table>
        )
    }

    renderRows() {  // Aula 432. Componente Cadastro Usuário #04
        return this.state.list.map(user =>{
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {  // Função que de fato renderiza o Componente de Classe com estado
        // console.log(this.state.list) // Extensão Console Ninja =>
        return (
            <Main {...headerProps}>
                {this.renderForm()} {/*Aula 432. Componente Cadastro Usuário #03 */}
                {this.renderTable()} {/*Aula 432. Componente Cadastro Usuário #04 */}
            </Main>
        )
    }
}