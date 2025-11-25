import Image from "next/image"

export const Logo = () => {
  return (
    <Image
      src={"/magellan-logo.png"}
      alt='logo'
      width={134}
      height={64}
      loading='eager'
    />
  )
}
