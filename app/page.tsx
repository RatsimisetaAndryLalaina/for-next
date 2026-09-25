import image from '@/assets/images/img.jpg';
import ImageComponent from '@/component/image/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      HERE IS THE MAIN PAGE
      <div><ImageComponent priority={true} src={image} alt="Sample Image" width={500} height={300} /></div>
      
    </div>
  );
}
