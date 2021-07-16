import { render } from "rtl-config";
import { Feature } from "../Feature";

describe("test", () => {
    test("test", () => {
        const { toJSON } = render(<Feature />);

        expect(toJSON()).toMatchSnapshot();
    });
});
