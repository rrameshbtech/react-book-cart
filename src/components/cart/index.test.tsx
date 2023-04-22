import React, { ReactNode } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartPreview } from ".";
import { DetailedBook } from "../../models/detailed-book";
import { BrowserRouter } from "react-router-dom";

describe("Cart Preview", () => {
  function encloseRouter(child:ReactNode) {
    return <BrowserRouter >
    {child}
    </BrowserRouter>
  }
  const mockCartCloseClickFn = jest.fn();
  const emptyCart = [] as DetailedBook[];
  const OneItemCart = [{
    id:1,
    title: "test book 1",
    isbn: "test-book-1",
    authors: ["test author"],
    price: 100
  }] as DetailedBook[];

  const MultipleItemCart = [{
    id:1,
    title: "test book 1",
    isbn: "test-book-1",
    authors: ["test author"],
    price: 100
  },{
    id:2,
    title: "test book 2",
    isbn: "test-book-2",
    authors: ["test author"],
    price: 200
  }] as DetailedBook[];

  beforeEach(() => {
    mockCartCloseClickFn.mockReset();
  });

  test("shows card title", () => {
    render(
      <CartPreview items={emptyCart} isVisible={true} onCartCloseClick={mockCartCloseClickFn} />
    );
    expect(screen.getByText("Your Cart")).toBeInTheDocument();
  });

  test("shows empty card message when no items added", () => {
    render(
      <CartPreview items={emptyCart} isVisible={true} onCartCloseClick={mockCartCloseClickFn} />
    );
    expect(screen.getByTitle("Empty cart")).toBeInTheDocument();
    expect(
      screen.getByText("Your cart is empty. Start collecting books.")
    ).toBeInTheDocument();
  });

  test("triggers cart close event when close button clicked", () => {
    render(
      <CartPreview items={emptyCart} isVisible={true} onCartCloseClick={mockCartCloseClickFn} />
    );

    const closeButton = screen.getByTitle("close cart");
    fireEvent.click(closeButton);

    expect(mockCartCloseClickFn).toBeCalled();
  });

  test("shows book summary of the book added to the cart", () => {
    render(
      encloseRouter(<CartPreview items={OneItemCart} isVisible={true} onCartCloseClick={mockCartCloseClickFn} />)
    );

    expect(screen.getByTitle(OneItemCart[0].title)).toBeInTheDocument();
  });

  test("shows book summary in cart when a book is added", () => {
    render(
      encloseRouter(<CartPreview items={OneItemCart} isVisible={true} onCartCloseClick={mockCartCloseClickFn} />)
    );

    expect(screen.getByTitle(OneItemCart[0].title)).toBeInTheDocument();
    expect(screen.getByText(OneItemCart[0].title)).toBeInTheDocument();
    expect(screen.getByText("₹" + OneItemCart[0].price)).toBeInTheDocument();
  });

  test("shows book summary of all books added to the cart", () => {
    render(
      encloseRouter(<CartPreview items={MultipleItemCart} isVisible={true} onCartCloseClick={mockCartCloseClickFn} />)
    );

    expect(screen.getByTitle(MultipleItemCart[0].title)).toBeInTheDocument();
    expect(screen.getByTitle(MultipleItemCart[1].title)).toBeInTheDocument();
  });
});
