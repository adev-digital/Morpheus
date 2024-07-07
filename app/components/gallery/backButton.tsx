import { useRouter } from "next/navigation";
import "@/styles/galleryOne.scss"
const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className="back"
      onClick={() => {
        router.back()
      }}
      style={{ zIndex: 100000 }}
    >
      Back
      <div>
        <svg
          width="156"
          height="12"
          viewBox="0 0 156 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M156 0H0V0.5L8 12H9L1.5 1H156V0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};
export default BackButton;
