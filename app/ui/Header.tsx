import HeaderForm from "./HeaderForm";

export default function Header() {
  return (
    <header className="border-b py-4 flex justify-between container items-center">
      <h1 className="text-3xl">Github Contributions</h1>
      <HeaderForm />
    </header>
  );
}
