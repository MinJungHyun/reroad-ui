import { Dispatch, SetStateAction, useRef, useState } from "react";

// import { IconCamera } from "@/components/icon";

// const maxImageCount = 10;

// ImageButton 컴포넌트를 ImageUploader 바깥으로 이동
function ImageBox({
  url,
  index,
  images,
  setImages,
}: {
  url: string;
  index: number;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}) {
  const handleDelete = (idx: number) => {
    const newImages = images.filter((_, i) => i !== idx);
    setImages(newImages);
  };

  return (
    <div className="w-16 h-16 relative border-slate-300 mt-4" key={url}>
      <img
        src={url}
        alt="your img"
        className="object-cover rounded-lg border w-full h-full absolute top-0 left-0"
      />
      <div
        className="absolute -top-2 -right-2 border rounded-full w-5 h-5 flex items-center justify-center bg-white"
        role="button"
        onClick={() => handleDelete(index)}
        onKeyDown={() => handleDelete(index)}
        tabIndex={0}
      >
        <i className="ri-close-circle-line text-2xl" />
      </div>
    </div>
  );
}

interface ImageButtonProps {
  className: string;
  // .. etc
}

function ImageButton({ className, ...props }: ImageButtonProps) {
  return <button type="button" className={className} {...props} />;
}

export function ImageUploader() {
  const [images, setImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  // const handleClick = () => {
  //   fileRef?.current?.click();
  // };

  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
  };

  return (
    <div>
      <input
        ref={fileRef}
        name="file"
        className="hidden"
        type="file"
        multiple
        accept="image/*"
        onChange={handleChange}
      />
      <div className="flex gap-4  ">
        <ImageButton className="flex-0 " />
        <div className="flex-1 overflow-x-scroll ">
          <div className="flex gap-4 " style={{ width: images.length * 86 }}>
            {images.map((url, i) => (
              <ImageBox
                key={url}
                url={url}
                index={i}
                images={images}
                setImages={setImages}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
