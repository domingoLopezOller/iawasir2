import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img src="/header.jpg" width="500" height="400" alt="un ejemplo de imagen"></img>
      <Image src="/header.jpg" width="500" height="400" alt="ejemplo de imagen"/> 
    </div>
      );
}
