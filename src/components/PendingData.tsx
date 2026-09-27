/* Component for displaying placeholder where real data is pending from the hospital */
/* Shows yellow background with "รอข้อมูลจากโรงพยาบาล" text */

interface PendingDataProps {
  label?: string;
  message?: string; // alias for label — some pages use this prop name
  className?: string;
}

export default function PendingData({
  label,
  message,
  className = "",
}: PendingDataProps) {
  const displayText = label || message || "ข้อมูล";

  return (
    <div
      className={`bg-[#FEF9C3] border border-[#FDE68A] rounded-[8px] p-4 ${className}`}
      role="status"
      aria-label={`รอข้อมูล: ${displayText}`}
    >
      <p className="text-sm text-[#92400E] font-medium">
        รอข้อมูลจากโรงพยาบาล: {displayText}
      </p>
    </div>
  );
}
