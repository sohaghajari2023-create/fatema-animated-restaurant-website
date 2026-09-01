import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Toast() {
  const { toastMessage } = useAppContext();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-green-600/90 backdrop-blur-md border border-green-500/50 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
        <CheckCircle2 size={20} className="text-white" />
        <span className="font-medium">{toastMessage}</span>
      </div>
    </div>
  );
}
