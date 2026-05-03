import { faker } from '@faker-js/faker';

// Test data constants using environment variables for security
export const TEST_USERS = {
  VALID_USER: {
    username: process.env.USERNAME || 'standard_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
  LOCKED_OUT_USER: {
    username: 'locked_out_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
  PROBLEM_USER: {
    username: 'problem_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
  PERFORMANCE_GLITCH_USER: {
    username: 'performance_glitch_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
  ERROR_USER: {
    username: 'error_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
  VISUAL_USER: {
    username: 'visual_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
  INVALID_USER: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

export const TEST_URLS = {
  BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com/',
  LOGIN_PAGE: process.env.BASE_URL || 'https://www.saucedemo.com/',
  INVENTORY_PAGE: `${process.env.BASE_URL || 'https://www.saucedemo.com/'}inventory.html`,
};

// Fake data generators
export const generateFakeUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
  },
});

export const generateFakeProduct = () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
});
