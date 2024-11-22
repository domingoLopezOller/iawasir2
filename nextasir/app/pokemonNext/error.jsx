'use client'
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error capturado:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error leyendo los PokemonNEXT</h1>;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;