import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const project_slug = searchParams.get("slug");
  try {
    const result = await pool.query(
      ` SELECT project_id,project_name, project_technologies, project_link from tbl_projects WHERE project_name=$1 ;`,
      [project_slug]
    );
    const param = result.rows[0].project_id;
    const result2 = await pool.query(
      ` SELECT p_d_background, p_d_problem, p_d_solution, p_d_gallery, p_d_subtitle,p_d_role,p_d_time from tbl_project_detail WHERE fk_id=$1 ;`,
      [param]
    );
    return NextResponse.json({
      data: {
        primary_result: result.rows[0],
        secondary_result: result2.rows[0],
      },
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
