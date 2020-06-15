import React, { Component } from 'react'
import FormValidator from './FormValidator'
import PopUp from './PopUp'

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.validador = new FormValidator([{
      campo:'nome',
      metodo:'isEmpty',
      validoQuando: false,
      mensagem: 'Informe um nome'
    },
    {
      campo:'livro',
      metodo:'isEmpty',
      validoQuando: false,
      mensagem: 'Informe um livro'
    },
    {
      campo:'preco',
      metodo:'isInt',
      validoQuando: true,
      mensagem: 'Informe um valor',
      args: [{min: 0, max: 99999}]
    }
  ]);
    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validador.valido()
    }
    this.state = this.stateInicial
  }

  escutaInput = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  submit = () => {
    const validacao = this.validador.valida(this.state)

    if (validacao.isValid) {
      this.props.add(this.state)
      this.setState(this.stateInicial)
    } else {
      const {nome, livro, preco} = validacao
      const campos = [nome, livro, preco]

      const camposInvalidos = campos.filter(elem => {
        return elem.isInvalid
      })

      camposInvalidos.forEach(campo => {
        PopUp.exibeMensagem('error', campo.message)
      })
    }

  }

  render() {
    const { nome, livro, preco } = this.state;
    return (
      <form>
        <div className="row">
          <div className='input-field col s4'>
            <label htmlFor="nome" className='input-field'>Nome</label>
            <input
              className='validade'
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.escutaInput}
            />
          </div>
          <div className='input-field col s4'>
            <label htmlFor="livro" className='input-field'>Livro</label>
            <input
              className='validade'
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.escutaInput}
            />
          </div>

          <div className='input-field col s4'>
            <label htmlFor="preco" className='input-field'>Preço</label>
            <input
              className='validade'
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.escutaInput}
            />
          </div>
        </div>
        <button className='waves-effect waves-light btn indigo lighten-2'
          type="button" onClick={this.submit}>
          Salvar
        </button>
      </form>
    )
  }
}

export default Formulario