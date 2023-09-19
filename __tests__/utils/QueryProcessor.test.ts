import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return my andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is xuchaoz."
          ));
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My name is Xuchao Zhou."
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should mult numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 2?")).toEqual("10");
        expect(QueryProcessor("What is 11 multiplied by 11?")).toEqual("121");
    });

    test('should minus numbers', () => {
        expect(QueryProcessor("What is 5 minus 55?")).toEqual("-50");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });

    test('should power numbers', () => {
        expect(QueryProcessor("What is 2 to the power of 4?")).toEqual("16");
        expect(QueryProcessor("What is 10 to the power of 2?")).toEqual("100");
    });
});