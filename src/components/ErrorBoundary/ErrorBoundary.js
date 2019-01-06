import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    // retorna mensagem de erro se algo der errado com algum componente (itens)
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado...</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
