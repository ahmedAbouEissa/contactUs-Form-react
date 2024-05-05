import React from "react";
import "./styles.css";
import logoTwo from "../resources/logoTwo.png";
import facebook from "../resources/facebook.png";
import linkedin from "../resources/linkedin.png";
import twitter from "../resources/twitter.png";
import youtube from "../resources/youtube.png";
import rss from "../resources/rss.png";
import telegram from "../resources/telegram.png";

const Footer = () => {
  return (
    <div className="mainFooter-container">
      <div className="footer-container">
        <img className="logoTwo-img" src={logoTwo} />
        <div className="footer-wrapper">
          <div className="secOneTwo-wrapper">
            <div className="footer-sectionOne">
              <h3>أخبار وتحليلات السوق</h3>
              <h4>الأخبار</h4>
              <h4>تحليلات وآراء</h4>
              <h4>الأسعار والرسوم البيانية</h4>
              <h4>المفكرة الاقتصادية</h4>
              <h4>منتديات ومجتمع المتداول</h4>
              <h4>تعليم التداول</h4>
              <h4>شركات التداول</h4>
              <h4>أدوات التداول</h4>
            </div>
            <div className="footer-sectionTwo">
              <h3>الأسواق</h3>
              <h4>المفكره الإقتصادية</h4>
              <h4>أخبار الأسواق</h4>
              <h4>العملات الرقمية</h4>
              <h4>منتديات العملات</h4>
              <h4>محاضرة تعريفية</h4>
              <h4>كتاب تداول الفوركس</h4>
            </div>
          </div>
          <div className="socialMedia-links">
            <div className="subscribe-container">
              <input
                className="subscribe-input"
                type="text"
                placeholder="إشترك بالقوائم البريدية"
              />
              <button className="subscribe-button">إشتراك</button>
            </div>
            <div className="socialImageslinks-wrapper">
              <div className="socialImages-links">
                <a>
                  <img className="social-imgs" src={facebook} />
                </a>
              </div>
              <div className="socialImages-links">
                <a>
                  <img src={linkedin} />
                </a>
              </div>
              <div className="socialImages-links">
                <a>
                  <img className="twitter-img" src={twitter} />
                </a>
              </div>
              <div className="socialImages-links">
                <a>
                  <img src={youtube} />
                </a>
              </div>
              <div className="socialImages-links">
                <a>
                  <img className="social-imgs" src={rss} />
                </a>
              </div>
              <div className="telegramImages-link">
                <a>
                  <img className="social-imgs" src={telegram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="para-container">
          <div className="separating-line" />
          <p className="main-para">
            تحذير المخاطرة: المتاجرة باستخدام الروافع المالية في أسواق المال
            ينطوي عليها مخاطر عالية جدًا لا تتناسب مع جميع أنواع المستثمرين، يجب
            عليك أن تستوعب حجم المخاطرة التي قد تتعرض لها أموالك. جميع ما يطرح
            في الموقع من آراء وتحليلات وتوصيات ومحتويات هو من باب المعلومات
            العامة ولا يجب أن يتخذ كأداة لاتخاذ أي قرارات استثمارية بالبيع أو
            الشراء. الرجاء الاطلاع على تحذير المخاطرة التفصيلي{" "}
            <a className="clickHere-link">بالضغط هنا</a>
          </p>
          <div className="extraInfo-container">
            <h5>2024 © ﺟﻤﻴﻊ اﻟﺤﻘوق ﻣﺤﻔﻮﻇﺔ</h5>
            <div className="warning-container">
              <h5>شروط اﻻﺳﺘﺨﺪام</h5>
              <h5 className="extraInfo-warning">
                ﺗﺤﺬﻳﺮ اﻟﻤﺨﺎﻃﺮﺓ واﺧﻼء اﻟﻤﺴؤوﻟﻴﺔ
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
