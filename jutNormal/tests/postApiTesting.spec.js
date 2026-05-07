import { test, expect } from "@playwright/test";
import { request } from "node:http";

test("post api call", async ({ request }) => {
  const authData = {
    username: "admin",
    password: "password123",
  };
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: { "Content-Type": "application/json" },
      data: authData,
    },
  );
  const result = await response.json();
  expect(result.token).not.toBeNull();

});



// test('postapi2', async ({request})=>{

// })