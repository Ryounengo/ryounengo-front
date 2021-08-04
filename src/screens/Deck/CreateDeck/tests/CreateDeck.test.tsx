import { render } from "rtl-config";
import { CreateDeck } from "../CreateDeck";

describe("test", () => {
    test("test", () => {
        const { toJSON } = render(<CreateDeck />);

        expect(toJSON()).toMatchSnapshot();
    });
});
