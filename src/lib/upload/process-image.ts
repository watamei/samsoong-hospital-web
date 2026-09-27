import sharp from 'sharp';

export interface ProcessedImage {
  original: Buffer;
  thumb: Buffer;
  medium: Buffer;
  large: Buffer;
  mimeType: string;
}

export async function processImage(buffer: Buffer, filename: string): Promise<ProcessedImage> {
  // Convert HEIC or standard formats to WebP
  let pipeline = sharp(buffer);
  
  const metadata = await pipeline.metadata();
  if (metadata.format === 'heif' || (metadata.format as string) === 'heic') {
    // Sharp supports HEIC if compiled with libvips HEIF support
    pipeline = sharp(buffer); 
  }

  const webpPipeline = pipeline.webp({ quality: 82 });

  const [thumb, medium, large] = await Promise.all([
    webpPipeline.clone().resize({ width: 400, withoutEnlargement: true }).toBuffer(),
    webpPipeline.clone().resize({ width: 1000, withoutEnlargement: true }).toBuffer(),
    webpPipeline.clone().resize({ width: 1920, withoutEnlargement: true }).toBuffer(),
  ]);

  return {
    original: buffer,
    thumb,
    medium,
    large,
    mimeType: 'image/webp'
  };
}
