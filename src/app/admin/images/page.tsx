"use client";

import React, { useState, useEffect } from "react";
import { Upload, Trash2, Copy } from "lucide-react";

interface ImageFile {
  id: string;
  url: string;
  alt_text: string;
  created_at: string;
}

export default function AdminImagesPage() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // fetch('/api/images')...
    setImages([
      { id: "1", url: "/placeholder.jpg", alt_text: "ภาพอาคารโรงพยาบาล", created_at: "2026-09-27" }
    ]);
    setLoading(false);
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt_text", file.name);

    // await fetch('/api/images', { method: 'POST', body: formData });
    
    setTimeout(() => {
      setUploading(false);
      // reload images
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">คลังรูปภาพ</h1>
        <div>
          <input 
            type="file" 
            id="image-upload" 
            className="hidden" 
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
          />
          <label 
            htmlFor="image-upload"
            className="flex items-center gap-2 bg-[#00694E] text-white px-4 py-2 rounded-lg hover:bg-[#005740] transition-colors cursor-pointer"
          >
            <Upload size={20} />
            {uploading ? "กำลังอัปโหลด..." : "อัปโหลดรูปภาพ"}
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4">
        {loading ? (
          <div className="text-center py-8 text-[#64748B]">กำลังโหลดข้อมูล...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map(image => (
              <div key={image.id} className="border border-[#E5E7EB] rounded-lg overflow-hidden flex flex-col group">
                <div className="aspect-square bg-[#F1F5F9] relative flex items-center justify-center p-2">
                  <span className="text-[#94A3B8] text-sm text-center truncate w-full">{image.alt_text}</span>
                  {/* <img src={image.url} alt={image.alt_text} className="w-full h-full object-cover" /> */}
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 bg-white rounded text-[#0F172A] hover:bg-gray-100" title="คัดลอก URL">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 bg-white rounded text-[#C8102E] hover:bg-gray-100" title="ลบรูปภาพ">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-2 bg-gray-50 border-t border-[#E5E7EB] text-xs text-[#475569] truncate">
                  {image.alt_text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
