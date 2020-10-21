import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            {/* here we are gonna have diff stories 
            pass that in */}
            <Story
        image="https://i.ytimg.com/vi/EgT_us6AsDg/maxresdefault.jpg"
        profileSrc="https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg?w=600&quality=85"
        title="Selena Gomez"
      />

      <Story
        image="https://media1.popsugar-assets.com/files/thumbor/emAir3RQUG6kXu4a4WYWZQGiNCs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/08/13/985/n/1922283/a0ba0bc35f35c13082a049.29159696_/i/taylor-swift-you-belong-with-me-music-video-essay.jpg"
        profileSrc="https://i.insider.com/5f5e5c4b7ed0ee001e25f040?width=1100&format=jpeg&auto=webp"
        title="Taylor Swift"
      />

      <Story
        image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc802e36d6f40008dcdfe0%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D752%26cropX2%3D1749%26cropY1%3D178%26cropY2%3D1175"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/00/Katy_Perry_and_Greg_%2847870635411%29_%28cropped%29.jpg"
        title="Kate Perry"
      />

        </div>
    )
}

export default StoryReel
