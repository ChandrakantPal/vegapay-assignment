import * as React from "react";
import Button from "./Button";
import CloseIcon from "./Icons/CloseIcon";

interface ModalProps {
  modalHeader?: string;
  triggerElement: React.ReactElement;
  content?: React.ReactElement;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  modalHeader,
  triggerElement,
  content,
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        {triggerElement &&
          React.cloneElement(triggerElement as React.ReactElement<any>, {
            onClick: openModal,
          })}
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-end w-full ${
          open ? "visible" : "invisible"
        }`}
        onClick={closeModal}
      >
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div
          className="relative z-10 w-[80%] md:min-w-[40%]  mt-auto h-[calc(100vh-68px)] overflow-y-scroll md:w-fit bg-white rounded-l-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between p-4 bg-zinc-50">
            {modalHeader && <h6 className="text-lg">{modalHeader}</h6>}
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeModal}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </header>
          <main className="h-full p-6">{content ? content : children}</main>

          <footer className="absolute bottom-0 flex items-center justify-end w-full gap-4 p-4 border-t">
            <Button color="warning" variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Modal;
