import { createGlobalStyle } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

export const GlobalStyle = createGlobalStyle`
  html,
body {
  height: 100%;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased; }

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #111111;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif; }

h1 {
  font-size: 70px; }

h2 {
  font-size: 36px; }

h3 {
  font-size: 30px; }

h4 {
  font-size: 24px; }

h5 {
  font-size: 18px; }

h6 {
  font-size: 16px; }

p {
  font-size: 15px;
  font-family: 'Nunito Sans', sans-serif;
  color: #3d3d3d;
  font-weight: 400;
  line-height: 25px;
  margin: 0 0 15px 0; }

img {
  max-width: 100%; }

input:focus,
select:focus,
button:focus,
textarea:focus {
  outline: none; }

a {
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: none;
  outline: none;
  color: #ffffff; }

ul,
ol {
  padding: 0;
  margin: 0; }

/*---------------------
  Helper CSS
-----------------------*/
.section-title {
  margin-bottom: 45px;
  text-align: center; }
  .section-title span {
    color: #e53637;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
    display: block; }
  .section-title h2 {
    color: #111111;
    font-weight: 700;
    line-height: 46px; }

.set-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center; }

.spad {
  padding-top: 100px;
  padding-bottom: 100px; }

.text-white h1,
.text-white h2,
.text-white h3,
.text-white h4,
.text-white h5,
.text-white h6,
.text-white p,
.text-white span,
.text-white li,
.text-white a {
  color: #fff; }

/* buttons */
.primary-btn {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 14px 30px;
  color: #ffffff;
  background: #000000;
  letter-spacing: 4px; }

.site-btn {
  font-size: 14px;
  color: #ffffff;
  background: #111111;
  font-weight: 700;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 14px 30px; }

/* Preloder */
#preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: #000; }

.loader {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 0.8s linear infinite;
  -webkit-animation: loader 0.8s linear infinite; }

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent; }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent; }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent; } }

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent; }
  50% {
    -webkit-transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent; }
  100% {
    -webkit-transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent; } }

.spacial-controls {
  position: fixed;
  width: 111px;
  height: 91px;
  top: 0;
  right: 0;
  z-index: 999; }

.spacial-controls .search-switch {
  display: block;
  height: 100%;
  padding-top: 30px;
  background: #323232;
  text-align: center;
  cursor: pointer; }

.search-model {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  z-index: 99999; }

.search-model-form {
  padding: 0 15px; }

.search-model-form input {
  width: 500px;
  font-size: 40px;
  border: none;
  border-bottom: 2px solid #333;
  background: 0 0;
  color: #999; }

.search-close-switch {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #333;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  font-size: 28px;
  line-height: 28px;
  top: 30px;
  cursor: pointer;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }
`;
