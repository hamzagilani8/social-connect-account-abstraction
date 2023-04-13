import Image from "next/image"
import RpcProviderExample from "./connectSocial"



const Hero = () => {
  return (
    <div className="mt-40" >
        <div>
        <Image  src={"/panaverseLogo.png"} alt={""} width="250" height="10"/>
        </div>
        <div className="flex justify-center my-10">
        <RpcProviderExample />
        </div>
    </div>
  )
}

export default Hero