/* Placeholder for images that haven't been provided yet */
/* Shows solid gray background with description of what photo is needed */

interface PendingImageProps {
  description?: string;
  text?: string; // alias for description
  aspectRatio?: "16/9" | "4/3" | "1/1";
  className?: string;
  width?: number;
  height?: number;
}

export default function PendingImage({
  description,
  text,
  aspectRatio = "16/9",
  className = "",
}: PendingImageProps) {
  const displayText = description || text || "ภาพถ่ายจริงของโรงพยาบาล";

  return (
    <div
      className={`bg-[#E5E7EB] flex items-center justify-center rounded-[8px] ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`ภาพที่ต้องถ่าย: ${displayText}`}
    >
      <div className="text-center p-6">
        <svg
          className="w-12 h-12 mx-auto mb-3 text-[#9CA3AF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0023.25 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
        <p className="text-sm text-[#6B7280] font-medium">
          ต้องถ่ายภาพ: {displayText}
        </p>
      </div>
    </div>
  );
}
