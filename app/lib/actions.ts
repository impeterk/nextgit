"use server";
import { redirect } from "next/navigation";

export async function changeData(
  prevState: string | undefined,
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
