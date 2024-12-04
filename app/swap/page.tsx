import dynamic from "next/dynamic";

const JupiterClient = dynamic(() => import("@/components/Jupiter"), {ssr: false});
export default function SwapPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <main className="ml-64 p-8">
        <JupiterClient />
      </main>
    </div>
  );
}