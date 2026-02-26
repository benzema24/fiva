import imgRectangle3 from "@/assets/46d948d255aef3bc7a2033b134d3707e60f5d0d2.png";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute bg-white h-[517px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[672px_517px] top-0 w-[672px]" style={{ maskImage: `url('${imgRectangle3}')` }} />
    </div>
  );
}