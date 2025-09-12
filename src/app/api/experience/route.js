import clientPromise from "@/app/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const items = await db
      .collection("experience")
      .find({})
      .toArray();

    return Response.json({ items });
  } catch (e) {
    console.error("GET error:", e);
    return Response.json(
      { error: "Failed to fetch experience" },
      { status: 500 }
    );
  }
}
