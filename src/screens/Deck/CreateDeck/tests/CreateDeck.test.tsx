import { render, fireEvent } from "rtl-config";
import { CreateDeck } from "../CreateDeck";
import { i18n } from "../../../../i18n/i18n";

describe("Create Deck Component", () => {
    test("Given Create deck screen When click on a deck type Then go to the deck edition", () => {
        const { getByText, debug } = render(<CreateDeck />);

        debug();

        fireEvent.press(getByText(i18n.t<string>("deck:hiragana")));

        expect(getByText(i18n.t<string>("deck:name"))).toMatchSnapshot();
    });
});
