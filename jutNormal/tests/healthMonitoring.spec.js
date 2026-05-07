import { test, expect } from "@playwright/test";
import { request } from "node:http";
test("healthMonitiring", async ({ request }) => {
  const res = await request.post("https://restful-booker.herokuapp.com/auth", {
    headers: { "Content-Type": "application/json" },
    data: {
      username: "admin",
      password: "password123",
    },
  });
  const { token } = await res.json();

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const resp = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        firstname: "Lokesh",
        lastname: "Dangwal",
        totalprice: 843,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-01-01",
          checkout: "2026-01-01",
        },
        additionalneeds: "Lunch",
      },
    },
  );
  const { bookingid } = await resp.json();

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const deldata = await request.delete(
    "https://restful-booker.herokuapp.com/booking/" + bookingid,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: "token=" + token,
      },
    },
  );

  const deleteStatusCode = deldata.status();
  expect(deleteStatusCode).toBe(201);

  const Recheckuser = await request.get(
    "https://restful-booker.herokuapp.com/booking/" + bookingid,
  );

  expect(Recheckuser.status()).toBe(404);
  expect(Recheckuser.statusText()).toBe("Not Found");
});

test("healthcheck", async ({ request }) => {
    let count = 0;
    test.setTimeout(0)
  while (true) {
    let starttime = Date.now();

    const healthjson = await request.get(
      "https://restful-booker.herokuapp.com/ping",
    );
    const endtime = Date.now();

    if (starttime - endtime > 200) {
      throw new Error("Api take long time.... check it out");
    } else {
      expect(healthjson.status()).toBe(201);
      expect(healthjson.statusText()).toBe("Created");
    }
    count++;
console.log('api runing absolutely fine '+count +' times')
}
});
