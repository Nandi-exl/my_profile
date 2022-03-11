import Image from "next/image"

function SliderExperience() {
  return (
    <div class="container">
        <div class="button" onclick="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
        <div class="cards-wrapper">
            <ul class="cards__container">
                <li class="box" style="background-color:red">box 1</li>
                <li class="box">box 2</li>
                <li class="box">box 3</li>
                <li class="box">box 4</li>
                <li class="box">box 5</li>
                <li class="box box--hide">box 6</li>
                <li class="box box--hide">box 7</li>
            </ul>
            <div class="card__text-content">
                <h3 class="card__title">The Famous Five</h3>
                <div class="card__summary">The Famous Five is a series of children's adventure novels written by English author Enid Blyton. The first book, Five on a Treasure Island, was published in 1942.</div>
            </div>
        </div>
        <div class="button" onclick="shiftRight()"> <Image src={}> </div>
    </div>
  )
}

export default SliderExperience;