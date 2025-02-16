import React from "react";
import "./HeroSection.css" 
import {TypeAnimation} from 'react-type-animation';

export const HeroSection = ()=>{
    return(
        <div className="Hero-main">
            <div className="tagLine">
                <h1>Empowering individuals with </h1> 
                <TypeAnimation
                    sequence={[
                    "cutting-edge technical skills",
                    2000,
                    "innovative technology solutions.",
                    2000
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2.5em', fontWeight: 'bold' ,color:'red'}}
                    /> 
                    <button>Know More</button>
            </div>
            <div className="cover">
                    <img src="https://s3-alpha-sig.figma.com/img/2cac/1398/959ba654a599af19c191821ec1a19ac4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kBJM-Y8fP5sS1BbmUtzS5TlQmt7QZehjGtZ-HDBc0PVQ27XNDVJ~BYy84iAQz3yZVtTFjUdCgicwl~6S9HZZFks469UYU0Wp-n6ETO7WkJn4of0pjekzOq2BoQgJ5-q38ay2TwC1zrLpoxx~OLUU-f1Tcqg8VqjbFlZP--57XczNuH5DtwCC2i~-ty3JERY4excQMC78s715ArbHJcoQxl2YxYm8eutCv5vFfBmtIYkxoRmQgE1iZ7Sv3PXvyhjWJfCBiG7Zk9m5F6YDNmmdO1aSnu33ZpqEluEi-8wLHyPH0i6VOtOq98Jh5DHhnsF73OGLzmU67uiaSbMJpFwgNQ__"/>
            </div>
        </div>
    )
}