"use client";
import { changeData } from "../lib/actions";
import { useParams } from "next/navigation";
import { useFormStatus, useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HeaderForm() {
  const params = useParams<{ user: string; year: string }>();
  const { user, year } = params;
  // @ts-ignore
  const [_, dispatch] = useFormState(changeData, undefined);

  const currentYear = new Date().getFullYear();

  const selectYear: string[] = [];
  for (let i = 0; i < 5; i++) {
    selectYear.push(String(currentYear - i));
  }

  return (
    <form action={dispatch} className="flex gap-4 items-center">
      <Label htmlFor="user">
        Select Github User
        <Input defaultValue={user} name="user" id="user" type="text" required />
      </Label>
      <Label htmlFor="year">
        Select Year
        <select
          id="year"
          name="year"
          className="bg-background text-foreground h-9 w-full border rounded px-2"
          required
        >
          <option defaultValue={year} className="h-12 w-full">
            {year}
          </option>
          {selectYear
            .filter((item) => item != year)
            .map((item) => (
              <option key={item} value={item} className="h-12 w-full">
                {item}
              </option>
            ))}
        </select>
      </Label>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="self-end disabled:bg-slate-500"
      aria-disabled={pending}
      disabled={pending}
    >
      <p>Go !</p>
    </Button>
  );
}
