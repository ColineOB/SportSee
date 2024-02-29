import userApi from "./user";
import userApiMock from "./user/mock";


export default function getUserApi() {
    const condition = true
    return condition? userApi : userApiMock 
};