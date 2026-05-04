const EYE_BASE = "http://200.92.203.70:3004";
const TOKEN = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJVaWQiOiJlYjZiNWY4YS0yN2U2LTRhZDAtODMwYy05MDRlNTBmOGRhNTUiLCJlbWFpbCI6IkRhc2hib2FyZEBHTUFJTC5DT00iLCJzdWIiOiJEYXNoYm9hcmRAR01BSUwuQ09NIiwiQ29tcGFueUlkIjoiMGUwM2EyYTctYjQ4Zi00NjNlLWIzNDctMTQ0NzhiZDc5YWE4IiwiRW1wbG95ZWVJZCI6IiIsImp0aSI6ImFkNWZmZThhLTU3MDgtNDhjMy1iYTU4LTVhOWU1ZjlhYzk0MCIsInJvbGUiOiJFeHRlcm5hbEN1c3RvbWVyIiwibmJmIjoxNzc3NTg4NzM0LCJleHAiOjI1MzQ0NTI3MzQsImlhdCI6MTc3NzU4ODczNCwiaXNzIjoiOEU2MkEzMjgtRUZCRS00QkM2LTg3OUItNzBFNEMwMURDNTQ4LUNENDhENkU0LTQwMTMtNEJFNy1CNzhFLTYxMjc4Nzk0RTQ5NyIsImF1ZCI6IkQxRUUxRjA2LTE0RkEtNDY5QS1BQ0U4LTFGMjM2NDVBNzk2Mi1FMjk5ODhDMi0zODBBLTQxNkQtODE0MS0zQkZEM0FEMUFDRDEifQ",
  "0QulmnGvM_NaWTgHU-oBVBePutmre4oAUwoppPhBfmE"
].join(".");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type"
};

export default {
  async fetch(request) {

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const target = EYE_BASE + url.pathname + url.search;

    const resp = await fetch(target, {
      headers: { "Authorization": "Bearer " + TOKEN }
    });

    return new Response(await resp.text(), {
      status: resp.status,
      headers: { ...CORS, "Content-Type": "application/json" }
    });
  }
};
