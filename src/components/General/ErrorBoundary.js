import React from "react";

import "./ErrorBoundary.scss";

import errorImage from "../../resources/images/error-image.png";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div className="error-page">
                <h2>Съжаляваме, възникна грешка при зареждането на страницата! <br/> Моля опитайте по-късно!</h2>
                <img src={errorImage} alt="Error Image" />
            </div>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;