import clientPromise from "@/app/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const items = await db
      .collection("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json({ items });
  } catch (e) {
    console.error("GET /api/projects error:", e);
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
