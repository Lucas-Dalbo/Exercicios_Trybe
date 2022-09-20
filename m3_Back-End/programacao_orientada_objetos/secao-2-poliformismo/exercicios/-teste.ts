import Order, { PayMethod } from "./lanchonete/Order";
import OrderItem from "./lanchonete/OrderItem";
import OrderRepository from "./lanchonete/OrderRepository";
import EvaluationResult from "./school/EvaluationResult";
import Exam from "./school/Exam";
import Student from "./school/StudentPerson";
import Subject from "./school/Subject";
import Teacher from "./school/Teacher";
import Work from "./school/Work";

const mat = new Subject('Matemática');
const geo = new Subject('Geografia');

const mTeacher = new Teacher('Tony', '03/08/1980', mat, 3000);
const gTeacher = new Teacher('Cintia', '12/05/1989', geo, 3200);

// console.log(mTeacher);
// console.log(gTeacher);

const mExam = new Exam(25, mTeacher);
const mWork = new Work(50, mTeacher);

const gExam = new Exam(25, gTeacher);
const gWork = new Work(50, gTeacher);

const student1 = new Student('Mario', '07/07/2007');
const result11 = new EvaluationResult(mExam, 20);
const result12 = new EvaluationResult(mWork, 20);

student1.setEvaluationResult(result11);
student1.setEvaluationResult(result12);

const student2 = new Student('Luigi', '07/07/2007');
const result21 = new EvaluationResult(gExam, 20);
const result22 = new EvaluationResult(gWork, 20);

student2.setEvaluationResult(result21);
student2.setEvaluationResult(result22);

// console.log(student1);
// console.log(student2);

const batata = new OrderItem('Batata Frita', 10);
const refri = new OrderItem('Refrigerante', 5);

const pedido01 = new Order(student1, [batata], PayMethod.DINHEIRO, 10);
const pedido02 = new Order(mTeacher, [batata, refri], PayMethod.VALE, 5);

// console.log(pedido01);
// console.log(pedido02);

const orderList = new OrderRepository();
orderList.addOrder(pedido01);
orderList.addOrder(pedido02);

console.log(orderList.listBySortedValue('menor'));
console.log(orderList.listBySortedValue('maior'));
