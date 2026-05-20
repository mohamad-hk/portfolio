import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const locale = searchParams.get("locale") || "en";
    const isFa = locale === "fa";
    const result = await pool.query(`
      SELECT
        project_id,
        project_demo,
        project_link,
        project_technologies,
        project_slug,

        ${
          isFa
            ? `
          COALESCE(project_description_fa, project_description) AS project_description,
          COALESCE(project_problem_fa, project_problem) AS project_problem,
          COALESCE(project_solution_fa, project_solution) AS project_solution,
          COALESCE(project_name_fa, project_name) AS project_name
        `
            : `
          project_description,
          project_problem,
          project_solution
        `
        }

      FROM tbl_projects

      ORDER BY project_id ASC
    `);

    return NextResponse.json({ data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
