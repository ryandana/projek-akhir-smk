"use client";

import { createContext, useContext, useState, useRef } from "react";
import Button from "@/components/ui/button.component";

const ConfirmContext = createContext();

export function ConfirmProvider({ children }) {
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {},
    onCancel: () => {},
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    variant: "neutral",
  });

  const confirm = (options) => {
    return new Promise((resolve) => {
      setConfirmState({
        isOpen: true,
        title: options.title || "Confirm Action",
        message: options.message || "Are you sure you want to proceed?",
        confirmLabel: options.confirmLabel || "Confirm",
        cancelLabel: options.cancelLabel || "Cancel",
        variant: options.variant || "neutral",
        onConfirm: () => {
          setConfirmState((prev) => ({ ...prev, isOpen: false }));
          resolve(true);
        },
        onCancel: () => {
          setConfirmState((prev) => ({ ...prev, isOpen: false }));
          resolve(false);
        },
      });
    });
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {confirmState.isOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{confirmState.title}</h3>
            <p className="py-4">{confirmState.message}</p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={confirmState.onCancel}
                >
                  {confirmState.cancelLabel}
                </Button>
                <Button
                  type="button"
                  variant={
                    confirmState.variant === "danger" ? "danger" : "neutral"
                  }
                  className={
                    confirmState.variant === "danger"
                      ? "btn-error text-white"
                      : ""
                  }
                  onClick={confirmState.onConfirm}
                >
                  {confirmState.confirmLabel}
                </Button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  return useContext(ConfirmContext);
}
