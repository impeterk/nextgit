"use server";
import { redirect } from "next/navigation";

export async function changeData(
  prevState: any,
  formData: FormData
) {
  const user = formData.get("user");
  const year = formData.get("year");

  try {
    redirect(`/${user}/${year}`);
  } catch (error) {
    throw error;
  }
}
