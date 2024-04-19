import { IconCamera } from '@/components/icon';
import { useRef, useState } from 'react';

const maxImageCount = 10;
export const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  // input click method
  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
  };

  const ImageButton = ({ className }: { className?: string }) => {
    return (
      <div className={`w-16 h-16 relative overflow-hidden rounded-lg border border-slate-300 ${className}`} onClick={handleClick}>
        <div className="flex flex-col justify-center items-center mt-2">
          <IconCamera className="text-2xl pr-[1px] text-gray-400" />
          <p className="text-[10px] -mt-1">
            <span>{images.length}</span>
            <span> /{maxImageCount}</span>
          </p>
        </div>
      </div>
    );
  };
  const ImageBox = ({ url }: { url: string }) => {
    return (
      <div className="w-16 h-16 relative overflow-hidden rounded-lg border border-slate-300" key={url}>
        <img src={url} alt="Your Image" className="object-cover w-full h-full absolute top-0 left-0" />
      </div>
    );
  };

  return (
    <div>
      <input ref={fileRef} name="file" className="hidden" type="file" multiple accept="image/*" onChange={handleChange} />
      <div className="flex gap-4  ">
        <ImageButton className="flex-0 " />
        <div className="flex-1 overflow-scroll scrollbar-hidden">
          <div className="flex gap-4 " style={{ width: images.length * 86 }}>
            {images.map((url, i) => (
              <ImageBox key={url} url={url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
