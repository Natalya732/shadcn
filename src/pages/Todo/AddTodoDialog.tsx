import { Dialog, DialogContent } from "@radix-ui/react-dialog";

export const AddTodoDialog = () => {
  return <Dialog>
    <DialogContent>
      <div className="bg-red-100 p-5 h-screen">
        <div className="header w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold">To Do App</h1>
          <button
            className="bg-blue-400 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>;
};
