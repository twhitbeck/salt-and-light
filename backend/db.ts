import { Pool } from "pg";

import type { Class, ClassTitle, Student, Registration } from "./types";

const pool = new Pool();

export async function findClasses(): Promise<Class[]> {
  const result = await pool.query("SELECT * FROM classes");

  return result.rows;
}

export async function findClassTitles(): Promise<ClassTitle[]> {
  const result = await pool.query("SELECT * FROM classtitles");

  return result.rows;
}

export async function findStudents(): Promise<Student[]> {
  const result = await pool.query("SELECT * FROM students");

  return result.rows;
}

export async function findStudent(studentId: string): Promise<Student> {
  const result = await pool.query("SELECT * FROM students WHERE id = $1", [
    studentId,
  ]);

  return result.rows[0];
}

export async function findRegistrationsByStudentId(
  studentId: string
): Promise<Registration[]> {
  const result = await pool.query(
    "SELECT * FROM registrations WHERE student_id = $1",
    [studentId]
  );

  return result.rows;
}
