import type { PDFDocumentProxy, PDFPageProxy, RenderTask } from 'pdfjs-dist';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url';

// Configure PDF.js worker
GlobalWorkerOptions.workerSrc = workerUrl;

const PDF_LOAD_OPTIONS = {
  cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/cmaps/',
  cMapPacked: true,
  standardFontDataUrl:
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/standard_fonts/',
  wasmUrl:
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/wasm/'
};

export async function loadPdf(source: File | ArrayBuffer): Promise<PDFDocumentProxy> {
  const data = source instanceof File ? await source.arrayBuffer() : source;
  const doc = await getDocument({ data, ...PDF_LOAD_OPTIONS }).promise;
  return doc;
}
