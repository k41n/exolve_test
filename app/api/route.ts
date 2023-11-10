export async function POST(request: Request) {
  const { content, recipient } = await request.json();
  const res = await fetch(
    "https://api.exolve.ru/messaging/v1/SendSMS",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SMS_API_KEY ?? ""}`,
      },
      body: JSON.stringify({
        number: process.env.SOURCE_NUMBER,
        destination: recipient,
        text: content,
      }),
    }
  );

  const data = await res.json();

  return Response.json(data);
}
