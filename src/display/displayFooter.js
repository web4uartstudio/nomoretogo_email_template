import { footerComponent } from 'nmtg-template-mailerlite-outertemplate';
import createComponent from './createComponentUniversal';

import socialsLinksParams from './socialLinksData';
/* ******************** DATA START **************************************** */

import {     
  buttonComponent2
 } from 'nmtg-template-mailerlite-typography';

//  buttonComponent2({id: '12', href: 'google.com'});


// TODO can be moved into config later
const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';

// Footer params
// TODO move to config file later
// const socialsLinksParams = [{ 
//     href: "https://www.facebook.com/nomoretogo/", 
//     src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/facebook.webp"
//   },
//   { 
//     href: "https://twitter.com/nomoretogo", 
//     src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/twitter.webp"
//   },
//   { 
//     href: "https://www.instagram.com/nomoretogo/", 
//     src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/instagram.webp"
//   }];

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  result = createComponent(footerComponent, socialsLinksParams);
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
