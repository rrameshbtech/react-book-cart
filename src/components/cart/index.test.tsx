import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CartPreview } from ".";

describe("Cart Preview", () => {
  const mockCartCloseClickFn = jest.fn();

  beforeEach(() => {
    mockCartCloseClickFn.mockReset();
  });

  test("shows card title", () => {
    render(
      <CartPreview isVisible={true} onCartCloseClick={mockCartCloseClickFn} />
    );
    expect(screen.queryByText("Your Cart")).toBeInTheDocument();
  });

  test("shows empty card message when no items added", () => {
    render(
      <CartPreview isVisible={true} onCartCloseClick={mockCartCloseClickFn} />
    );
    expect(screen.getByTitle("Empty cart")).toBeInTheDocument();
    expect(
      screen.getByText("Your cart is empty. Start collecting books.")
    ).toBeInTheDocument();
  });

  test("triggers cart close event when close button clicked", () => {
    render(
      <CartPreview isVisible={true} onCartCloseClick={mockCartCloseClickFn} />
    );

    const closeButton = screen.getByTitle("close cart");
    fireEvent.click(closeButton);

    expect(mockCartCloseClickFn).toBeCalled();
  });
});
