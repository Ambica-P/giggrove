import { Appbar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/sidebar";
import { Upload } from "@/components/Upload";
import { UploadImage } from "@/components/UploadImage";

import Image from "next/image";

export default function Root() {
  return (
    <div>
      
      <Hero></Hero>
      <Upload></Upload>
    </div>
  );
}