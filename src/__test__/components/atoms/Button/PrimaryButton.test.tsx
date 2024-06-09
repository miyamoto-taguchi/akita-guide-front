import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { PrimaryButton } from "@/components/atoms/Button";

const renderComponent = () => {
  render(<PrimaryButton>押せ！</PrimaryButton>);
};

/**
 * 各テストの前に実行される
 */
beforeEach(() => {
  renderComponent();
});

describe("1:レンダリングテスト", () => {
  test("1-1:ボタンが正しく表示されているか", () => {
    const button = screen.getByRole("button", { name: "押せ！" });
    expect(button);
  });
});
