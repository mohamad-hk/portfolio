import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM tbl_experience"
    );
    return NextResponse.json({ data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
