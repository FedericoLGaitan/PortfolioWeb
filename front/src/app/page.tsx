import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex items-center justify-center min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <h1 className="text-5xl font-extrabold text-slate-50 shadow-sm">Welcome</h1>
      </div>
    </main>
  );
}
