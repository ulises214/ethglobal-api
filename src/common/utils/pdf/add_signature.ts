import { PDFDocument } from 'pdf-lib';
type Size = {
  width: number;
  height: number;
};
const clampSize = (image: Size, maxSize: Size): Size => {
  const factor = maxSize.height / image.height;
  return {
    width: image.width * factor,
    height: image.height * factor,
  };
};
export const addSignatureToPdf = async (
  pdfBuffer: Buffer,
  signature: Buffer,
): Promise<Buffer> => {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pageCount = pdfDoc.getPageCount();
  const img = await pdfDoc.embedPng(signature);
  const page = pdfDoc.getPage(pageCount - 1);
  const { x, y, width } = page.getBleedBox();
  const { height: imageH, width: imageW } = img.size();
  const { height: signatureH, width: signatureW } = clampSize(
    {
      width: imageW,
      height: imageH,
    },
    {
      width: page.getWidth(),
      height: 100,
    },
  );
  const imgX = x + (width - signatureW) / 2;
  const imgY = y;
  page.drawImage(img, {
    x: imgX,
    y: imgY,
    width: signatureW,
    height: signatureH,
  });
  const pdfBytes = await pdfDoc.saveAsBase64();
  return Buffer.from(pdfBytes, 'base64');
};
