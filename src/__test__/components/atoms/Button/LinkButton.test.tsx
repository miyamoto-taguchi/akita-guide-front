import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { LinkButton } from "@/components/atoms/Button";

const renderComponent = () => {
  render(<LinkButton label="Home" href="/" />);
};

/**
 * 各テストの前に実行される
 */
beforeEach(() => {
  renderComponent();
});

describe("1:レンダリングテスト", () => {
  test("1-1:ボタンが正しく表示されているか", () => {
    const linkButton = screen.getByRole("button", { name: "Home" });
    expect(linkButton);
  });
});
