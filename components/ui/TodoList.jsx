import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
const TodoList = ({ sharedUserFullName = "", ownerUserId = "" }) => {
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = () => {
    const shareLink = `${"todoList 공유링크"}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`copied! ${shareLink}`);
      })
      .catch((error) => {});
  };
  return (
    <section className=" min-h-[70vh] bg-yellow-100">
      <article className="flex flex-row justify-between items-center">
        <div className="font-bold text-[32px]">
          {sharedUserFullName && <div>{sharedUserFullName}</div>} Things to do:
        </div>
        {ownerUserId && (
          <div
            onClick={() => handleCopy()}
            className="font-bold text-[20px] flex felx-row items-center cursor-pointer"
          >
            Share
            <IoShareSocialOutline />
          </div>
        )}
      </article>
      <div className="w-full max-w-[800px] p-[20px] mx-auto">contents</div>
    </section>
  );
};

export default TodoList;
