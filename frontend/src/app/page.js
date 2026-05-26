import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Home</h1>
      <Counter />
    </main>
  );
}
