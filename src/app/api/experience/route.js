import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale") || "en";
    const isFa = locale === "fa";

    const result = await pool.query(`
      SELECT
        experience_id,

        ${
          isFa
            ? `
          COALESCE(experience_title_fa, experience_title) AS experience_title,
          COALESCE(experience_company_fa, experience_company) AS experience_company,
          COALESCE(experience_description_fa, experience_description) AS experience_description,
          COALESCE(experience_time_fa, experience_time) AS experience_time
        `
            : `
          experience_title,
          experience_company,
          experience_description
        `
        }

      FROM tbl_experience

      ORDER BY experience_id DESC
    `);
    return NextResponse.json(
      { data: result.rows },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}