"use client";
import { OutlinedButton } from "@/components/unknown/CustomButtons";
import { usePayrollContext } from "@/contexts/PayrollContext";
import { Salary } from "@/types/Salary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Table from "@/components/Table";

export default function SalaryDefinition() {
  const [salaries, setSalaries] = useState<Salary[]>([]);
  const payrollContext = usePayrollContext();
  useEffect(() => {
    const fetchData = async () => {
      const salaries = await payrollContext.fetchSalaries();
      setSalaries(salaries);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    console.log(id);

    const salaries = await payrollContext.fetchDeleteSalaryDefinition(id);

    setSalaries(salaries);
  };
  
  //auto
  const headers = [
    "ID",
    "Title",
    "Level",
    "Basic Salary",
    "Allowance",
    "Gross Salary",
    "Deductions",
    "Net Salary",
  ];
  const data = salaries.map((salary) => [
    salary.id,
    salary.title,
    salary.level,
    salary.basicSalary,
    salary.allowance,
    salary.grossSalary,
    salary.deductions,
    salary.netSalary,
  ]);
  console.log("data", data);

  //

  return (
    <div>
      Salary Definition
      <hr />
      {salaries.map((salary) => (
        <div key={salary.id}>
          {salary.id}
          {salary.title}
          <Link href={`/update/salaryDefinition/${salary.id}`}>Update</Link>
          <button onClick={() => handleDelete(salary.id)}>Delete</button>
        </div>
      ))}
      <Link href={`/create/salaryDefinition`}>Create Salary Definition</Link>
      <Table headers={headers} data={data} />
    </div>
  );
}

//Nado link otpravit i pokazat c info card
