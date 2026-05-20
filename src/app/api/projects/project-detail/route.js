import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const project_slug = searchParams.get("slug");
  const locale = searchParams.get("locale") || "en";
  const isFa = locale === "fa";

  try {
    const result = await pool.query(
      `
      SELECT
        project_id,
        project_name,
        project_technologies,
        project_link,
        project_demo,

        ${
          isFa
            ? `
          COALESCE(project_description_fa, project_description) AS project_description,
          COALESCE(project_problem_fa, project_problem) AS project_problem,
          COALESCE(project_solution_fa, project_solution) AS project_solution
        `
            : `
          project_description,
          project_problem,
          project_solution
        `
        }

      FROM tbl_projects

      WHERE project_slug = $1;
      `,
      [project_slug]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    const projectId = result.rows[0].project_id;

    const result2 = await pool.query(
      `
      SELECT
        p_d_gallery,
        p_d_role,
        p_d_time,

        ${
          isFa
            ? `
          COALESCE(p_d_background_fa, p_d_background) AS p_d_background,
          COALESCE(p_d_problem_fa, p_d_problem) AS p_d_problem,
          COALESCE(p_d_solution_fa, p_d_solution) AS p_d_solution,
          COALESCE(p_d_subtitle_fa, p_d_subtitle) AS p_d_subtitle,
          COALESCE(p_d_improvments_fa, p_d_improvments) AS p_d_improvments
        `
            : `
          p_d_background,
          p_d_problem,
          p_d_solution,
          p_d_subtitle,
          p_d_improvments
        `
        }

      FROM tbl_project_detail

      WHERE fk_id = $1;
      `,
      [projectId]
    );

    return NextResponse.json(
      {
        data: {
          primary_result: result.rows[0],
          secondary_result: result2.rows[0],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}