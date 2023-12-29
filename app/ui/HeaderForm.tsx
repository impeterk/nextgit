"use client";
import { changeData } from "../lib/actions";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HeaderForm() {
  const params = useParams<{ user: string; year: string }>();
  const { user, year } = params;
  const currentYear = new Date().getFullYear();
  const selectYear = [];
  for (let i = 0; i < 5; i++) {
    selectYear.push(String(currentYear - i));
  }

  return (
    <form action={changeData} className="flex gap-4 items-center">
      <Label htmlFor="user">
        Select Github User
        <Input defaultValue={user} name="user" id="user" type="text" />
      </Label>
      <Label htmlFor="year">
        Select Year
        <select
          id="year"
          name="year"
          className="bg-background text-foreground h-9 w-full border rounded px-2"
        >
          {selectYear.map((item) => (
            <option
              key={item}
              value={item}
              selected={item == year}
              className="h-12 w-full"
            >
              {item}
            </option>
          ))}
        </select>
      </Label>
      <Button className="self-end" type="submit">
        Go !
      </Button>
    </form>
  );
}
