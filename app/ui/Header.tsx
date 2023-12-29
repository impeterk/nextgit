import HeaderForm from "./HeaderForm";

export default function Header() {
  return (
    <div className="border-b py-2 my-2 flex justify-between">
      <h1 className="text-3xl">Github Contributions</h1>
      <HeaderForm />
    </div>
  );
}
