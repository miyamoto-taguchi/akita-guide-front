import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

const renderComponent = () => {
  render(<Home />);
};

/**
 * 各テストの前に実行される
 */
beforeEach(() => {
  renderComponent();
});

describe("1:レンダリングテスト", () => {
  test("1-1:タイトルが表示されているか", () => {
    const title = screen.getByText("Welcom to Tokyo Guide");
    expect(title);
  });
});

describe("2:ユーザーイベントテスト", () => {
  test("2-1:VideoPageボタンをクリックできるか", async () => {
    const videoPageLinkButton = screen.getByRole("button", {
      name: "VideoPage",
    });
    await userEvent.click(videoPageLinkButton);

    //クリック後に期待するテストを追加したりする。
  });
});
