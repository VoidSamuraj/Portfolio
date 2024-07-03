import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

export default function Tabs({
  children: pages
}) {

  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className="tabs-container">
        <ul>
          {pages?.map((page, i) => {
            return (
              <li key={i} className={`${i === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
              >{page.title}</li>
            )
          })
          }
        </ul>
        <div className="pageContent">
          {pages?.map((page, index) => {
            return (
                <div className={`card-content ${index === activeTab ? "active" : ""}`}>
                  <div>
                  <div className="content">
                    <h3>Description</h3>
                    {
                      page.description.map((paragraph, index) => {
                        return (
                          <p>
                            {paragraph}
                          </p>
                        )
                      })
                    }
                    {page.features &&
                      (
                        <>
                          <h3>Features</h3>
                          {
                            page.features?.map((paragraph, index) => {
                              return (
                                <p>
                                  {paragraph}
                                </p>
                              )
                            })
                          }
                        </>
                      )
                    }
                    {
                      page.githubLink &&
                      <a href={page.githubLink} target="_blank">
                        <i className="bx bxl-github"></i>{page.title}
                      </a>
                    }
                    <div></div>

                  </div>
                  <div className={`gallery ${page.styles}`}>
                    {
                      page.mobile ? (
                        <div className="phone">
                          <div className="screen">
                            <ImageCarousel autoSlide={true} children={page.gallery} inDiv={page.inDiv} />
                          </div>
                        </div>
                      ) : (
                        <ImageCarousel autoSlide={true} children={page.gallery} inDiv={page.inDiv} />
                      )
                    }
                  </div>
                  </div>

                  {
                    page.badges &&
                    <div className="badgesRow">
                    {page.badges?.map((badge, index) => {
                      return (
                        <img src={badge.link} alt={badge.alt} />
                      )
                    })}
                    </div>
                  }
                </div>

            );
          })}
        </div>
      </div>
    </>
  );
}
