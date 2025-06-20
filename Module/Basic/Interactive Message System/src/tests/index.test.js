import test from "node:test";
import assert from "node:assert/strict";
import { getUserMessage } from "../scripts/message.js";

// Test
test('getUserMessage("Jhosua", -1) return invalid message', () => {
  assert.equal(
    getUserMessage("Jhosua", -1),
    "Invalid age. Please enter a valid age between 0 and 120."
  );
});

// Test for age less than 18
test('getUserMessage("Jhosua", 17) return message for students', () => {
  assert.equal(
    getUserMessage("Jhosua", 17),
    "Hi Jhosua! You are a minor. Keep learning and enjoying coding!"
  );
});

// Test for age 18 or older
test('getUserMessage("Jhosua", 20) return message for adults', () => {
  assert.equal(
    getUserMessage("Jhosua", 20),
    "Hi Jhosua! You are an adult. Get ready for great opportunities in the world of programming!"
  );
});
