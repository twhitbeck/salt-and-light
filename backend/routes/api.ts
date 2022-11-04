import { type Router } from "express";
import {
  findClasses,
  findClassTitles,
  findRegistrationsByStudentId,
  findStudent,
  findStudents,
} from "../db";

export function addRoutes(router: Router) {
  router.get("/api/classes", async (req, res) => {
    const classes = await findClasses();

    res.send(classes);
  });

  router.get("/api/classTitles", async (req, res) => {
    const classTitles = await findClassTitles();

    res.send(classTitles);
  });

  router.get("/api/students", async (req, res) => {
    const students = await findStudents();

    res.send(students);
  });

  router.get("/api/students/:studentId", async (req, res) => {
    const student = await findStudent(req.params.studentId);

    res.send(student);
  });

  router.get("/api/students/:studentId/registrations", async (req, res) => {
    const registrations = await findRegistrationsByStudentId(
      req.params.studentId
    );

    res.send(registrations);
  });
}
