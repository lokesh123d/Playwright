import { test, expect } from "@playwright/test";
import { request } from "node:http";

test("putpatch", async ({ request }) => {
  const updatedData = {
    username: "lokesh",
  };

  const userList = await request.get(
    "https://restful-booker.herokuapp.com/booking",
  );
  const userListResult = await userList.json();
  const userId =
    userListResult[Math.round(Math.random() * userListResult.length)].bookingid;

  const auth = await request.post("https://restful-booker.herokuapp.com/auth", {
    headers: "Content-Type: application/json",
    data: {
      username: "admin",
      password: "password123",
    },
  });

  const { token } = await auth.json();

  const userDet = await request.put(
    "https://restful-booker.herokuapp.com/booking/" + userId,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: "token=" + token,
      },
      data: {
        firstname: "Lokesh",
        lastname: "Dangwal",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    },
  );
  const userDetails = await userDet.json();
  await expect(userDetails.firstname).toBe("Lokesh");


  
  console.log(userDetails);
  //   const response =await request.patch('')
});
