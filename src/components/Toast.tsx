import {useEffect} from 'react';

interface ToastProps {
  type: 'success' | 'fail';
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({type, message, onClose}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(onClose, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed left-1/2 top-[72px] z-50 w-[300px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#1B1D21] bg-[#0C0D0E80] p-2 text-[#FFFFFF] backdrop-blur-md transition-transform lg:w-[360px]`}>
      <button onClick={onClose} className="absolute right-2.5 top-2.5 p-2">
        <img
          src="/close.svg"
          alt="close svg"
          width={15}
          height={15}
          className="p-1"
        />
      </button>
      <div className="flex h-[40px] items-center gap-2 break-all p-2">
        {type === 'success' ? (
          <img
            src="/toast_check.svg"
            alt="toast_check svg"
            width={24}
            height={24}
          />
        ) : (
          <img
            src="/toast_fail.svg"
            alt="toast_fail svg"
            width={24}
            height={24}
          />
        )}
        <p className="my-auto mr-[18px] text-sm font-medium leading-[16.8px] text-[#C4C7CC]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Toast;
