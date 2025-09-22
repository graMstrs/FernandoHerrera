import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("ADD", () => {
  test("Should add 2 positive numbers", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result = add(a, b);

    //Assert
    expect(result).toBe(a + b);
    console.log("ADD - ", { result });
  });
});

describe("SUBSTRACT", () => {
  test("SUBSTRACT - Should subtract 2 positive numbers", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result = subtract(a, b);

    //Assert
    expect(result).toBe(a - b);
    console.log("Positive substract - ", { result });
  });

  test("SUBSTRACT - Should subtract 2 negative numbers", () => {
    //Arrange
    const a = -1;
    const b = -2;

    //Act
    const result = subtract(a, b);

    //Assert
    expect(result).toBe(a - b);
    console.log("Negative substract - ", { result });
  });
});

describe("MULTIPLY", () => {
  test("MULTIPLY - Should multiply 2 positive numbers", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result = multiply(a, b);

    //Assert
    expect(result).toBe(a * b);
    console.log("Positive multiply - ", { result });
  });

  test("MULTIPLY - Should multiply 2 negative numbers", () => {
    //Arrange
    const a = -1;
    const b = -2;

    //Act
    const result = multiply(a, b);

    //Assert
    expect(result).toBe(a * b);
    console.log("Negative multiply - ", { result });
  });
});
