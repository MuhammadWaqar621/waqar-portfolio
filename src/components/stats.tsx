import { Reveal } from "@/components/reveal";

const stats = [
  { value: "7+", label: "Years in AI Engineering" },
  { value: "9+", label: "AI Systems Shipped" },
  { value: "3", label: "AI Teams Led" },
  { value: "70%", label: "Manual Effort Cut via Automation" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <Reveal className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold text-gradient sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
