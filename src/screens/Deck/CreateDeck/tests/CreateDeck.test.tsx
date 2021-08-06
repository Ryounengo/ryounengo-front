import { render, fireEvent, act } from "rtl-config";
import { CreateDeck } from "../CreateDeck";
import { i18n } from "../../../../i18n/i18n";

describe("Create Deck Component", () => {
    test("Given Create deck screen When click on a deck type Then go to the deck edition", async () => {
        const { getByText, findByText } = render(<CreateDeck />);

        await act(async () => {
            await fireEvent.press(await findByText(i18n.t<string>("deck:hiragana")));
        });

        expect(getByText(i18n.t<string>("deck:name"))).toMatchSnapshot();
    });
});
