

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  const handleclick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={
      `
      border-2 rounded-xl 
      ${bigShoeImg === imgURL.bigShoe
        ? 'border-orange-500' : 'border-transparent'
      } cursor-pointer max-sm:flex-1 hover:scale-110 
      
      
    `}
      onClick={handleclick}
    >
      <div className=" flex justify-center items-center bg-cover bg-center bg-hero  rounded-xl sm:w-40 sm:h-40 max-sm:p-4  ">
        <img  
        src={imgURL.thumbnail}
          alt=" shoe collection"
          width={127}
          height={103}
          className="object-contain " />
      </div>
    </div>
  )
}

export default ShoeCard
