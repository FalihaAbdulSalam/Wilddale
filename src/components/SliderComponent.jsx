import React, { Component } from 'react';


class SliderComponent extends Component {
  render() {
    return (
      <div id="rev_slider_2_1_wrapper" data-source="gallery" style={{visibility: "hidden", background: "transparent", padding: 0, margin: "0px auto", marginTop: 0, marginBottom: 0}}>
        <rs-module id="rev_slider_2_1" style={{}} data-version="6.5.11">
          <rs-slides>
            <rs-slide style={{position: "absolute"}} data-key="rs-2" data-title="Slide" data-thumb="//www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/10/slider-img-01-50x100.jpg" data-in="o:0;" data-out="a:false;">
              <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1822,h_853/https://www.themetechmount.com/wordpress/wilddale/wp-content/plugins/revslider/public/assets/assets/dummy.png" title="slider-img-01" width={1822} height={853} className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="//www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/10/slider-img-01.jpg" data-no-retina />
              <rs-layer id="slider-2-slide-2-layer-0" data-type="text" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:60px,60px,0,0;yo:187px,187px,85px,53px;" data-text="w:normal;s:15,15,15,13;l:28,28,16,20;a:center;" data-padding="t:5,5,5,3;r:18,18,10,6;b:5,5,5,3;l:54,54,34,21;" data-border="bor:5px,5px,5px,5px;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;" style={{zIndex: 9, backgroundColor: "#ee344e", fontFamily: '"Poppins"'}}>A Place Where a Pepole meets Nature !</rs-layer>
            </rs-slide>
          </rs-slides>
        </rs-module>
      </div>
    );
  }
}

export default SliderComponent;
