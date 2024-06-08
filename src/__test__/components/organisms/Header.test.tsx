// ヘッダーのテストヘッダーがちゃんと決まったら実装
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Header from "@/components/organisms/Header";

const renderComponent = () => {
  render(<Header />);
};

beforeEach(() => {
  renderComponent();
});

describe("1:レンダリングテスト", () => {
  test("1-1:ロゴが正しく表示されているか", () => {
    console.log("ロゴある");
  });

  test("1-2:未ログインの場合の表示が期待通りか", () => {
    console.log("未ログイン時");
  });

  test("1-3:ログイン時の表示が期待通りか", () => {
    console.log("ログイン時");
  });
});
