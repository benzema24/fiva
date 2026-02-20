import imgRectangle1 from "figma:asset/6c13670fed51d89af7b1f360620ffc297829db02.png";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute bg-[#0b1e36] h-[1943px] left-[681px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-681px_-183px] mask-size-[4096px_2304px] top-[183px] w-[2792px]" style={{ maskImage: `url('${imgRectangle1}')` }} />
    </div>
  );
}