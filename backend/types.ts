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
  inserted_at: Date;
  updated_at: Date;
  classtitle_id: string;
  semester: number;
}

export interface ClassTitle {
  id: number;
  description: string;
  inserted_at: Date;
  updated_at: Date;
}

export interface Student {
  id: number;
  firstname: string;
  grade: string;
  birthday: string | null;
  user_id: number;
  inserted_at: Date;
  updated_at: Date;
}

export interface Registration {
  id: number;
  student_id: number;
  class_id: number;
  inserted_at: Date;
  updated_at: Date;
  semester: number;
}
