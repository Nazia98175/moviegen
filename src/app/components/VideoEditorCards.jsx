import Image from "next/image";

const VideoEditorCards = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-10 xl:mt-[72px]">
      <div className="row-span-2 col-span-1 rounded-[16px] border border-[#44436285] bg-darkblue0d overflow-hidden">
        <Image
          unoptimized
          className="w-full h-full object-cover"
          src={"/images/webp/why-creators.webp"}
          height={100}
          width={400}
          alt="hero-bg-blur"
        />
      </div>
      <div className="row-span-1 col-span-2 rounded-[16px] border border-[#44436285] bg-darkblue0d overflow-hidden">
        <Image
          unoptimized
          className="w-full h-full object-cover object-[10%]"
          src={"/images/webp/studio-grade.webp"}
          height={100}
          width={400}
          alt="hero-bg-blur"
        />
      </div>
      <div className="row-span-1 col-span-1 rounded-[16px] border border-[#44436285] overflow-hidden">
        <Image
          unoptimized
          className="w-full h-full object-cover object-[10%]"
          src={"/images/webp/quick-access.webp"}
          height={100}
          width={400}
          alt="hero-bg-blur"
        />
      </div>
      <div className="row-span-2 col-span-1 rounded-[16px] border border-[#44436285] overflow-hidden">
        <Image
          unoptimized
          className="w-full h-full object-cover object-[10%]"
          src={"/images/webp/lightning-fast.webp"}
          height={100}
          width={400}
          alt="hero-bg-blur"
        />
      </div>
      <div className="row-span-1 col-span-2 rounded-[16px] border border-[#44436285] overflow-hidden">
        <Image
          unoptimized
          className="w-full h-full object-cover object-[10%]"
          src={"/images/webp/works-anywhere.webp"}
          height={100}
          width={400}
          alt="hero-bg-blur"
        />
      </div>
    </div>
  );
};

export default VideoEditorCards;
