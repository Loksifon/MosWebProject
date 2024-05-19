import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/utils/context/AuthContext";
import App from "./App.tsx";
import "intersection-observer";

describe("App", () => {
  it("renders without crashing", () => {
    act(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>,
      );
    });
  });
});
