import dynamic from "next/dynamic";

const JupiterClient = dynamic(() => import("@/components/Jupiter"), {ssr: false});

export default function SwapPage() {
  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-[#030711] text-black dark:text-white">
      <main className="ml-64 p-8">
        <JupiterClient />
      </main>
    </div>
  );
}