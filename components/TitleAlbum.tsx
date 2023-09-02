import { useIsomorphic } from "@/lib/useIsomorphic";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function TitleAlbum() {
  const words = 'some works'
  const wordsArray = words.split(' ');
  const firstWordArray = wordsArray[0].split('');
  const secondWordArray = wordsArray[1].split('');

  useIsomorphic(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lines = gsap.utils.toArray('#line');
    const word1 = gsap.utils.toArray('#firstWords');
    const word2 = gsap.utils.toArray('#secondWords');

    lines.forEach((line: any) => {
      gsap.set(line, {
        scaleY: 0,
        opacity: 1
      })
    })

    const tlLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#titleAlbumContainer',
        start: 'top top',
        end: '+=1000px top',
        scrub: 1,
        pin: true,
        markers: false
      }
    });

    const tlWord1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#titleAlbumContainer',
        start: 'top top',
        end: '+=1000px top',
        scrub: 1,
        markers: false
      }
    });
    const tlWord2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#titleAlbumContainer',
        start: 'top top',
        end: '+=1000px top',
        scrub: 1,
        markers: false
      }
    });

    word1.forEach((word: any) => {
      tlWord1.to(word, {
        y: -123,
        duration: 1,
        ease: 'power4.out'
      }, '<0.1')
    })

    word2.forEach((word: any) => {
      tlWord2.to(word, {
        y: -140,
        duration: 1,
        ease: 'power4.out'
      }, '<0.1')
    })

    lines.forEach((line: any) => {
      tlLine.to(line, {
        scaleY: 1,
        ease: 'power4.out',
        duration: 1
      }, '<0.1')
    })
    
  }, [])

  return (
    <div id="titleAlbumContainer" className="h-screen w-full ">
      <div className="flex justify-center items-center relative w-full h-full">
        <div className="w-[60%] h-full absolute">
          <div id="line" className="w-[0.2rem] h-[411px] rounded-full absolute left-[15%] top-20 bg-gradient-to-b from-red-300 to-yellow-300 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[60px] rounded-full absolute left-[20%] top-[17%] bg-gradient-to-b from-red-300 to-yellow-300 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[60px] rounded-full absolute left-[23%] top-[19%] bg-gradient-to-b from-red-300 to-yellow-300 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[150px] rounded-full absolute left-[26%] top-[5%] bg-gradient-to-b from-red-300 to-yellow-300 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[500px] rounded-full absolute left-[7%] top-9 bg-gradient-to-b from-red-300 to-yellow-300 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[800px] rounded-full absolute left-[47%] top-[-41%] bg-gradient-to-b from-red-300 to-yellow-300 -rotate-90 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[328px] rounded-full absolute left-[11%] top-[28.5%] bg-gradient-to-b from-red-300 to-yellow-300 ">
          </div>
          <div id="line" className="w-[0.2rem] h-[570px] rounded-full absolute left-[49.9%] top-[28%] bg-gradient-to-b from-red-300 to-yellow-300 -rotate-90 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[610px] rounded-full absolute left-[48.5%] top-[-20%] bg-gradient-to-b from-red-300 to-yellow-300 -rotate-90 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[610px] rounded-full absolute left-[48.5%] top-[-23%] bg-gradient-to-b from-red-300 to-yellow-300 -rotate-90 opacity-0">
          </div>
          <div id="line" className="w-[0.2rem] h-[150px] rounded-full absolute left-[85%] top-[54.4%] bg-gradient-to-b from-red-300 to-yellow-300 opacity-0">
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-1 text-[10rem] font-bold scale-75">
          <div id="firstCont" className="w-full h-40 flex justify-start items-start gap-1 overflow-hidden">
            {
              firstWordArray.map(word => (
                <span id="firstWords" className="text-transparent bg-clip-text bg-gradient-to-bl from-purple-400 via-pink-300 mt-24">
                  {word.toUpperCase()}
                </span>
              ))
            }
          </div>
          <div id="secondCont" className="w-full h-40 flex justify-start items-start gap-1 overflow-hidden text-transparent bg-clip-text bg-gradient-to-bl from-red-600 via-red-200 to-yellow-400">
            {
              secondWordArray.map(word => (
                <span id="secondWords" className="mt-24">
                  {word.toUpperCase()}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleAlbum