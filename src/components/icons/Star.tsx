export default function StarIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M14 29.804c0-11.291-3.392-14.902-14-14.902 10.608 0 14-3.611 14-14.902 0 11.291 3.392 14.902 14 14.902-10.612.004-14 3.61-14 14.902" />
    </svg>
  );
}
