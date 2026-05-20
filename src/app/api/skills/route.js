import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const locale = searchParams.get("locale") || "en";

  const isFa = locale === "fa";

  const result = await pool.query(`
    SELECT 
      skill_categories.id,
      ${
        isFa
          ? `
        COALESCE(skill_categories.name_fa, skill_categories.name) AS name
      `
          : `
        skill_categories.name
      `
      },

      json_agg(
        json_build_object(
          'id', skills.id,
          'name', skills.name,
          'image', skills.image
        )
      ) AS skills

    FROM skill_categories

    LEFT JOIN skills
      ON skills.category_id = skill_categories.id

    GROUP BY skill_categories.id

    ORDER BY skill_categories.id;
  `);

  return NextResponse.json(result.rows);
}
