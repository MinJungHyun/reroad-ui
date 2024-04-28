import classNames from "classnames";
import {
  IconDelete,
  // IconSend
} from "@/components/icon";
import { IKeyword } from "./page";

interface Props {
  keywordInfo: IKeyword;
  handleDelete: (id: number) => void;
}
export default function KeywordItem({ keywordInfo, handleDelete }: Props) {
  const { id, word } = keywordInfo;
  return (
    <div>
      <div
        key={id}
        className={classNames("flex justify-between items-center h-14")}
      >
        <div>{word}</div>
        <div
          onClick={() => handleDelete(id)}
          onKeyDown={() => handleDelete(id)}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
        >
          <IconDelete className="text-xl" />
        </div>
      </div>
    </div>
  );
}
