import React from "react";
import { ReactDOM } from "react-dom";
import logo from "../uploads/logo-final.png";

function Heading() {
  return (
    <header
      id="masthead"
      className=" tm-header-style-classic-two tm-main-menu-total-6"
    >
      <div className="tm-header-block  tm-mmenu-active-color-skin tm-dmenu-active-color-skin tm-dmenu-sep-no">
        <div
          id="tm-stickable-header-w"
          className="tm-stickable-header-w tm-bgcolor-darkgrey"
          style={{ height: "100px" }}
        >
          <div
            id="site-header"
            className="site-header tm-bgcolor-darkgrey tm-sticky-bgcolor-darkgrey tm-header-menu-position-right tm-mmmenu-override-yes tm-above-content-yes  tm-stickable-header"
          >
            <div className="site-header-main tm-wrap container-fullwide tm-container-for-header">
              <div className="site-branding tm-wrap-cell">
                <div className="headerlogo themetechmount-logotype-image tm-stickylogo-no">
                  <h1 className="site-title">
                    <a
                      className="home-link"
                      href=""
                      title="WildDale"
                      rel="home"
                    >
                      <span className="tm-sc-logo tm-sc-logo-type-image">
                         {/* <noscript>
                          &lt;img className="themetechmount-logo-img standardlogo"
                          alt="WildDale" src="/wilddale/uploads/logo-final.png"&gt;
                        </noscript>  */}
                         <img
                          className="lazyload themetechmount-logo-img standardlogo"
                          alt="WildDale"
                           src={logo} width={40} height={40}
                           data-src="/wilddale/uploads/logo-final.png"
                        /> 

                      </span>
                    </a>
                  </h1>
                  <h2 className="site-description">
                    Jungle Safari WordPress Theme
                  </h2>
                </div>
              </div>
              {/* .site-branding */}
              <div
                id="site-header-menu"
                className="site-header-menu tm-wrap-cell"
              >
                <nav
                  id="site-navigation"
                  className="main-navigation"
                  aria-label="Primary Menu"
                  data-sticky-height={100}
                >
                  <div className="tm-header-text-area">
                    <div className="header-info-widget">
                      <div className="classic-full-button">
                        <a href="">
                          Get a Tickets
                        </a>
                      </div>
                      <div className="call-us-now">
                        <div className="icon-box">
                          <i className="fa-solid fa-phone-volume"></i>{" "}
                        </div>
                        <div className="title-box">
                          <span className="tm-textcolor-white tm-text-des">
                            Free Appointment
                          </span>
                          <h2 className="tm-skincolor">123 456 7890</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tm-header-icons ">
                    <span className="tm-header-icon tm-header-wc-cart-link">
                      <a href="" >
                        <i className="fa-solid fa-cart-shopping shopping"  ></i>{" "}
                        <span className="number-cart">0</span>
                      </a>
                    </span>
                  </div>
                  <button id="menu-toggle" className="menu-toggle">
                    <span className="tm-hide">Toggle menu</span>
                    <i className="tm-wilddale-icon-bars" />
                  </button>
                  <div className="nav-menu">
                    <ul id="menu-main-menu" className="nav-menu">
                      <li
                        id="menu-item-9608"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8177 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-9608"
                      >
                        <a
                          href=""
                          aria-current="page"
                        >
                          Home
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-12051"
                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-12051"
                          >
                            <a
                              href=""
                              aria-current="page"
                            >
                              Demo One
                            </a>
                          </li>
                          <li
                            id="menu-item-12052"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12052"
                          >
                            <a href="demo2/">
                              Demo Two
                            </a>
                          </li>
                          <li
                            id="menu-item-12053"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12053"
                          >
                            <a href="">
                              Demo Three
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-13"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13"
                      >
                        <a href="#">Know The Zoo</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-5367"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5367"
                          >
                            <a href="">
                              About Us One
                            </a>
                          </li>
                          <li
                            id="menu-item-5368"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5368"
                          >
                            <a href="">
                              About Us Two
                            </a>
                          </li>
                          <li
                            id="menu-item-5956"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5956"
                          >
                            <a href="">
                              Services One
                            </a>
                          </li>
                          <li
                            id="menu-item-5369"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5369"
                          >
                            <a href="">
                              Services Two
                            </a>
                          </li>
                          <li
                            id="menu-item-9607"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9607"
                          >
                            <a href="">
                              Our Team
                            </a>
                          </li>
                          <li
                            id="menu-item-9880"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9880"
                          >
                            <a href="">
                              Our Events
                            </a>
                          </li>
                          <li
                            id="menu-item-9690"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9690"
                          >
                            <a href="">
                              FAQS
                            </a>
                          </li>
                          <li
                            id="menu-item-11938"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11938"
                          >
                            <a href="">
                              Shop
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-16"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"
                      >
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-5959"
                            className="menu-item menu-item-type-post_type menu-item-object-tm_service menu-item-5959"
                          >
                            <a href="">
                              Support Wildlife
                            </a>
                          </li>
                          <li
                            id="menu-item-5958"
                            className="menu-item menu-item-type-post_type menu-item-object-tm_service menu-item-5958"
                          >
                            <a href="">
                              Act For WildLife
                            </a>
                          </li>
                          <li
                            id="menu-item-5960"
                            className="menu-item menu-item-type-post_type menu-item-object-tm_service menu-item-5960"
                          >
                            <a href="">
                              WiFi with Hi-Speed
                            </a>
                          </li>
                          <li
                            id="menu-item-5961"
                            className="menu-item menu-item-type-post_type menu-item-object-tm_service menu-item-5961"
                          >
                            <a href="">
                              A Guided Services
                            </a>
                          </li>
                          <li
                            id="menu-item-5962"
                            className="menu-item menu-item-type-post_type menu-item-object-tm_service menu-item-5962"
                          >
                            <a href="">
                              Food &amp; Beverages
                            </a>
                          </li>
                          <li
                            id="menu-item-5963"
                            className="menu-item menu-item-type-post_type menu-item-object-tm_service menu-item-5963"
                          >
                            <a href="">
                              Photos with Animals
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-9916"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9916"
                      >
                        <a href="">
                          Gallery
                        </a>
                      </li>
                      <li
                        id="menu-item-14"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-14"
                      >
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-9870"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9870"
                          >
                            <a href="">
                              Blog Classic
                            </a>
                          </li>
                          <li
                            id="menu-item-9641"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9641"
                          >
                            <a href="">
                              Blog Grid
                            </a>
                          </li>
                          <li
                            id="menu-item-7957"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7957"
                          >
                            <a href="">
                              Blog Left Image
                            </a>
                          </li>
                          <li
                            id="menu-item-7945"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7945"
                          >
                            <a href="">
                              Blog Single View
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-7907"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7907"
                      >
                        <a href="">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* .main-navigation */}
              </div>
              {/* .site-header-menu */}
            </div>
            {/* .site-header-main */}
          </div>
          {/* <div className="tm-slider-div" style={{marginBottom:"10px",background:"red"}}>
            <div className="themetechmount-social-links-wrapper">
              <ul className="social-icons">
                <li className="tm-social-facebook">
                  <a
                    aria-label="Facebook"
                    target="_blank"
                    href="https://www.facebook.com/people/@/themetechMount18"
                  >
                    <i className="fa-brands fa-facebook-f"></i>{" "}
                  </a>
                </li>
                <li className="tm-social-twitter">
                  <a
                    aria-label="Twitter"
                    target="_blank"
                    href="https://twitter.com/themetechmount"
                  >
                    <i className="tm-wilddale-icon-twitter" />
                  </a>
                </li>
                <li className="tm-social-linkedin">
                  <a
                    aria-label="LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/themetech-mount-81a161197/"
                  >
                    <i className="tm-wilddale-icon-linkedin" />
                  </a>
                </li>
                <li className="tm-social-pinterest">
                  <a
                    aria-label="Pinterest"
                    target="_blank"
                    href="https://in.pinterest.com/themetechmount/_created/"
                  >
                    <i className="tm-wilddale-icon-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        {/* <SliderComponent /> */}
        {/* <div className="themetechmount-slider-wrapper">
          <div className="themetechmount-slider-wide">
            <p className="rs-p-wp-fix" />
            <rs-module-wrap
              id="rev_slider_2_1_wrapper"
              data-source="gallery"
              style={{
                visibility: "hidden",
                background: "transparent",
                padding: 0,
                margin: "0px auto",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <rs-module id="rev_slider_2_1" style={{}} data-version="6.5.11">
                <rs-slides>
                  <rs-slide
                    style={{ position: "absolute" }}
                    data-key="rs-2"
                    data-title="Slide"
                    data-thumb="//www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/10/slider-img-01-50x100.jpg"
                    data-in="o:0;"
                    data-out="a:false;"
                  >
                    <img
                      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1822,h_853/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                      title="slider-img-01"
                      width={1822}
                      height={853}
                      className="rev-slidebg tp-rs-img rs-lazyload"
                      data-lazyload="//www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/10/slider-img-01.jpg"
                      data-no-retina
                    />
                   
                    <rs-layer
                      id="slider-2-slide-2-layer-0"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="x:l,l,c,c;xo:60px,60px,0,0;yo:187px,187px,85px,53px;"
                      data-text="w:normal;s:15,15,15,13;l:28,28,16,20;a:center;"
                      data-padding="t:5,5,5,3;r:18,18,10,6;b:5,5,5,3;l:54,54,34,21;"
                      data-border="bor:5px,5px,5px,5px;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{
                        zIndex: 9,
                        backgroundColor: "#ee344e",
                        fontFamily: '"Poppins"',
                      }}
                    >
                      A Place Where a Pepole meets Nature !
                    </rs-layer>

                    <rs-layer
                      id="slider-2-slide-2-layer-1"
                      data-type="text"
                      data-color="#192136"
                      data-rsp_ch="on"
                      data-xy="x:l,l,c,c;xo:60px,60px,0,0;yo:232px,232px,128px,77px;"
                      data-text="w:normal;s:90,90,70,50;l:117,117,75,70;fw:600;a:left,left,center,center;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{ zIndex: 11, fontFamily: '"Poppins"' }}
                    >
                      Wildlife is the
                    </rs-layer>

                    <rs-layer
                      id="slider-2-slide-2-layer-2"
                      data-type="shape"
                      data-rsp_ch="on"
                      data-xy="xo:75px,75px,-138px,-85px;yo:205px,205px,102px,62px;"
                      data-text="w:normal;s:20,20,11,6;l:0,0,14,8;"
                      data-dim="w:30px,30px,20px,12px;h:1px;"
                      data-vbility="t,t,f,f"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{ zIndex: 14, backgroundColor: "#ffffff" }}
                    ></rs-layer>

                    <a
                      id="slider-2-slide-2-layer-3"
                      className="rs-layer"
                      href=""
                      target="_self"
                      data-type="text"
                      data-color="#192136"
                      data-rsp_ch="on"
                      data-xy="x:l,l,c,c;xo:61px,61px,-80px,0;y:m,m,b,b;yo:98px,98px,93px,99px;"
                      data-text="w:normal;s:14,14,14,13;l:25,25,20,20;fw:700;"
                      data-padding="t:11,11,10,8;r:35,35,30,19;b:11,11,10,8;l:35,35,30,19;"
                      data-border="bos:solid;boc:#192136;bow:1px,1px,1px,1px;bor:25px,25px,25px,25px;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      data-frame_hover="c:#fff;bgc:#192136;boc:#192136;bor:25px,25px,25px,25px;bos:solid;bow:1px,1px,1px,1px;"
                      style={{ zIndex: 12, fontFamily: '"Poppins"' }}
                    >
                      Book Now!
                    </a>

                    <a
                      id="slider-2-slide-2-layer-4"
                      className="rs-layer"
                      href=""
                      target="_self"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="x:l,l,c,c;xo:229px,229px,80px,0;y:m,m,b,b;yo:98px,98px,94px,53px;"
                      data-text="w:normal;s:14,14,14,13;l:25,25,20,20;fw:700;a:left,left,center,center;"
                      data-padding="t:12,12,10,8;r:35,35,30,19;b:12,12,10,8;l:35,35,30,19;"
                      data-border="bos:solid;bow:0px,0,0,0;bor:25px,25px,25px,25px;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      data-frame_hover="bgc:#192136;bor:25px,25px,25px,25px;bos:solid;bow:0px,0,0,0;"
                      style={{
                        zIndex: 13,
                        backgroundColor: "#ee344e",
                        fontFamily: '"Poppins"',
                      }}
                    >
                      Discover More
                    </a>

                    <rs-layer
                      id="slider-2-slide-2-layer-5"
                      data-type="shape"
                      data-rsp_ch="on"
                      data-xy="xo:50px,50px,0,0;yo:50px,50px,0,0;"
                      data-text="w:normal;s:20,20,11,6;l:0,0,14,8;"
                      data-dim="w:100%;h:100%;"
                      data-vbility="f,f,t,t"
                      data-frame_999="o:0;st:w;"
                      style={{
                        zIndex: 8,
                        backgroundColor: "rgba(255,255,255,0.3)",
                      }}
                    ></rs-layer>

                    <rs-layer
                      id="slider-2-slide-2-layer-11"
                      data-type="text"
                      data-color="#192136"
                      data-rsp_ch="on"
                      data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:327px,327px,209px,138px;"
                      data-text="w:normal;s:90,90,70,50;l:117,117,75,70;fw:600;a:left,left,center,center;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{ zIndex: 10, fontFamily: '"Poppins"' }}
                    >
                      Beauty of Earth
                    </rs-layer>
                  
                  </rs-slide>
                  <rs-slide
                    style={{ position: "absolute" }}
                    data-key="rs-6"
                    data-title="Slide"
                    data-thumb="//www.themetechmount.com/wordpress/wilddale/wp-content/uploads/revslider/slider-1/slider-img-03-50x100.jpg"
                    data-in="o:0;"
                    data-out="a:false;"
                  >
                    <img
                      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1822,h_853/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                      title="slider-img-03.jpg"
                      width={1822}
                      height={853}
                      className="rev-slidebg tp-rs-img rs-lazyload"
                      data-lazyload="//www.themetechmount.com/wordpress/wilddale/wp-content/uploads/revslider/slider-1/slider-img-03.jpg"
                      data-no-retina
                    />
                    
                    <rs-layer
                      id="slider-2-slide-6-layer-0"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="x:c;yo:152px,152px,92px,71px;"
                      data-text="w:normal;s:16,16,15,13;l:28,28,16,20;a:center;"
                      data-padding="t:5,5,5,3;r:15,15,10,6;b:5,5,5,3;l:15,15,34,21;"
                      data-border="bor:5px,5px,5px,5px;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{
                        zIndex: 9,
                        backgroundColor: "#ee344e",
                        fontFamily: '"Quicksand"',
                      }}
                    >
                      Keep calm and love animals
                    </rs-layer>

                    <rs-layer
                      id="slider-2-slide-6-layer-1"
                      data-type="text"
                      data-color="#192136"
                      data-rsp_ch="on"
                      data-xy="x:c;yo:241px,241px,137px,97px;"
                      data-text="w:normal;s:89,89,70,50;l:117,117,75,70;fw:600;a:left,left,center,center;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{ zIndex: 11, fontFamily: '"Poppins"' }}
                    >
                      The Greatest Zoo
                    </rs-layer>

                    <a
                      id="slider-2-slide-6-layer-4"
                      className="rs-layer"
                      href="aboutus/"
                      target="_self"
                      data-type="text"
                      data-rsp_ch="on"
                      data-xy="x:c;xo:2px,2px,0,0;y:m,m,b,b;yo:103px,103px,97px,73px;"
                      data-text="w:normal;s:14,14,14,13;l:25,25,20,20;fw:700;a:left,left,center,center;"
                      data-padding="t:12,12,10,8;r:35,35,30,19;b:12,12,10,8;l:35,35,30,19;"
                      data-border="bos:solid;bow:0px,0,0,0;bor:25px,25px,25px,25px;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      data-frame_hover="bgc:#192136;bor:25px,25px,25px,25px;bos:solid;bow:0px,0,0,0;"
                      style={{
                        zIndex: 13,
                        backgroundColor: "#ee344e",
                        fontFamily: '"Nunito"',
                      }}
                    >
                      Discover More
                    </a>

                    <rs-layer
                      id="slider-2-slide-6-layer-6"
                      data-type="shape"
                      data-rsp_ch="on"
                      data-text="w:normal;s:20,20,11,6;l:0,0,14,8;"
                      data-dim="w:100%;h:100%;"
                      data-vbility="f,f,t,t"
                      data-frame_999="o:0;st:w;"
                      style={{
                        zIndex: 8,
                        backgroundColor: "rgba(255,255,255,0.4)",
                      }}
                    ></rs-layer>

                    <rs-layer
                      id="slider-2-slide-6-layer-9"
                      data-type="shape"
                      data-rsp_ch="on"
                      data-xy="x:c;xo:0,0,480px,296px;yo:213px,213px,132px,81px;"
                      data-text="w:normal;s:20,20,11,6;l:0,0,14,8;"
                      data-dim="w:2px,2px,2px,1px;h:40px,40px,23px,14px;"
                      data-vbility="t,t,f,f"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{ zIndex: 12, backgroundColor: "#ee344e" }}
                    ></rs-layer>
                    
                    <rs-layer
                      id="slider-2-slide-6-layer-11"
                      data-type="text"
                      data-color="#192136"
                      data-rsp_ch="on"
                      data-xy="x:c;yo:336px,336px,212px,158px;"
                      data-text="w:normal;s:89,89,70,50;l:117,117,75,70;fw:600;a:left,left,center,center;"
                      data-frame_0="y:100%;"
                      data-frame_0_mask="u:t;"
                      data-frame_1="sp:1200;"
                      data-frame_1_mask="u:t;"
                      data-frame_999="o:0;st:w;"
                      style={{ zIndex: 10, fontFamily: '"Poppins"' }}
                    >
                      in the World
                    </rs-layer>
                    
                  </rs-slide>
                  
                </rs-slides>
              </rs-module>
            </rs-module-wrap>
            END REVOLUTION SLIDER
          </div>
        </div> */}



      </div>
    </header>
  );
}

export default Heading;
