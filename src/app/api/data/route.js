import { NextResponse } from "next/server";
import OpenAI from "openai";
import financialSummarySchema from "@/lib/schemas/financialSummary.js"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}

export async function POST(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (token !== process.env.MY_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await req.json();
  const userMessage = body.message;

  if (!userMessage) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }

  try {
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [{ role: "user", content: userMessage }],
      text: {
        format: {
          type: "json_schema",
          name: "data_response",
          schema: financialSummarySchema,
          strict: true,
        },
      },
    });

    const data = JSON.parse(response.output_text);
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });

  } catch (err) {
    console.error("OpenAI error:", err);
    return NextResponse.json(
      { error: "Failed to process input" },
      { status: 500 }
    );
  }
}
