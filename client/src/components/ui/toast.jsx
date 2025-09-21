import { useEffect, useState } from "react";

// Simple event-based toast system (no external deps)
const TOAST_EVENT = "__app_toast_event__";

export function showToast({ title = "", description = "", variant = "info", duration = 3000 } = {}) {
  const event = new CustomEvent(TOAST_EVENT, {
    detail: { id: crypto.randomUUID(), title, description, variant, duration },
  });
  window.dispatchEvent(event);
}

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function onToast(e) {
      const toast = e.detail;
      setToasts((prev) => [...prev, toast]);
      // Auto remove after duration
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, toast.duration || 3000);
    }

    window.addEventListener(TOAST_EVENT, onToast);
    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  const baseClass =
    "pointer-events-auto w-80 rounded-md border shadow-lg p-4 mb-3 text-sm transition transform";
  const variants = {
    success: "bg-green-600/90 border-green-400 text-white",
    error: "bg-red-600/90 border-red-400 text-white",
    info: "bg-slate-800/90 border-slate-600 text-white",
    warning: "bg-yellow-600/90 border-yellow-400 text-black",
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end space-y-2">
      {toasts.map((t) => (
        <div key={t.id} className={`${baseClass} ${variants[t.variant] || variants.info}`}>
          {t.title && <div className="font-semibold">{t.title}</div>}
          {t.description && <div className="opacity-90 mt-1">{t.description}</div>}
        </div>
      ))}
    </div>
  );
}
