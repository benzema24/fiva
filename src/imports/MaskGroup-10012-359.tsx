import imgRectangle2 from "@/assets/c8c4b5e5190af82b9e3a6eae39dc98bdb8bcd718.png";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute bg-white h-[208px] left-[24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-24px_-56px] mask-size-[487px_275px] top-[56px] w-[463px]" style={{ maskImage: `url('${imgRectangle2}')` }} />
    </div>
  );
}