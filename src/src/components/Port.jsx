import { Button } from "@material-ui/core";
import React from "react";

function PortfolioCarousel() {
  return (
    <div
      className="themetechmount-boxes themetechmount-boxes-portfolio themetechmount-element-portfoliobox-style1 themetechmount-boxes-view-carousel themetechmount-boxes-col-five tm-boxes-carousel-arrow- tm-boxes-carousel-arrows-0 themetechmount-boxes-gap-0px"
      data-tm-show={6}
      data-tm-loop={1}
      data-tm-autoplay={0}
      data-tm-centermode={0}
      data-tm-nav
      data-tm-dots
      data-tm-slidestoscroll={1}
      data-tm-autoplayspeed={4500}
      data-tm-margin="0px"
    >
      {/* Add your carousel slides here */}
      <div className="themetechmount-boxes-inner">
        <div className="tm_portfolioarrow-box">
          <div className="tm-portfoliobox-inner">
            {" "}
            <div className="tm-element-heading-content-wrapper left-align tm-reverse-heading-yes tm-seperator-none  tm-heading-style-vertical ">
              <div className="tm-content-header">
                <h2 className="tm-element-subheading">Zoo Photo Gallery!</h2>
                <h3 className="tm-element-content-heading">
                  Look At Gallery For Details
                </h3>
              </div>
            </div>{" "}
            {/* <div className="tm-slick-arrows">
                                            <a
                                              rel="nofollow"
                                              className="tm-slick-arrow tm-slick-prev"
                                            >
                                              <i className="fa-solid fa-arrow-left"></i>{" "}
                                            </a>
                                            <a
                                              rel="nofollow"
                                              className="tm-slick-arrow tm-slick-next"
                                            >
                                              <i className="fa-solid fa-arrow-right"></i>{" "}
                                            </a>
                                          </div> */}
          </div>
        </div>{" "}
        <div className="themetechmount-boxes-row-wrapper row multi-columns-row">
          <div className="tm-box-col-wrapper  mamalds col-lg-20percent col-sm-4 col-md-4 col-xs-12">
            <article className="themetechmount-box themetechmount-box-portfolio themetechmount-portfoliobox-style1  tm-post-format-image">
              <div className="themetechmount-post-item">
                <div className="themetechmount-post-item-inner">
                  <span className="themetechmount-item-thumbnail">
                    <span className="themetechmount-item-thumbnail-inner">
                      {/* <noscript>
                                                      &lt;img width="740"
                                                      height="800"
                                                      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13-740x800.jpg"
                                                      className="attachment-themetechmount-img-portfolio
                                                      size-themetechmount-img-portfolio
                                                      wp-post-image" alt=""
                                                      data-id="9328" /&gt;
                                                    </noscript> */}
                      <img
                        width={740}
                        height={800}
                        src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13-740x800.jpg"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13-740x800.jpg"
                        className="lazyload attachment-themetechmount-img-portfolio size-themetechmount-img-portfolio wp-post-image"
                        alt=""
                        data-id={9328}
                      />
                    </span>
                  </span>{" "}
                </div>
                <div className="themetechmount-box-content themetechmount-overlay">
                  <div className="themetechmount-box-content-inner">
                    <div className="item-content-box tm-hide">
                      <div className="themetechmount-box-title">
                        <h4>Tiger</h4>
                      </div>
                    </div>
                    <div className="themetechmount-icon-box themetechmount-media-link">
                      <a
                        className="tm_prettyphoto"
                        href="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
                      >
                        <i className="tm-wilddale-icon-resize-full-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tm-box-col-wrapper  amphibians col-lg-20percent col-sm-4 col-md-4 col-xs-12">
            <article className="themetechmount-box themetechmount-box-portfolio themetechmount-portfoliobox-style1  tm-post-format-image">
              <div className="themetechmount-post-item">
                <div className="themetechmount-post-item-inner">
                  <span className="themetechmount-item-thumbnail">
                    <span className="themetechmount-item-thumbnail-inner">
                      <noscript>
                        &lt;img width="740" height="800"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/portfolio3-740x800.jpg"
                        className="attachment-themetechmount-img-portfolio
                        size-themetechmount-img-portfolio wp-post-image" alt=""
                        data-id="6150" /&gt;
                      </noscript>
                      <img
                        width={740}
                        height={800}
                        src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/portfolio3-740x800.jpg"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/portfolio3-740x800.jpg"
                        className="lazyload attachment-themetechmount-img-portfolio size-themetechmount-img-portfolio wp-post-image"
                        alt=""
                        data-id={6150}
                      />
                    </span>
                  </span>{" "}
                </div>
                <div className="themetechmount-box-content themetechmount-overlay">
                  <div className="themetechmount-box-content-inner">
                    <div className="item-content-box tm-hide">
                      <div className="themetechmount-box-title">
                        <h4>Peacock</h4>
                      </div>
                    </div>
                    <div className="themetechmount-icon-box themetechmount-media-link">
                      <a
                        className="tm_prettyphoto"
                        href="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/portfolio3.jpg"
                      >
                        <i className="tm-wilddale-icon-resize-full-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tm-box-col-wrapper  bird col-lg-20percent col-sm-4 col-md-4 col-xs-12">
            <article className="themetechmount-box themetechmount-box-portfolio themetechmount-portfoliobox-style1  tm-post-format-image">
              <div className="themetechmount-post-item">
                <div className="themetechmount-post-item-inner">
                  <span className="themetechmount-item-thumbnail">
                    <span className="themetechmount-item-thumbnail-inner">
                      <noscript>
                        &lt;img width="740" height="800"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-04-740x800.jpg"
                        className="attachment-themetechmount-img-portfolio
                        size-themetechmount-img-portfolio wp-post-image" alt=""
                        data-id="6125" /&gt;
                      </noscript>
                      <img
                        width={740}
                        height={800}
                        src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-04-740x800.jpg"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-04-740x800.jpg"
                        className="lazyload attachment-themetechmount-img-portfolio size-themetechmount-img-portfolio wp-post-image"
                        alt=""
                        data-id={6125}
                      />
                    </span>
                  </span>{" "}
                </div>
                <div className="themetechmount-box-content themetechmount-overlay">
                  <div className="themetechmount-box-content-inner">
                    <div className="item-content-box tm-hide">
                      <div className="themetechmount-box-title">
                        <h4>Bird</h4>
                      </div>
                    </div>
                    <div className="themetechmount-icon-box themetechmount-media-link">
                      <a
                        className="tm_prettyphoto"
                        href="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-04.jpg"
                      >
                        <i className="tm-wilddale-icon-resize-full-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tm-box-col-wrapper  mamalds col-lg-20percent col-sm-4 col-md-4 col-xs-12">
            <article className="themetechmount-box themetechmount-box-portfolio themetechmount-portfoliobox-style1  tm-post-format-image">
              <div className="themetechmount-post-item">
                <div className="themetechmount-post-item-inner">
                  <span className="themetechmount-item-thumbnail">
                    <span className="themetechmount-item-thumbnail-inner">
                      <noscript>
                        &lt;img width="740" height="800"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-15-740x800.jpg"
                        className="attachment-themetechmount-img-portfolio
                        size-themetechmount-img-portfolio wp-post-image" alt=""
                        data-id="9329" /&gt;
                      </noscript>
                      <img
                        width={740}
                        height={800}
                        src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-15-740x800.jpg"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-15-740x800.jpg"
                        className="lazyload attachment-themetechmount-img-portfolio size-themetechmount-img-portfolio wp-post-image"
                        alt=""
                        data-id={9329}
                      />
                    </span>
                  </span>{" "}
                </div>
                <div className="themetechmount-box-content themetechmount-overlay">
                  <div className="themetechmount-box-content-inner">
                    <div className="item-content-box tm-hide">
                      <div className="themetechmount-box-title">
                        <h4>White Duck</h4>
                      </div>
                    </div>
                    <div className="themetechmount-icon-box themetechmount-media-link">
                      <a
                        className="tm_prettyphoto"
                        href="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-15.jpg"
                      >
                        <i className="tm-wilddale-icon-resize-full-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tm-box-col-wrapper  amphibians col-lg-20percent col-sm-4 col-md-4 col-xs-12">
            <article className="themetechmount-box themetechmount-box-portfolio themetechmount-portfoliobox-style1  tm-post-format-image">
              <div className="themetechmount-post-item">
                <div className="themetechmount-post-item-inner">
                  <span className="themetechmount-item-thumbnail">
                    <span className="themetechmount-item-thumbnail-inner">
                      <noscript>
                        &lt;img width="740" height="800"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-05-740x800.jpg"
                        className="attachment-themetechmount-img-portfolio
                        size-themetechmount-img-portfolio wp-post-image" alt=""
                        data-id="6126" /&gt;
                      </noscript>
                      <img
                        width={740}
                        height={800}
                        src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-05-740x800.jpg"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-05-740x800.jpg"
                        className="lazyload attachment-themetechmount-img-portfolio size-themetechmount-img-portfolio wp-post-image"
                        alt=""
                        data-id={6126}
                      />
                    </span>
                  </span>{" "}
                </div>
                <div className="themetechmount-box-content themetechmount-overlay">
                  <div className="themetechmount-box-content-inner">
                    <div className="item-content-box tm-hide">
                      <div className="themetechmount-box-title">
                        <h4>Snack</h4>
                      </div>
                    </div>
                    <div className="themetechmount-icon-box themetechmount-media-link">
                      <a
                        className="tm_prettyphoto"
                        href="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-05.jpg"
                      >
                        <i className="tm-wilddale-icon-resize-full-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tm-box-col-wrapper  bird col-lg-20percent col-sm-4 col-md-4 col-xs-12">
            <article className="themetechmount-box themetechmount-box-portfolio themetechmount-portfoliobox-style1  tm-post-format-image">
              <div className="themetechmount-post-item">
                <div className="themetechmount-post-item-inner">
                  <span className="themetechmount-item-thumbnail">
                    <span className="themetechmount-item-thumbnail-inner">
                      <noscript>
                        &lt;img width="740" height="800"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-12-740x800.jpg"
                        className="attachment-themetechmount-img-portfolio
                        size-themetechmount-img-portfolio wp-post-image" alt=""
                        data-id="6133" /&gt;
                      </noscript>
                      <img
                        width={740}
                        height={800}
                        src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-12-740x800.jpg"
                        data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_740,h_800/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-12-740x800.jpg"
                        className="lazyload attachment-themetechmount-img-portfolio size-themetechmount-img-portfolio wp-post-image"
                        alt=""
                        data-id={6133}
                      />
                    </span>
                  </span>{" "}
                </div>
                <div className="themetechmount-box-content themetechmount-overlay">
                  <div className="themetechmount-box-content-inner">
                    <div className="item-content-box tm-hide">
                      <div className="themetechmount-box-title">
                        <h4>Animal</h4>
                      </div>
                    </div>
                    <div className="themetechmount-icon-box themetechmount-media-link">
                      <a
                        className="tm_prettyphoto"
                        href="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/post-12.jpg"
                      >
                        <i className="tm-wilddale-icon-resize-full-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCarousel;
