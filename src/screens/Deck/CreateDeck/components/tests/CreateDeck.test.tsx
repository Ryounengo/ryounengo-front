import { render } from "rtl-config";
import { CreateDeck } from "../Feature";

describe("test", () => {
    test("test", () => {
        const { toJSON } = render(<CreateDeck />);

        expect(toJSON()).toMatchSnapshot();
    });
});
