import { EOtpReason, IOtpPayload } from "./IOTPReason";
import { OTP_ROUTE } from "@routes";
import { usePostApi } from "../api";

export const useOTP = () => {
    const { isLoading, update } = usePostApi();

    const sendOTP = (email: string, reason: EOtpReason) => {
        const payload: IOtpPayload = { email, reason };

        return update(OTP_ROUTE, payload);
    };

    return {
        sendOTP,
        isLoading,
    };
};
