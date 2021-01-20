import { InvalidArgument } from "../errors/invalid_argument";
import { Gtin13 } from "./gtin13";

describe("Gtin13 test", () => {
  test("Given a valid gtin13 value then the object is created", () => {
    //Given
    const valueUnderTest = "1234567890418";

    //When
    const gtin13TestObject = new Gtin13(valueUnderTest);

    //Then
    expect(gtin13TestObject).toBeInstanceOf(Gtin13);
  });
  test.each(["1234567890ABC", "123456789CDEF", "ABCDEFGHIJKLM"])(
    "Given an non-numeric gtin13 value then the object isn't created",
    (valueUnderTest: string) => {
      //When
      const sut = () => {
        const gtin13TestObject = new Gtin13(valueUnderTest);
      };

      //Then
      expect(sut).toThrow(InvalidArgument);
    }
  );
  test.each(["1234567890123", "1234567897894", "1236567897894"])(
    "Given an invalid checksum then the object isn't created",
    (valueUnderTest: string) => {
      //When
      const sut = () => {
        const gtin13TestObject = new Gtin13(valueUnderTest);
      };

      //Then
      expect(sut).toThrow(InvalidArgument);
    }
  );
});
