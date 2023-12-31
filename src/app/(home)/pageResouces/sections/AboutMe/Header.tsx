import Countup from "@/components/Countup";
import MotionClient from "@/components/MotionClient";

export default function AboutMeHeader() {
  return (
    <header className="lg: z-10 flex flex-col items-center text-center">
      <MotionClient
        element="h1"
        initial={{ opacity: 0, translateY: 31 }}
        animate={{ opacity: 100, translateY: 0 }}
        viewport={{ once: true }}
        className="w-full text-4xl font-bold !leading-[120%] text-purple-heart-950 [text-wrap:balance] md:text-7xl md:-tracking-tighter">
        Building Tomorrow's Web Today.
      </MotionClient>

      <MotionClient
        element="div"
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 100, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex flex-col items-center justify-center gap-2 font-medium text-purple-heart-400 md:flex-row">
        <span>
          <Countup end={10} prefix="+" /> Built Projects
        </span>
        <hr className="w-1/2 border-purple-heart-300 md:w-12 md:rotate-90" />
        <span>
          <Countup end={20} prefix="+" /> Learned Skills
        </span>
      </MotionClient>
    </header>
  );
}
