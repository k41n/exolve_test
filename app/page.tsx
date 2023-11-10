"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        recipient,
      }),
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        className="flex flex-col items-stretch justify-stretch gap-2"
        onSubmit={handleSubmit}
      >
        <legend className="text-gray-600 text-lg font-semibold text-center">
          Текст SMS
        </legend>
        <textarea
          className="p-2"
          name="content"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          value={content}
        />
        <legend className="text-gray-600 text-lg font-semibold text-center">
          Номер получателя
        </legend>
        <input
          type="number"
          name="recipient"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRecipient(e.target.value)
          }
          value={recipient}
        />
        <input
          type="submit"
          value="Отправить"
          className="rounded-md border-black border-solid border-2 mt-2"
        />
      </form>
    </main>
  );
}
