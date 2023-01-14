import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for travel", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a travel", async () => {
    const response = await request(app).post("/travel").send({
      title: "bali",
    });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe("bali");
  });

  it("should not create a travel", async () => {
    const response = await request(app).post("/travel").send({
      title: "bali",
    });
    expect(response.status).toBe(500);
  });

  it("should list all trips", async () => {
    const response = await request(app).post("/travel").send({
      title: "bali",
    });
    expect(response.status).toBe(200);
    const response2 = await request(app).post("/travel").send({
      title: "australia",
    });
    expect(response2.status).toBe(200);

    const listResponse = await request(app).get("/travel").send();

    expect(listResponse.status).toBe(200);
    expect(listResponse.body.trips.length).toBe(2);
    const travel1 = listResponse.body.trips[0];
    expect(travel1.title).toBe("bali");

    const travel2 = listResponse.body.trips[1];
    expect(travel2.title).toBe("australia");

    const listResponseXML = await request(app)
      .get("/travel")
      .set("Accept", "application/xml")
      .send();

    expect(listResponseXML.status).toBe(200);
    expect(listResponseXML.text).toContain(
      `<?xml version="1.0" encoding="UTF-8"?>`
    );
    expect(listResponseXML.text).toContain(`<trips>`);
    expect(listResponseXML.text).toContain(`<travel>`);
    // expect(listResponseXML.text).toContain(`<name>John</name>`);
    // expect(listResponseXML.text).toContain(`<address>`);
    // expect(listResponseXML.text).toContain(`<street>Street</street>`);
    // expect(listResponseXML.text).toContain(`<city>City</city>`);
    // expect(listResponseXML.text).toContain(`<number>123</number>`);
    // expect(listResponseXML.text).toContain(`<zip>12345</zip>`);
    // expect(listResponseXML.text).toContain(`</address>`);
    // expect(listResponseXML.text).toContain(`</customer>`);
    // expect(listResponseXML.text).toContain(`<name>Jane</name>`);
    // expect(listResponseXML.text).toContain(`<street>Street 2</street>`);
    // expect(listResponseXML.text).toContain(`</customers>`);
  });
});
