import React, { useState } from "react";
import {coursesDataPl, coursesDataEn} from "../data/coursesData"
import { motion } from "framer-motion"

export default function Courses({ locale }) {

  const [activeCategory, setActiveCategory] = useState('All');
  const [hasCert, setHasCert] = useState(1);
  const [sortAsc, setSortAsc] = useState(false);

  const categories = [ 'All', 'Coursera', 'strefakursow.pl', 'Udemy', "Cisco"];
  const categoriesPl = [ 'Wszystkie', 'Coursera', 'strefakursow.pl', 'Udemy', "Cisco"] 

  return (
    <>
      <motion.h2
        initial={{ translateY: "10%", scale: 0.5 }}
        whileInView={{ translateY: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="heading">
        {
          locale === 'pl' ? (<>
            Moje <span>Kursy</span>
          </>) : (<>
            My <span>Courses</span>
          </>)
        }
      </motion.h2>
      <div className="card">

        <div className="category-selector">
          {categories?.map((category,index) => (
            <div
              key={category}
              className={`category-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {
                locale ==='pl'?
                categoriesPl[index]:category
              }
            </div>
          ))}
        </div>

        <div className="tableWrapper">
          <table className="order-table">
            <thead className="no-select">
              <tr>
                <th>{locale ==='pl'?'Nr.':'No.'}</th>
                <th>{locale ==='pl'?'Nazwa':'Name'}</th>
                <th>{locale ==='pl'?'Platforma':'Platform'}</th>
                <th>{locale ==='pl'?'Zawartość':'Content'}</th>
                <th className="button" onClick={() => (
                  setHasCert(hasCert == 3 ? 1 : hasCert + 1)
                )}>
                  {
                    <>
                      <p>{locale ==='pl'?'Ma Certyfikat':'Has Certificate'}</p>
                      <p>{locale ==='pl'?'Certyfikat':'Certificate'}</p>
                    </>
                  }
                  {hasCert == 1 ? (
                    <div className="allCerts">
                      <i className='bx bxs-certification' ></i>
                      <i className='bx bx-certification' ></i>
                    </div>
                  ) : (
                    hasCert == 2 ? (
                      <div className="allCerts">
                        <i className='bx bxs-certification' ></i>
                      </div>
                    ) : (
                      <div className="allCerts">
                        <i className='bx bx-certification' ></i>
                      </div>
                    )
                  )
                  }

                </th>
                <th className="button" onClick={() => (
                  setSortAsc(!sortAsc)
                )}>
                  {
                    <>
                    <p>{locale ==='pl'?'Data ukończenia':'Completion Date'}</p>
                    <p>{locale ==='pl'?'Data':'Date'}</p>
                    </>
                  }
                  <div className="allCerts">
                    <i className='bx bx-sort' ></i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
              (locale === 'pl'?coursesDataPl:coursesDataEn)
                .filter(course =>
                  (activeCategory == "All" || course.platform == activeCategory) &&
                  (hasCert == 1 || (hasCert == 2 && course.hasCert) || (hasCert == 3 && !course.hasCert))
                ).sort((a, b) => {

                  if (a.date === null || a.date == undefined) {
                    return sortAsc ? -1 : 1;
                  }
                  if (b.date === null || b.date == undefined) {
                    return sortAsc ? 1 : -1;
                  }
                  const dateA = new Date(a.date);
                  const dateB = new Date(b.date);

                  if (dateA < dateB) {
                    return sortAsc ? -1 : 1;
                  }
                  if (dateA > dateB) {
                    return sortAsc ? 1 : -1;
                  }
                  return 0;
                })?.map((course, nr) => (
                  <motion.tr
                    key={course.name + activeCategory}
                    initial={{ opacity: 0, y: 10, borderBottomWidth: 0 }}
                    animate={{ opacity: 1, y: 0, borderBottomWidth: "1px" }}
                    transition={{ duration: 1, delay: nr * 0.1 }}
                  >
                    <td>{nr + 1}</td>
                    <td>{
                      course.link != null ? (
                        <a href={course.link} target="_blank">{course.name}</a>
                      ) : (
                        course.name
                      )
                    }
                    </td>
                    <td>{
                      <span className={`badge ${course.platform}`}>{course.platform}</span>}</td>
                    <td>
                      {
                        course.content &&
                        course.content.sort((a, b) => a.name.localeCompare(b.name))?.map((cnt) => (

                          <span key={`${course.name}-${cnt.name}-${nr}`} className={"badge"} style={{ background: `${cnt.color}` }}>{cnt.name}</span>
                        ))
                      }
                    </td>
                    <td>
                      {course.hasCert ? (
                        <i className='bx bxs-certification' ></i>
                      ) : (
                        <i className='bx bx-certification' ></i>
                      )
                      }
                    </td>
                    <td>{course.date}</td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}