"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function changeData(formData: FormData) {
  const user = formData.get("user");
  const year = formData.get("year");

  redirect(`/${user}/${year}`);
}
