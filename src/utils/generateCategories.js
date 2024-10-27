// src/utils/generateCategories.js
import { faker } from "@faker-js/faker";

export function generateCategories() {
  faker.seed(123); // Set a fixed seed for consistent data
  return Array.from({ length: 100 }, () => faker.commerce.department());
}
