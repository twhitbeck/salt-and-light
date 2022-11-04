export interface Class {
  id: number;
  fallfee: number;
  springfee: number;
  location: string | null;
  period_id: string;
  section_id: string;
  teacher_id: string;
  helper1_id: string;
  helper2_id: string;
  inserted_at: string;
  updated_at: string;
  classtitle_id: string;
  semester: number;
}

export function fetchClasses(): Promise<Class[]> {
  return apiFetch("classes");
}

interface ClassTitle {
  id: number;
  description: string;
  inserted_at: string;
  updated_at: string;
}

export function fetchClassTitles(): Promise<ClassTitle[]> {
  return apiFetch("classTitles");
}

export interface Student {
  id: number;
  firstname: string;
  grade: string;
  birthday: string | null;
  user_id: number;
  inserted_at: string;
  updated_at: string;
}

export function fetchStudents(): Promise<Student[]> {
  return apiFetch("students");
}

export function fetchStudent(studentId: string): Promise<Student> {
  return apiFetch(`students/${studentId}`);
}

interface Registration {
  id: number;
  student_id: number;
  class_id: number;
  inserted_at: string;
  updated_at: string;
  semester: number;
}

export function fetchStudentRegistrations(
  studentId: string
): Promise<Registration[]> {
  return apiFetch(`students/${studentId}/registrations`);
}

const apiFetch = (path: string, init?: RequestInit) =>
  fetch(`/api/${path}`, init).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  });
