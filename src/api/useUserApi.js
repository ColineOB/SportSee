import { useSearchParams } from "react-router-dom";
import userApi from "./user";
import userApiMock from "./user/mock";

export default function useUserApi() {
    const [searchParams] = useSearchParams();
    const isMock = (searchParams.get("mock") === "true");

    return isMock? userApiMock : userApi
}
