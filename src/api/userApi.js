import userApi from "./user";
import userApiMock from "./user/mock";


export default function getUserApi(mock) {
    return mock? userApiMock : userApi
};