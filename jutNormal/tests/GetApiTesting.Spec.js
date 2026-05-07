import { test, expect } from "@playwright/test";
import { request } from "node:http";

test("api test result", async ({ request }) => {
  const response = await request.get("https://dummyjson.com/products/1");
  const result = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(result.id).toBe(1);
  // console.log(response.headers())
  //   console.log(response.headersArray())
  // console.log(result);
  //    console.log(response.status())
  expect(result).toHaveProperty('id',1)
});
