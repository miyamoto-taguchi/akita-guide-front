import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { SecondaryButton } from "@/components/atoms/Button";

const renderComponent = () => {
  render(<SecondaryButton>押せ！</SecondaryButton>);
};

beforeEach(() => {
  renderComponent();
});

describe("1:レンダリングテスト", () => {
  test("1-1:ボタンが正しく表示されているか", () => {
    const button = screen.getByRole("button", { name: "押せ！" });
    expect(button);
  });
});
