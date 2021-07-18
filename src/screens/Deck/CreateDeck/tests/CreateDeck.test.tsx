import { render } from "rtl-config";
import { DeckEdit } from "../CreateDeck";

describe("test", () => {
    test("test", () => {
        const { toJSON } = render(<DeckEdit />);

        expect(toJSON()).toMatchSnapshot();
    });
});
