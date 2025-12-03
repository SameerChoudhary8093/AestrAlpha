import Image from "next/image";

export default function AestrIcon({
  className,
  ...props
}: { className?: string } & Partial<React.ComponentProps<typeof Image>>) {
  return (
    <Image
      // 👇 REPLACE this with your actual file path (e.g., "/icons/aestr.svg")
      src="/home/AESTRlogo.svg" 
      alt="Aestr Icon"
      // Default dimensions from your previous SVG ViewBox (126 13)
      width={126} 
      height={13}
      className={className}
      {...props}
    />
  );
}