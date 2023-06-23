"use client";
import Image from "next/image";
import React from "react";
import Menuicon from "../../public/assets/dndcard/menu.svg";
import Logo from "../../public/assets/dndcard/logo.svg";
import HouseIcon from "../../public/assets/dndcard/house.svg";
import ClipIcon from "../../public/assets/dndcard/clip.svg";
import Docicon from "../../public/assets/dndcard/doc.svg";
import Messageicon from "../../public/assets/dndcard/message.svg";
import MessageiconR from "../../public/assets/dndcard/messageR.svg";
import { Draggable } from "react-beautiful-dnd";
import * as Dialog from "@radix-ui/react-dialog";
import JobContainer from "../container/JobContainer";
import * as Popover from "@radix-ui/react-popover";
import { BsTrashFill } from "react-icons/bs";
import { motion } from "framer-motion";

const DndCards = ({ index, task }) => {
  return (
    <Dialog.Root>
      {/* <Dialog.Trigger> */}
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="bg-white rounded-md "
          >
            <div className="p-[10px] flex flex-col gap-[10px]">
              <div className="flex gap-[10px] items-center">
                <span className="text-xs font-bold text-quinary">
                  Saved By Loop
                </span>
                <span className="text-[10px] font-normal mr-auto text-senary">
                  Expired in 2 days
                </span>
                {/* <Image className='ml-auto justify-self-end' alt='menu' src={Menuicon} /> */}
                <DeletePop />
              </div>
              <Dialog.Trigger>
                <div className="flex gap-[10px] items-center">
                  <Image alt="logo" src={Logo} width={24} height={24} />
                  <div className="flex flex-col font-normal">
                    <span className="inline-block text-sm text-start ">
                      UI/UX Designer
                    </span>
                    <span className="flex items-center gap-[10px]">
                      <Image alt="house" src={HouseIcon} />
                      <span className="text-xs text-[#AFAFAF]">
                        Ajmera Infotech Inc.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-[10px] gap-[10px]">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded-md"
                  >
                    <Image alt="clip" src={ClipIcon} />
                    <span className="text-xs">75%</span>
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-[10px] border border-dashed rounded-full border-[#9E9E9E]"
                  >
                    <Image alt="doc" src={Docicon} />
                  </motion.span>
                  {task.messages ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2 px-3 py-2 bg-red-100 rounded-md"
                    >
                      <Image alt="message" src={MessageiconR} />
                      <span className="text-xs">{task.messages}%</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="p-[10px] border border-dashed rounded-full border-[#9E9E9E]"
                    >
                      <Image alt="message" src={Messageicon} />
                    </motion.span>
                  )}
                </div>
              </Dialog.Trigger>
            </div>
          </div>
        )}
      </Draggable>
      {/* </Dialog.Trigger> */}
      <Dialog.Portal className="z-20">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <JobContainer />
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DndCards;

const DeletePop = () => {
  return (
    <Popover.Root className="ml-auto justify-self-end">
      <Popover.Trigger>
        <Image src={Menuicon} className="cursor-pointer" alt="delete" />
      </Popover.Trigger>
      <Popover.Content
        sideOffset={8}
        className="w-[160px] px-5 py-3 shadow-md rounded-md cursor-pointer bg-white "
      >
        <div className="bg-white flex gap-[10px]">
          <BsTrashFill className="text-[#F44336] text-[20px] cursor-pointer" />
          <span className="text-[#212121] text-sm">Delete</span>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
