// components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
        <FaWhatsapp className="text-white text-3xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
