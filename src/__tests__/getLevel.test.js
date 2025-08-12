import { getLevel } from "../getLevel.js";
import fetchData from "../http.js";

jest.mock("../http.js");

beforeEach(() => {
    jest.resetAllMocks();
});

test("should return user's level if server's response is ok", () => {
    const response = { status: "ok", userId: 1, level: 30 };
    fetchData.mockReturnValue(response);
    expect(getLevel(1)).toEqual(`Ваш текущий уровень: ${response.level}`);
});

test("should return an error if server's response isn't ok", () => {
    const response = { status: "error" };
    fetchData.mockReturnValue(response);
    expect(getLevel(1)).toEqual(
        `Информация об уровне временно недоступна`
    );
});