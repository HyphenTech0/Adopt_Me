import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        redirect: false
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info)
        if(this.state.hasError) {
            setTimeout(() => this.setState({redirect: true}), 5000)
        }
    }

  render() {
      if(this.state.redirect) {
          return <Navigate to="/" />
      } else if(this.state.hasError) {
    
          return (
            <h2>There was an error with this listing. 
                <Link to="/">Click here</Link>
                to back to the home page or wait fve seconds
            </h2>
          )
      }

      return this.props.children
  }
}
