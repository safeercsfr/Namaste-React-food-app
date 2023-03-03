import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://i.pinimg.com/originals/26/9a/93/269a93f45452b15422d7d52dd96a1881.jpg"
  );
});

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("0");
});
