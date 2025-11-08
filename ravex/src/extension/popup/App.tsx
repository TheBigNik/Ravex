import "./popup.css";
import RavexButton from "../../components/RavexButton/RavexButton";
const PopupApp = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-96 h-[600px] bg-zinc-950 rounded-2xl shadow-2xl inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="flex w-full justify-between items-center px-4 py-2">
          <div>
            <img src="/svg/Logo.svg" alt="logo" width={24} height={24} />
          </div>
          <div className="justify-start text-zinc-100 text-base font-semibold font-['Inter'] leading-6">
            Ravex
          </div>
          <div>
            <img src="/svg/Settings.svg" alt="settings" />
          </div>
        </div>
        <div className="flex flex-wrap w-full px-4 py-2 justify-between gap-y-3">
          <div className="w-full relative left-1/2 transform -translate-x-1/2">
            <RavexButton variant="primary" title="PASTE LATEST" icon="Paste" fullWidth />
          </div>
          <RavexButton variant="secondary" title="DELETE ALL" icon="Delete"/>
          <RavexButton variant="secondary" title="FILTER TYPE" />
        </div>
      </div>
    </div>
  );
};

export default PopupApp;
