import "./popup.css";
import RavexButton from "../../components/PopUp/RavexButton/RavexButton";
import SliderCategoryComponent from "../../components/PopUp/CategoryCard/SliderCategoryComponent";
import CategoryCard from "../../components/PopUp/CategoryCard/CategoryCard";
import ItemCard from "../../components/PopUp/ItemCard/ItemCard";
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
            <RavexButton
              variant="primary"
              title="PASTE LATEST"
              icon="Paste"
              fullWidth
            />
          </div>
          <RavexButton variant="secondary" title="DELETE ALL" icon="Delete" />
          <RavexButton variant="secondary" title="FILTER TYPE" />
        </div>

        <hr className="w-full border-zinc-800 mt-3" />

        <SliderCategoryComponent>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </SliderCategoryComponent>

        <hr className="w-full border-zinc-800 mt-1" />

        <div className="slider-scroll flex-col w-full items-stretch gap-3 overflow-y-auto p-4 scroll-smooth touch-pan-y snap-y snap-mandatory">
          <ItemCard />
        </div>

      </div>
    </div>
  );
};

export default PopupApp;
