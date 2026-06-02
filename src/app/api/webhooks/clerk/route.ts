import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { db } from "@/db";
import { profiles } from "@/db/schema";

export async function POST(req: NextRequest) {
  let event;

  try {
    event = await verifyWebhook(req);
  } catch (error) {
    console.error("Erro ao verificar webhook:", error);
    return new Response("Webhook inválido", { status: 400 });
  }

  if (event.type === "user.created") {
    const user = event.data;

    const email = user.email_addresses[0]?.email_address;

    if (!email) {
      return new Response("Usuário sem email", { status: 400 });
    }

    await db.insert(profiles).values({
      id: user.id,
      email,
      firstName: user.first_name,
      lastName: user.last_name,
    });
  }

  return new Response("OK", { status: 200 });
}