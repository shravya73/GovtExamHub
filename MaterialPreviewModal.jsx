import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  BookOpen, 
  Star,
  ExternalLink,
  Sparkles,
  Check
} from 'lucide-react';

export default function MaterialPreviewModal() {
  const { selectedMaterialModal, setSelectedMaterialModal, showToast } = useApp();
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  if (!selectedMaterialModal) return null;

  const mat = selectedMaterialModal;

  const handleSimulatedDownload = () => {
    setDownloading(true);
    setDownloadProgress(20);
    const t1 = setTimeout(() => setDownloadProgress(60), 400);
    const t2 = setTimeout(() => setDownloadProgress(100), 800);
    const t3 = setTimeout(() => {
      setDownloading(false);
      setDownloadProgress(0);
      showToast(`Downloaded "${mat.title.slice(0, 30)}..." successfully!`, 'success');
      // Create a simulated blob download of the text preview so user actually gets a real text file!
      const blob = new Blob([
        `GovtExamHub - Legal Educational Resource\n` +
        `Title: ${mat.title}\n` +
        `Subject: ${mat.subject}\n` +
        `Source: ${mat.authorOrSource}\n` +
        `License: ${mat.license}\n\n` +
        `----------------------------------------\n` +
        mat.previewContent + `\n\n` +
        `For more verified study resources, visit https://govtexamhub.in`
      ], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${mat.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-start justify-between border-b border-navy-700">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500 text-white">
                Free Legal PDF
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/10 text-slate-200">
                {mat.subject}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
              {mat.title}
            </h3>
            <p className="text-xs text-slate-300">
              Source & Licensing: <span className="text-saffron-300 font-semibold">{mat.license}</span>
            </p>
          </div>

          <button
            onClick={() => setSelectedMaterialModal(null)}
            className="p-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white border border-navy-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Resource Verification Banner */}
        <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-2.5 flex items-center gap-2 text-xs text-emerald-900 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Open Access Verified:</strong> This material consists of public domain government digests, legislative text summaries, or openly licensed educational guides.
          </span>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400 font-medium">Format</div>
              <div className="font-bold text-slate-900 text-sm">{mat.fileFormat} Document</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400 font-medium">Length</div>
              <div className="font-bold text-slate-900 text-sm">{mat.pages} Pages</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400 font-medium">File Size</div>
              <div className="font-bold text-slate-900 text-sm">{mat.fileSize}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400 font-medium">Aspirant Rating</div>
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{mat.rating} / 5.0</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 text-navy-900">
              Executive Summary
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {mat.description}
            </p>
          </div>

          {/* Document Preview Reader */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-inner bg-slate-50">
            <div className="bg-slate-200/80 px-4 py-2 border-b border-slate-300 text-xs font-bold text-slate-700 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Document Viewer & Reading Notes</span>
              </span>
              <span className="text-[11px] font-normal text-slate-500">Live Rendered Text</span>
            </div>
            <div className="p-4 sm:p-6 bg-white font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line max-h-72 overflow-y-auto">
              {mat.previewContent}
            </div>
          </div>

          {/* Progress bar if downloading */}
          {downloading && (
            <div className="space-y-1.5 p-3 rounded-xl bg-saffron-50 border border-saffron-200 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-bold text-saffron-900">
                <span>Preparing & Generating Document...</span>
                <span>{downloadProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-saffron-500 h-2 transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => setSelectedMaterialModal(null)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 font-semibold text-slate-700 text-xs sm:text-sm"
          >
            Close Preview
          </button>
          <button
            onClick={handleSimulatedDownload}
            disabled={downloading}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Downloading...' : `Download Free PDF (${mat.fileSize})`}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

