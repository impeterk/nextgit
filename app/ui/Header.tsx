import HeaderForm from "./HeaderForm";

export default function Header() {
  return (
    <header className="border-b py-4 flex justify-between container items-center flex-col lg:flex-row gap-y-2">
      <h1 className="hidden md:block text-3xl">Github Contributions</h1>
      <HeaderForm />
    </header>
  );
}
