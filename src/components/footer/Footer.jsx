import React from 'react';
import c from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const data = [
        {
            heading:"Get to Know Us",
            title: ["Careers","Blog","About Amazon","Amazon Science","Amazon Devices"]
            
        },
        {
            heading:"Make Money with Us",
            title: ["Sell products on Amazon","Sell on Amazon Business","Sell apps on Amazon","Become an Affiliate","Advertise Your Products",
            "Self-Publish with Us","Host an Amazon Hub","›See More Make Money with Us"
            ]    
        },
        {
            heading: "Amazon Payment Products",
            title: ["Amazon Business Card",
            "Shop with Points",
            "Reload Your Balance",
            "Amazon Currency  Converter"
            ]
        },
        {
            heading:"Let Us Help You",
            title:["Amazon and COVID-19",
            "Your Account",
            "Your Orders",
            "Shipping Rates & Policies",
            "Returns & Replacements",
            "Manage Your Content and Devices",
            "Amazon Assistant",
            "Help"]
        }


    ]

  return (
    <div className={c.footer__wrapper}>
      {data.map((item, index) => {
        return (
          <div className={c.wrapperItems} key={index}>
            <h2 className={c.heading}>{item.heading}</h2>
            {item.title.map((link,index) => {
              return (
                <div className={c.link__wrapper} key={index}>
                  <Link className={c.link} to="/">{link}</Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Footer