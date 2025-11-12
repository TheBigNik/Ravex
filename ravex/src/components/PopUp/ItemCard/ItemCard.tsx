const ItemCard = () => {
  return (
    <div className="w-97 h-24 bg-[#111014] self-stretch pl-3.5 pr-3 pt-3 rounded-2xl border-l-[3px] border-black/0 flex justify-between font-sans">
      <div>
        <div className="flex">
          <div className="w-12 h-12 bg-zinc-900 rounded-[10px] inline-flex justify-center items-center">
            <div className="justify-start text-zinc-100 text-2xl font-normal leading-9">
              A
            </div>
          </div>
          <div>
            <div className="px-3 gap-1 flex flex-col">
              <div className="w-52 justify-start text-zinc-100 text-sm font-semibold leading-5">
                How to Build Web Apps with AI
              </div>

              <div className="inline-flex w-fit bg-sky-400/10 rounded-sm items-center px-2 py-0.5 gap-1">
                <div className=" text-zinc-100 text-xs font-normal">
                  🔗
                </div>
                <div className="text-sky-400 text-xs font-semibold">
                  Link
                </div>
              </div>

              <div>
                <div className="w-44 h-4 inline-flex justify-start items-center gap-2">
                  <div className="w-20 h-4 relative overflow-hidden">
                    <div className="left-0 top-[0.50px] absolute justify-start text-zinc-100/60 text-xs font-normal leading-4">
                      youtube.com
                    </div>
                  </div>
                  <div className="w-1.5 h-4 relative">
                    <div className="left-0 top-[0.50px] absolute justify-start text-zinc-100/60 text-xs font-normal leading-4">
                      •
                    </div>
                  </div>
                  <div className="w-11 h-4 relative">
                    <div className="left-0 top-[0.50px] absolute justify-start text-zinc-100/60 text-xs font-normal leading-4">
                      2m ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>icons</div>
    </div>
  );
};

export default ItemCard;
