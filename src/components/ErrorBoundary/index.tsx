import { Component, ReactNode, ErrorInfo } from "react";

type ErrorBoundariesProps = {
  children: ReactNode;
};
type ErrorBoundariesState = {
  hasError: boolean;
  error: string;
};

export default class ErrorBoundaries extends Component<
  ErrorBoundariesProps,
  ErrorBoundariesState
> {
  public state: ErrorBoundariesState = {
    hasError: false,
    error: "",
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundariesState {
    return {
      hasError: true,
      error: error.message,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Детали ошибки:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className={`text-secondary d-flex flex-column align-items-center justify-content-center`}
        >
          <h1>Что то не так.</h1>
          <p>{this.state.error}</p>
          <p className="text-secondary">Попробуйте перезагрузить приложение.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
