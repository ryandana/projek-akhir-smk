"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { IconCheck, IconX, IconInfoCircle, IconAlertTriangle } from "@tabler/icons-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = "info", duration = 3000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    }, []);

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="toast toast-bottom toast-end z-50">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`alert ${toast.type === "success"
                                ? "alert-success"
                                : toast.type === "error"
                                    ? "alert-error"
                                    : toast.type === "warning"
                                        ? "alert-warning"
                                        : "alert-info"
                            } shadow-lg flex items-center gap-2`}
                    >
                        {toast.type === "success" && <IconCheck size={18} />}
                        {toast.type === "error" && <IconX size={18} />}
                        {toast.type === "info" && <IconInfoCircle size={18} />}
                        {toast.type === "warning" && <IconAlertTriangle size={18} />}
                        <span>{toast.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}
