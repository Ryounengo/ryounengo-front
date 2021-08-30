import { useFetch } from "../useFetch";
import { EOtpReason, IOtpPayload } from "./IOTPReason";
import { OTP_ROUTE } from "../../../routes";

export const useOTP = () => {
    const [postSendOtpState, { post }] = useFetch();

    const sendOTP = (email: string, reason: EOtpReason) => {
        const payload: IOtpPayload = { email, reason };

        return post(OTP_ROUTE, { body: payload, forwardError: true });
    };

    return {
        sendOTP,
        postSendOtpState,
    };
};
