import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { HiPencil } from "react-icons/hi";
import QuillEditor from "../QuillEditor";
import dynamic from "next/dynamic";

const JobDescription = () => {
  const [data, setData] = useState(
    "<p><strong>Hello World</strong></p><p><br></p><p>Just Trying</p><p><br></p>"
  );
  const [editdata, setEditData] = useState(data);
  const [edit, setEdit] = useState(false);
  const handleSave = () => {
    setData(editdata);
    setEdit(!edit);
  };
  const handleCancel = () => {
    setEditData(data);
    setEdit(!edit);
  };
  return (
    <Tabs.Content
      value="1"
      className="flex flex-col  -z-10 h-[460px] gap-5 p-5 data-[state=active]:z-20"
    >
      <div className="flex justify-between">
        <span className="text-lg font-bold">Description</span>
        {edit ? (
          <div className="text-sm">
            <button
              className="text-[#57A4F2] py-[6px] px-8 outline-none cursor-pointer border-none"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-[#57A4F2] py-[6px] ml-[10px] px-8 rounded-md cursor-pointer text-white"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        ) : (
          <HiPencil
            onClick={() => setEdit(!edit)}
            className="w-5 h-5 ml-2 cursor-pointer text-primary"
          />
        )}
      </div>
      <div className="w-full h-full p-5 mb-1 overflow-x-visible overflow-y-scroll bg-white rounded-md">
        {edit ? (
          <QuillEditor data={editdata} setData={setEditData} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        )}
      </div>
    </Tabs.Content>
  );
};

export default JobDescription;
