import React from "react";
import { withRouter } from "react-router-dom";

const SimulatorIcon = ({ icon, color, id, onMouseOver, onMouseLeave }) => {
  const iconList = {
    questionCircle: QuestionCircle,
    Habitat: Logement,
    Transports: Transports,
    Tertiaire: Tertiaire,
    Industrie: Industrie,
    Énergie: Énergie,
    Options: Options,
    Cross: Cross,
    Trajectoire: "/images/Trajectoire.png",
    Paramètres: "/images/Projection mondiale.png",
  };

  const Icon = iconList[icon];

  return <Icon color={color} onMouseOver={() => onMouseOver(id)} onMouseLeave={onMouseLeave} />;
};

const Cross = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="none" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.251 31.1926C30.6171 31.5587 31.2107 31.5587 31.5768 31.1926C31.9429 30.8265 31.9429 30.2329 31.5768 29.8668L25.7105 24.0005L31.5773 18.1337C31.9434 17.7676 31.9434 17.174 31.5773 16.8079C31.2112 16.4418 30.6176 16.4418 30.2515 16.8079L24.3847 22.6747L18.5179 16.8079C18.1518 16.4418 17.5582 16.4418 17.1921 16.8079C16.826 17.174 16.826 17.7676 17.1921 18.1337L23.0589 24.0005L17.1926 29.8668C16.8265 30.2329 16.8265 30.8265 17.1926 31.1926C17.5587 31.5587 18.1523 31.5587 18.5184 31.1926L24.3847 25.3264L30.251 31.1926Z"
        fill={color || "black"}
      />
    </svg>
  );
};

const Énergie = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.6557 27.4132C39.4936 27.2017 39.2251 27.101 38.9641 27.1537L32.3828 28.4824L33.3743 18.7419C33.4091 18.4001 33.1897 18.0838 32.8572 17.9968C32.5249 17.9099 32.1785 18.078 32.0414 18.3932L25.2586 33.9812C25.1549 34.2194 25.1923 34.4955 25.3557 34.6977C25.519 34.8997 25.7812 34.9943 26.0359 34.9428L32.5243 33.633L30.1931 44.1782C30.117 44.5219 30.3093 44.8684 30.6412 44.986C30.7179 45.0131 30.7963 45.026 30.8737 45.026C31.1315 45.026 31.3768 44.8823 31.4976 44.64L39.726 28.1485C39.845 27.9101 39.8177 27.6248 39.6557 27.4132ZM32.7758 38.9551L34.1169 32.8881C34.1678 32.6578 34.0989 32.4174 33.9336 32.249C33.8012 32.1141 33.6214 32.0403 33.4361 32.0403C33.3902 32.0403 33.3441 32.0448 33.2982 32.0541L27.0708 33.3112L31.5338 23.0546L30.8999 29.2823C30.8775 29.5027 30.961 29.7206 31.1252 29.8695C31.2893 30.0183 31.5143 30.0803 31.7314 30.0364L37.8411 28.803L32.7758 38.9551Z"
        fill={color}
      />
      <path
        d="M49.3028 30.8028C48.9178 30.8028 48.6056 31.1149 48.6056 31.5C48.6056 31.6994 48.6018 31.9019 48.5946 32.102C48.5805 32.4868 48.881 32.8101 49.2658 32.8242C49.2745 32.8245 49.2832 32.8246 49.2918 32.8246C49.6651 32.8246 49.9743 32.5291 49.988 32.1529C49.996 31.936 50 31.7163 50 31.4999C50 31.1149 49.6878 30.8028 49.3028 30.8028Z"
        fill={color}
      />
      <path
        d="M48.9205 35.149C48.5486 35.05 48.1666 35.2718 48.0678 35.6439C46.198 42.6867 39.7963 47.6056 32.5 47.6056C28.5626 47.6056 24.8416 46.2015 21.9069 43.6315H24.1334C24.5184 43.6315 24.8306 43.3194 24.8306 42.9343C24.8306 42.5493 24.5184 42.2371 24.1334 42.2371H20.3685C19.9835 42.2371 19.6713 42.5493 19.6713 42.9343V46.6993C19.6713 47.0844 19.9835 47.3965 20.3685 47.3965C20.7535 47.3965 21.0657 47.0844 21.0657 46.6993V44.7491C24.2426 47.4992 28.2559 49 32.5 49C40.4279 49 47.3838 43.6549 49.4154 36.0017C49.5142 35.6295 49.2926 35.2477 48.9205 35.149Z"
        fill={color}
      />
      <path
        d="M44.9801 15.8825C44.5951 15.8825 44.2829 16.1946 44.2829 16.5797V18.5613C41.0535 15.614 36.9009 14 32.5 14C27.8255 14 23.431 15.8203 20.1257 19.1256C16.8203 22.431 15 26.8256 15 31.5C15 31.8851 15.3122 32.1972 15.6972 32.1972C16.0822 32.1972 16.3944 31.8851 16.3944 31.5C16.3944 22.6194 23.6193 15.3944 32.5 15.3944C36.5774 15.3944 40.4229 16.9002 43.4033 19.6474H41.2151C40.8301 19.6474 40.5179 19.9595 40.5179 20.3446C40.5179 20.7296 40.8301 21.0418 41.2151 21.0418H44.9801C45.3651 21.0418 45.6773 20.7296 45.6773 20.3446V16.5797C45.6773 16.1946 45.3651 15.8825 44.9801 15.8825Z"
        fill={color}
      />
    </svg>
  );
};

const Industrie = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M50.405 39.0208H47.6777L45.2835 19.8677C45.2463 19.5699 44.9932 19.3465 44.6931 19.3465H37.0772C36.7772 19.3465 36.5241 19.5699 36.4868 19.8677L34.0927 39.0208H33.3762L28.0525 31.0353C27.9041 30.8128 27.6164 30.7158 27.3636 30.8028C27.1262 30.8844 26.9624 31.1143 26.9624 31.3653V38.9201L21.7059 31.0354C21.5575 30.8128 21.2699 30.7159 21.017 30.8028C20.7798 30.8845 20.616 31.1144 20.616 31.3654V38.6282L15.3535 31.0267C15.2024 30.8084 14.916 30.7159 14.6658 30.8045C14.4309 30.8875 14.2694 31.1161 14.2694 31.3653V34.5383C14.2694 34.8669 14.5357 35.1333 14.8644 35.1333C15.193 35.1333 15.4594 34.867 15.4594 34.5383V33.2701L19.4406 39.0208H15.6707V37.0771C15.6707 36.7485 15.4044 36.4821 15.0757 36.4821C14.747 36.4821 14.4807 36.7484 14.4807 37.0771V39.0208H13.595C13.2664 39.0208 13 39.2871 13 39.6159V50.405C13 50.7337 13.2663 51 13.595 51H50.4051C50.7337 51 51.0001 50.7337 51.0001 50.405V39.6158C51 39.2871 50.7337 39.0208 50.405 39.0208ZM37.6025 20.5365H44.1678L44.2571 21.2505H37.5132L37.6025 20.5365ZM37.3645 22.4405H44.4059L44.8918 26.3277H36.8786L37.3645 22.4405ZM36.7299 27.5178H45.0405L45.1298 28.2317H36.6407L36.7299 27.5178ZM36.4919 29.4217H45.2785L45.8437 33.9436H35.9266L36.4919 29.4217ZM35.7779 35.1336H45.9925L46.0817 35.8476H35.6886L35.7779 35.1336ZM28.1524 33.3304L31.946 39.0208H28.1524V33.3304ZM21.8058 33.3304L25.5995 39.0208H21.8058V33.3304ZM49.8101 49.81H14.1899V40.2108H41.5198C41.8485 40.2108 42.1148 39.9445 42.1148 39.6158C42.1148 39.2871 41.8485 39.0208 41.5198 39.0208H35.292L35.5399 37.0375H46.2305L46.4784 39.0208H44.0584C43.7298 39.0208 43.4634 39.2871 43.4634 39.6158C43.4634 39.9444 43.7297 40.2108 44.0584 40.2108H49.81V49.81H49.8101Z"
          fill={color}
        />
        <path
          d="M18.6722 40.9249H16.1336C15.8049 40.9249 15.5386 41.1912 15.5386 41.5199V44.0585C15.5386 44.3872 15.8049 44.6535 16.1336 44.6535H18.6722C19.0009 44.6535 19.2673 44.3872 19.2673 44.0585V41.5199C19.2673 41.1912 19.0009 40.9249 18.6722 40.9249ZM18.0772 43.4634H16.7286V42.1148H18.0772V43.4634Z"
          fill={color}
        />
        <path
          d="M47.8666 40.9249H45.3279C44.9993 40.9249 44.7329 41.1912 44.7329 41.5199V44.0585C44.7329 44.3872 44.9992 44.6535 45.3279 44.6535H47.8666C48.1952 44.6535 48.4616 44.3872 48.4616 44.0585V41.5199C48.4615 41.1912 48.1952 40.9249 47.8666 40.9249ZM47.2716 43.4634H45.9229V42.1148H47.2716V43.4634Z"
          fill={color}
        />
        <path
          d="M33.2694 40.9249H30.7308C30.4021 40.9249 30.1357 41.1912 30.1357 41.5199V44.0585C30.1357 44.3872 30.402 44.6535 30.7308 44.6535H33.2694C33.598 44.6535 33.8644 44.3872 33.8644 44.0585V41.5199C33.8644 41.1912 33.5981 40.9249 33.2694 40.9249ZM32.6745 43.4634H31.3258V42.1148H32.6745V43.4634Z"
          fill={color}
        />
        <path
          d="M40.8851 40.9249H38.3465C38.0178 40.9249 37.7515 41.1912 37.7515 41.5199V44.0585C37.7515 44.3872 38.0178 44.6535 38.3465 44.6535H40.8851C41.2138 44.6535 41.4801 44.3872 41.4801 44.0585V41.5199C41.4801 41.1912 41.2138 40.9249 40.8851 40.9249ZM40.2901 43.4634H38.9415V42.1148H40.2901V43.4634Z"
          fill={color}
        />
        <path
          d="M25.6537 40.9249H23.115C22.7864 40.9249 22.52 41.1912 22.52 41.5199V44.0585C22.52 44.3872 22.7863 44.6535 23.115 44.6535H25.6537C25.9823 44.6535 26.2487 44.3872 26.2487 44.0585V41.5199C26.2486 41.1912 25.9823 40.9249 25.6537 40.9249ZM25.0587 43.4634H23.71V42.1148H25.0587V43.4634Z"
          fill={color}
        />
        <path
          d="M18.6722 45.3675H16.1336C15.8049 45.3675 15.5386 45.6338 15.5386 45.9625V48.5012C15.5386 48.8298 15.8049 49.0962 16.1336 49.0962H18.6722C19.0009 49.0962 19.2673 48.8299 19.2673 48.5012V45.9625C19.2673 45.6338 19.0009 45.3675 18.6722 45.3675ZM18.0772 47.9061H16.7286V46.5574H18.0772V47.9061Z"
          fill={color}
        />
        <path
          d="M47.8666 45.3675H45.3279C44.9993 45.3675 44.7329 45.6338 44.7329 45.9625V48.5012C44.7329 48.8298 44.9992 49.0962 45.3279 49.0962H47.8666C48.1952 49.0962 48.4616 48.8299 48.4616 48.5012V45.9625C48.4615 45.6338 48.1952 45.3675 47.8666 45.3675ZM47.2716 47.9061H45.9229V46.5574H47.2716V47.9061Z"
          fill={color}
        />
        <path
          d="M33.2694 45.3675H30.7308C30.4021 45.3675 30.1357 45.6338 30.1357 45.9625V48.5012C30.1357 48.8298 30.402 49.0962 30.7308 49.0962H33.2694C33.598 49.0962 33.8644 48.8299 33.8644 48.5012V45.9625C33.8644 45.6338 33.5981 45.3675 33.2694 45.3675ZM32.6745 47.9061H31.3258V46.5574H32.6745V47.9061Z"
          fill={color}
        />
        <path
          d="M40.8851 45.3675H38.3465C38.0178 45.3675 37.7515 45.6338 37.7515 45.9625V48.5012C37.7515 48.8298 38.0178 49.0962 38.3465 49.0962H40.8851C41.2138 49.0962 41.4801 48.8299 41.4801 48.5012V45.9625C41.4801 45.6338 41.2138 45.3675 40.8851 45.3675ZM40.2901 47.9061H38.9415V46.5574H40.2901V47.9061Z"
          fill={color}
        />
        <path
          d="M25.6537 45.3675H23.115C22.7864 45.3675 22.52 45.6338 22.52 45.9625V48.5012C22.52 48.8298 22.7863 49.0962 23.115 49.0962H25.6537C25.9823 49.0962 26.2487 48.8299 26.2487 48.5012V45.9625C26.2486 45.6338 25.9823 45.3675 25.6537 45.3675ZM25.0587 47.9061H23.71V46.5574H25.0587V47.9061Z"
          fill={color}
        />
        <path
          d="M42.789 14.2693C42.7438 14.2693 42.6987 14.2709 42.6537 14.2743C42.4063 13.5345 41.7069 13 40.885 13C40.0631 13 39.3637 13.5345 39.1164 14.2743C39.0714 14.271 39.0263 14.2694 38.981 14.2694C37.953 14.2694 37.1167 15.1057 37.1167 16.1337C37.1167 17.1617 37.953 17.998 38.981 17.998H42.7889C43.8169 17.998 44.6532 17.1617 44.6532 16.1337C44.6533 15.1057 43.8169 14.2693 42.789 14.2693ZM42.789 16.8079H38.9811C38.6092 16.8079 38.3067 16.5054 38.3067 16.1336C38.3067 15.7618 38.6092 15.4592 38.9811 15.4592C39.1029 15.4592 39.2185 15.4914 39.325 15.555C39.5218 15.6725 39.7687 15.6664 39.9594 15.5395C40.1503 15.4126 40.2513 15.1874 40.219 14.9603C40.2133 14.9208 40.2107 14.8901 40.2107 14.8643C40.2107 14.4925 40.5132 14.1899 40.8851 14.1899C41.2569 14.1899 41.5594 14.4925 41.5594 14.8643C41.5594 14.8901 41.5568 14.9208 41.5512 14.9603C41.519 15.1873 41.6199 15.4126 41.8107 15.5395C42.0016 15.6665 42.2484 15.6723 42.4452 15.555C42.5516 15.4914 42.6673 15.4592 42.7891 15.4592C43.1609 15.4592 43.4634 15.7618 43.4634 16.1336C43.4633 16.5054 43.1608 16.8079 42.789 16.8079Z"
          fill={color}
        />
        <path
          d="M30.7309 18.0772C30.6857 18.0772 30.6406 18.0789 30.5955 18.0822C30.3482 17.3425 29.6488 16.8079 28.8269 16.8079C28.005 16.8079 27.3056 17.3424 27.0583 18.0822C27.0133 18.0789 26.9682 18.0772 26.9229 18.0772C25.8949 18.0772 25.0586 18.9135 25.0586 19.9415C25.0586 20.9695 25.8949 21.8058 26.9229 21.8058H30.7308C31.7588 21.8058 32.5951 20.9695 32.5951 19.9415C32.5951 18.9135 31.7588 18.0772 30.7309 18.0772ZM30.7309 20.6159H26.923C26.5511 20.6159 26.2486 20.3134 26.2486 19.9415C26.2486 19.5697 26.5511 19.2672 26.923 19.2672C27.0448 19.2672 27.1604 19.2994 27.2669 19.3629C27.4636 19.4804 27.7107 19.4743 27.9013 19.3475C28.0922 19.2205 28.1931 18.9953 28.1609 18.7683C28.1552 18.7287 28.1526 18.6981 28.1526 18.6722C28.1526 18.3004 28.4551 17.9979 28.827 17.9979C29.1988 17.9979 29.5013 18.3004 29.5013 18.6722C29.5013 18.6981 29.4987 18.7287 29.4931 18.7683C29.4609 18.9952 29.5618 19.2205 29.7526 19.3475C29.9435 19.4744 30.1904 19.4803 30.3871 19.3629C30.4935 19.2994 30.6092 19.2672 30.731 19.2672C31.1028 19.2672 31.4053 19.5697 31.4053 19.9415C31.4053 20.3134 31.1027 20.6159 30.7309 20.6159Z"
          fill={color}
        />
        <path
          d="M19.307 21.2505C19.2618 21.2505 19.2167 21.2521 19.1716 21.2555C18.9243 20.5157 18.2249 19.9811 17.403 19.9811C16.5811 19.9811 15.8817 20.5157 15.6344 21.2555C15.5894 21.2521 15.5443 21.2505 15.4991 21.2505C14.4711 21.2505 13.6348 22.0868 13.6348 23.1148C13.6348 24.1428 14.4711 24.9791 15.4991 24.9791H19.307C20.335 24.9791 21.1713 24.1428 21.1713 23.1148C21.1713 22.0868 20.335 21.2505 19.307 21.2505ZM19.307 23.7892H15.4991C15.1272 23.7892 14.8247 23.4866 14.8247 23.1148C14.8247 22.743 15.1272 22.4405 15.4991 22.4405C15.6209 22.4405 15.7365 22.4727 15.843 22.5362C16.0398 22.6537 16.2867 22.6476 16.4774 22.5208C16.6683 22.3938 16.7692 22.1686 16.737 21.9416C16.7313 21.902 16.7287 21.8713 16.7287 21.8455C16.7287 21.4737 17.0312 21.1712 17.4031 21.1712C17.7749 21.1712 18.0774 21.4737 18.0774 21.8455C18.0774 21.8713 18.0748 21.902 18.0692 21.9416C18.037 22.1685 18.1379 22.3938 18.3287 22.5208C18.5196 22.6477 18.7664 22.6536 18.9632 22.5362C19.0696 22.4727 19.1853 22.4405 19.3071 22.4405C19.6789 22.4405 19.9814 22.743 19.9814 23.1148C19.9814 23.4866 19.6788 23.7892 19.307 23.7892Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="38" height="38" fill="white" transform="translate(13 13)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Tertiaire = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14.4987V18.849H52V14.4987H12ZM50.7768 17.6258H13.2232V15.7219H50.7768V17.6258Z"
        fill={color}
      />
      <path
        d="M50.7431 20.7968V19.5736H13.2314V20.7968H13.8023V43.3853H13.2314V44.6085H31.2533V46.9734H32.4765V44.6085H50.7431V43.3853H50.0907V20.7968H50.7431ZM48.8675 43.3853H15.0255V20.7968H48.8675V43.3853Z"
        fill={color}
      />
      <path
        d="M32.4762 48.2782V47.6257H31.253V48.2782H30.1113V49.5014H33.6179V48.2782H32.4762Z"
        fill={color}
      />
      <path d="M36.9617 23.8953H31.9873V25.1185H36.9617V23.8953Z" fill={color} />
      <path d="M34.4337 25.8524H31.9873V27.0756H34.4337V25.8524Z" fill={color} />
      <path d="M33.2105 27.728H31.9873V28.9512H33.2105V27.728Z" fill={color} />
      <path d="M18.2872 25.2H17.064V26.4232H18.2872V25.2Z" fill={color} />
      <path d="M27.0126 25.2H19.5103V26.4232H27.0126V25.2Z" fill={color} />
      <path d="M18.2872 27.728H17.064V28.9512H18.2872V27.728Z" fill={color} />
      <path d="M27.0126 27.728H19.5103V28.9512H27.0126V27.728Z" fill={color} />
      <path d="M18.2872 30.1744H17.064V31.3976H18.2872V30.1744Z" fill={color} />
      <path d="M27.0126 30.1744H19.5103V31.3976H27.0126V30.1744Z" fill={color} />
      <path d="M18.2872 32.7839H17.064V34.0071H18.2872V32.7839Z" fill={color} />
      <path d="M27.0126 32.7839H19.5103V34.0071H27.0126V32.7839Z" fill={color} />
      <path d="M18.2872 35.2303H17.064V36.4535H18.2872V35.2303Z" fill={color} />
      <path d="M27.0126 35.2303H19.5103V36.4535H27.0126V35.2303Z" fill={color} />
      <path d="M18.2872 37.7582H17.064V38.9814H18.2872V37.7582Z" fill={color} />
      <path d="M27.0126 37.7582H19.5103V38.9814H27.0126V37.7582Z" fill={color} />
      <path
        d="M46.3392 38.9818V23.6371L41.5344 28.4583L40.2075 25.7727L36.2784 31.6633L35.0037 30.3925L30.6822 37.4036V23.814H29.459V40.205H46.9916V38.9818H46.3392ZM35.2343 32.3496L36.4694 33.581L40.0493 28.214L41.1945 30.532L45.1159 26.5972V29.266H45.1159L41.3361 33.6019L40.1306 32.3836L36.9201 35.5954L35.0672 34.3689L32.7242 36.4217L35.2343 32.3496ZM45.1161 34.4967H45.116V38.9818H31.6584L35.1709 35.9044L37.0786 37.1671L40.1263 34.1182L41.3929 35.3984L45.1161 31.1275V34.4967Z"
        fill={color}
      />
    </svg>
  );
};

const Transports = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.129 30.1818C20.6166 30.1818 22.0081 30.5792 23.2085 31.2607L25.2211 28.6501L24.6744 27.3207L24.2645 27.4538C24.0762 27.5151 23.8798 27.5461 23.6813 27.5461C22.6652 27.5461 21.838 26.7414 21.838 25.7527V24.7252C21.838 23.7366 22.6652 22.9318 23.6813 22.9318H26.7696C27.7858 22.9318 28.6129 23.7366 28.6129 24.7509C28.6129 25.524 28.1062 26.2075 27.3529 26.452L25.9628 26.9028L28.8886 34.019L36.557 24.2625L35.1785 20.4905L37.4573 19.9362C37.8339 19.8446 38.0968 19.5171 38.0968 19.1394C38.0968 18.6866 37.7181 18.3182 37.2527 18.3182H32.6774V17H37.2527C38.4653 17 39.4516 17.9596 39.4516 19.1394C39.4516 20.1228 38.7667 20.977 37.7858 21.2149L36.9513 21.4179L39.3087 27.9159L39.3256 27.9277L39.3168 27.9396L40.5694 31.3919C41.8185 30.63 43.2906 30.1818 44.871 30.1818C49.3535 30.1818 53 33.7297 53 38.0909C53 42.4521 49.3535 46 44.871 46C40.3885 46 36.7419 42.4521 36.7419 38.0909C36.7419 35.7525 37.7967 33.6546 39.4597 32.2052L38.3718 29.2281L32.7675 36.8617C33.5323 37.4667 34.0323 38.3776 34.0323 39.4091C34.0323 41.0001 32.8664 42.3315 31.3226 42.638V42.7045H32V44.0227H29.2903V42.7045H29.9677V42.6887C29.8207 42.6762 29.6744 42.6571 29.5308 42.6261L26.2399 41.9143C24.8525 44.3477 22.1862 46 19.129 46C14.6465 46 11 42.4521 11 38.0909C11 33.7297 14.6465 30.1818 19.129 30.1818ZM38.0968 38.0909C38.0968 41.7251 41.1357 44.6818 44.871 44.6818C48.6063 44.6818 51.6452 41.7251 51.6452 38.0909C51.6452 34.4567 48.6063 31.5 44.871 31.5C43.5419 31.5 42.3056 31.8796 41.2583 32.5255L44.1319 36.254C44.3615 36.1657 44.6095 36.1136 44.871 36.1136C45.9914 36.1136 46.9032 37.0008 46.9032 38.0909C46.9032 39.181 45.9914 40.0682 44.871 40.0682C43.7505 40.0682 42.8387 39.181 42.8387 38.0909C42.8387 37.7376 42.9424 37.4107 43.1097 37.1234L40.1914 33.3369C38.9036 34.5377 38.0968 36.223 38.0968 38.0909ZM44.1936 38.0909C44.1936 38.4547 44.4977 38.75 44.871 38.75C45.2442 38.75 45.5484 38.4547 45.5484 38.0909C45.5484 37.7271 45.2442 37.4318 44.871 37.4318C44.4977 37.4318 44.1936 37.7271 44.1936 38.0909ZM23.5072 33.07L21.1613 36.1136H25.5909C25.2028 34.9154 24.4691 33.8655 23.5072 33.07ZM26.9248 25.2017C27.1239 25.1365 27.2581 24.9552 27.2581 24.7252C27.2581 24.4629 27.0393 24.25 26.7696 24.25H23.6813C23.4124 24.25 23.1935 24.4629 23.1935 24.7252V25.7527C23.1935 26.0665 23.5309 26.3037 23.8364 26.2035L26.9248 25.2017ZM37.8184 27.7135L37.0983 25.7435L29.4739 35.444L29.7489 36.1136H30.6452C30.9615 36.1136 31.2616 36.1697 31.5522 36.2488L37.8184 27.7135ZM29.8248 41.3389C29.8716 41.3495 29.9203 41.3475 29.9677 41.3541V39.4091H31.3226V41.2651C32.1091 40.9922 32.6774 40.2672 32.6774 39.4091C32.6774 38.319 31.7656 37.4318 30.6452 37.4318H27.2235C27.2425 37.65 27.2581 37.8681 27.2581 38.0909C27.2581 39.0005 27.0914 39.8711 26.8001 40.6844L29.8248 41.3389ZM26.9905 36.1136H28.2898L25.8104 30.083L24.3221 32.0128C25.6119 33.0581 26.5576 34.4863 26.9905 36.1136ZM25.9032 38.0909C25.9032 37.8681 25.891 37.6487 25.8687 37.4318H19.2774C18.8222 37.4318 18.4509 37.7923 18.4509 38.2359C18.4509 38.6149 18.7172 38.9372 19.0979 39.0196L25.4663 40.3964C25.744 39.6773 25.9032 38.9029 25.9032 38.0909ZM19.129 44.6818C21.5325 44.6818 23.642 43.4539 24.8451 41.6131L18.8052 40.3074C17.7993 40.0893 17.0968 39.2377 17.0968 38.2359C17.0968 37.066 18.075 36.1136 19.2781 36.1136H19.4677L22.3928 32.3192C21.4241 31.7979 20.3118 31.5 19.129 31.5C15.3937 31.5 12.3548 34.4567 12.3548 38.0909C12.3548 41.7251 15.3937 44.6818 19.129 44.6818Z"
        fill={color}
      />
    </svg>
  );
};

const Options = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.138 41.8142C40.0323 42.0807 39.7304 42.2025 39.4737 42.0959L37.7678 41.3801C37.4659 41.2507 37.1186 41.3573 36.9375 41.6314C36.1676 42.7965 35.1863 43.7864 34.0314 44.5631C33.7596 44.7458 33.654 45.0961 33.7823 45.4007L34.4843 47.1216C34.59 47.3805 34.4692 47.6851 34.205 47.7917L32.3481 48.576C32.0915 48.6827 31.7895 48.5608 31.6839 48.2943L30.9743 46.5734C30.846 46.2688 30.529 46.0936 30.2119 46.1622C28.8532 46.4363 27.4719 46.4363 26.1056 46.1622C25.7886 46.1013 25.464 46.2688 25.3433 46.5734L24.6337 48.2943C24.528 48.5532 24.2261 48.6827 23.9695 48.576L22.1126 47.7993C21.9842 47.746 21.8861 47.647 21.8333 47.5176C21.7804 47.3881 21.7804 47.2511 21.8333 47.1216L22.5428 45.4007C22.6711 45.0961 22.5655 44.7458 22.2937 44.5631C21.1388 43.7864 20.1576 42.7965 19.3876 41.6314C19.2065 41.3573 18.8592 41.2507 18.5573 41.3801L16.8514 42.0959C16.5872 42.2025 16.2928 42.0807 16.1871 41.8142L15.4172 39.9409C15.3115 39.682 15.4323 39.3774 15.6965 39.2708L17.4024 38.5551C17.7043 38.4256 17.878 38.1058 17.81 37.786C17.5383 36.4153 17.5383 35.0218 17.81 33.6435C17.8704 33.3237 17.7043 32.9963 17.4024 32.8745L15.6965 32.1587C15.5682 32.1054 15.47 32.0064 15.4172 31.8769C15.3644 31.7475 15.3644 31.6104 15.4172 31.481L16.1871 29.6077C16.24 29.4783 16.3381 29.3793 16.4664 29.326C16.5947 29.2727 16.7306 29.2727 16.8589 29.326L18.5649 30.0418C18.8668 30.1712 19.214 30.0646 19.3952 29.7905C20.1651 28.6254 21.1464 27.6355 22.3013 26.8588C22.573 26.6761 22.6787 26.3258 22.5504 26.0212L21.8408 24.3003C21.788 24.1708 21.788 24.0338 21.8408 23.9043C21.8937 23.7749 21.9918 23.6759 22.1201 23.6226L23.977 22.8459C24.2336 22.7392 24.5356 22.8611 24.6413 23.1276L25.3508 24.8485C25.4942 25.1988 25.8943 25.3663 26.2415 25.2217C26.5887 25.077 26.7548 24.6734 26.6114 24.3231L25.9018 22.6022C25.5018 21.6351 24.4073 21.1782 23.4486 21.5742L21.5917 22.3509C21.1313 22.5413 20.769 22.9068 20.5727 23.3789C20.384 23.8434 20.384 24.3612 20.5727 24.8333L21.0709 26.044C20.1198 26.7522 19.2819 27.5974 18.5724 28.5645L17.3722 28.0619C16.9118 27.8716 16.3985 27.8716 15.9305 28.0619C15.47 28.2523 15.1077 28.6178 14.9115 29.0899L14.1415 30.9632C13.9528 31.4277 13.9528 31.9455 14.1415 32.4176C14.3302 32.8821 14.6926 33.2476 15.1606 33.4456L16.3607 33.9481C16.1796 35.136 16.1796 36.3239 16.3607 37.5118L15.1606 38.0144C14.2019 38.418 13.749 39.5221 14.1415 40.4892L14.9115 42.3396C15.304 43.3066 16.406 43.7635 17.3647 43.3676L18.5649 42.865C19.2668 43.8245 20.1047 44.6697 21.0633 45.3855L20.5652 46.5962C20.3765 47.0607 20.3765 47.5785 20.5652 48.0506C20.7539 48.5151 21.1162 48.8806 21.5842 49.0786L23.4411 49.8553C24.3997 50.2513 25.5018 49.7944 25.8943 48.8273L26.3925 47.6166C27.57 47.7993 28.7476 47.7993 29.9251 47.6166L30.4233 48.8273C30.7252 49.5583 31.4272 50 32.1594 50C32.4009 50 32.6425 49.9543 32.8765 49.8553L34.7334 49.0786C35.692 48.675 36.1449 47.5709 35.7524 46.6038L35.2542 45.3931C36.2053 44.6849 37.0432 43.8397 37.7527 42.8726L38.9529 43.3752C39.9115 43.7788 41.0136 43.3143 41.4061 42.3472L42.176 40.474C42.3647 40.0095 42.3647 39.4917 42.176 39.0196C41.9873 38.5551 41.625 38.1895 41.157 37.9916L39.4511 37.2758C39.1039 37.1311 38.7038 37.2986 38.5604 37.6489C38.417 37.9992 38.583 38.4028 38.9302 38.5474L40.6362 39.2632C40.7645 39.3165 40.8626 39.4155 40.9155 39.545C40.9683 39.6744 40.9683 39.8115 40.9155 39.9409L40.138 41.8142Z"
        fill={color}
      />
      <path
        d="M28.121 31.0012C28.4985 31.0012 28.8004 30.689 28.8004 30.3083C28.8004 29.9275 28.4909 29.6229 28.1135 29.6229C28.1135 29.6229 28.1135 29.6229 28.1059 29.6229C26.4906 29.6382 24.9809 30.2778 23.8487 31.4353C22.7164 32.5927 22.0975 34.1309 22.1126 35.7528C22.1277 37.3824 22.7617 38.9053 23.9091 40.0475C25.0489 41.1821 26.551 41.7989 28.1437 41.7989C28.1588 41.7989 28.1739 41.7989 28.189 41.7989C29.8043 41.7837 31.314 41.1441 32.4462 39.9866C33.5785 38.8292 34.1974 37.291 34.1824 35.6691C34.1824 35.2883 33.8729 34.9837 33.4955 34.9837C33.4955 34.9837 33.4955 34.9837 33.4879 34.9837C33.1105 34.9837 32.8086 35.2959 32.8086 35.6767C32.8161 36.9331 32.3406 38.121 31.465 39.0195C30.5893 39.9181 29.4194 40.413 28.1739 40.4207C28.1588 40.4207 28.1512 40.4207 28.1361 40.4207C26.9058 40.4207 25.7358 39.9409 24.8602 39.0652C23.9695 38.1819 23.4788 37.0016 23.4713 35.7452C23.4637 34.4888 23.9393 33.3009 24.8149 32.4023C25.7056 31.5114 26.8756 31.0088 28.121 31.0012Z"
        fill={color}
      />
      <path
        d="M49.445 26.3106C50.298 26.3106 51 25.61 51 24.7419V23.2723C51 22.4118 50.3056 21.7036 49.445 21.7036H48.6525C48.4487 20.9422 48.1543 20.2112 47.7618 19.5334L48.3279 18.9623C48.9318 18.3532 48.9318 17.3556 48.3279 16.7465L47.2938 15.7032C46.9994 15.4063 46.6069 15.2463 46.1993 15.2463C45.7841 15.2463 45.3916 15.4063 45.1048 15.7032L44.5386 16.2743C43.8593 15.8784 43.1422 15.5738 42.3874 15.3758V14.5686C42.3874 13.7082 41.6929 13 40.8324 13H39.368C38.5151 13 37.8131 13.7006 37.8131 14.5686V15.3758C37.0582 15.5814 36.3336 15.8784 35.6618 16.2743L35.0957 15.7032C34.8013 15.4063 34.4088 15.2463 34.0012 15.2463C33.586 15.2463 33.1935 15.4063 32.9067 15.7032L31.8725 16.7465C31.2687 17.3556 31.2687 18.3532 31.8725 18.9623L32.4387 19.5334C32.0462 20.2188 31.7442 20.9422 31.548 21.7036H30.7478C29.8949 21.7036 29.1929 22.4042 29.1929 23.2723V24.7495C29.1929 25.61 29.8873 26.3182 30.7478 26.3182H31.548C31.7518 27.0796 32.0462 27.8107 32.4387 28.4884L31.8725 29.0595C31.2687 29.6687 31.2687 30.6662 31.8725 31.2754L32.9067 32.3186C33.201 32.6156 33.5936 32.7755 34.0012 32.7755C34.4163 32.7755 34.8088 32.6156 35.0957 32.3186L35.6618 31.7475C36.3412 32.1434 37.0582 32.448 37.8131 32.646V33.4532C37.8131 34.3136 38.5075 35.0218 39.368 35.0218H40.8324C41.6854 35.0218 42.3874 34.3213 42.3874 33.4532V32.6384C43.1422 32.4328 43.8668 32.1358 44.5386 31.7399L45.1048 32.311C45.3991 32.6079 45.7917 32.7679 46.1993 32.7679C46.6144 32.7679 47.0069 32.6079 47.2938 32.311L48.3279 31.2677C48.9318 30.6586 48.9318 29.661 48.3279 29.0519L47.7618 28.4808C48.1543 27.7954 48.4562 27.072 48.6525 26.3106H49.445ZM47.4372 25.4882C47.2485 26.4629 46.8711 27.3766 46.32 28.2066C46.1389 28.4808 46.1766 28.8463 46.4031 29.0747L47.3542 30.0342C47.4296 30.1103 47.4296 30.2245 47.3542 30.3007L46.32 31.3439C46.2747 31.3896 46.2219 31.3972 46.1917 31.3972C46.154 31.3972 46.1087 31.3896 46.0634 31.3439L45.1123 30.3844C44.8783 30.1484 44.516 30.1179 44.2518 30.3007C43.429 30.8566 42.5232 31.2297 41.557 31.4277C41.24 31.4886 41.006 31.7779 41.006 32.1054V33.4608C41.006 33.5598 40.923 33.6435 40.8249 33.6435H39.3605C39.2624 33.6435 39.1793 33.5598 39.1793 33.4608V32.1054C39.1793 31.7779 38.9453 31.4962 38.6283 31.4277C37.6621 31.2373 36.7563 30.8566 35.9335 30.3007C35.8203 30.2245 35.6844 30.1865 35.5561 30.1865C35.3825 30.1865 35.2014 30.255 35.073 30.3921L34.1219 31.3515C34.0767 31.3972 34.0238 31.4048 33.9936 31.4048C33.9559 31.4048 33.9106 31.3972 33.8653 31.3515L32.8312 30.3083C32.7557 30.2321 32.7557 30.1179 32.8312 30.0418L33.7823 29.0823C34.0163 28.8463 34.0465 28.4808 33.8653 28.2142C33.3143 27.3842 32.9444 26.4705 32.7481 25.4958C32.6878 25.176 32.4009 24.9399 32.0763 24.9399H30.7327C30.6346 24.9399 30.5516 24.8561 30.5516 24.7572V23.2723C30.5516 23.1733 30.6346 23.0895 30.7327 23.0895H32.0763C32.4009 23.0895 32.6802 22.8535 32.7481 22.5336C32.9369 21.559 33.3143 20.6452 33.8653 19.8152C34.0465 19.5411 34.0087 19.1756 33.7823 18.9471L32.8312 17.9877C32.7859 17.942 32.7783 17.8887 32.7783 17.8582C32.7783 17.8201 32.7859 17.7744 32.8312 17.7288L33.8578 16.6779C33.903 16.6322 33.9559 16.6246 33.9861 16.6246C34.0238 16.6246 34.0691 16.6322 34.1144 16.6779L35.0655 17.6374C35.2995 17.8734 35.6618 17.9039 35.926 17.7211C36.7488 17.1653 37.6546 16.7921 38.6207 16.5942C38.9378 16.5332 39.1718 16.2439 39.1718 15.9164V14.5686C39.1718 14.4696 39.2548 14.3859 39.3529 14.3859H40.8173C40.9154 14.3859 40.9985 14.4696 40.9985 14.5686V15.9241C40.9985 16.2515 41.2325 16.5332 41.5495 16.6018C42.5157 16.7921 43.4215 17.1729 44.2442 17.7288C44.516 17.9115 44.8783 17.8734 45.1048 17.645L46.0558 16.6855C46.1011 16.6398 46.154 16.6322 46.1842 16.6322C46.2219 16.6322 46.2672 16.6398 46.3125 16.6855L47.3466 17.7288C47.4221 17.8049 47.4221 17.9191 47.3466 17.9953L46.3955 18.9547C46.1615 19.1908 46.1313 19.5563 46.3125 19.8228C46.8635 20.6528 47.2334 21.5666 47.4296 22.5413C47.49 22.8611 47.7769 23.0971 48.1014 23.0971H49.445C49.5432 23.0971 49.6262 23.1809 49.6262 23.2799V24.7572C49.6262 24.8561 49.5432 24.9399 49.445 24.9399H48.1014C47.7769 24.9323 47.4976 25.1607 47.4372 25.4882Z"
        fill={color}
      />
      <path
        d="M40.0927 19.5791C37.6697 19.5791 35.7071 21.5666 35.7071 24.0033C35.7071 26.4476 37.6772 28.4274 40.0927 28.4274C42.5157 28.4274 44.4783 26.44 44.4783 24.0033C44.4783 21.5666 42.5082 19.5791 40.0927 19.5791ZM40.0927 27.0492C38.4245 27.0492 37.0734 25.6861 37.0734 24.0033C37.0734 22.3204 38.4245 20.9574 40.0927 20.9574C41.7609 20.9574 43.112 22.3204 43.112 24.0033C43.112 25.6861 41.7533 27.0492 40.0927 27.0492Z"
        fill={color}
      />
    </svg>
  );
};

const Logement = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.3833 17.9333H38.6666C38.3262 17.9333 38.05 18.2096 38.05 18.55C38.05 18.8904 38.3262 19.1666 38.6666 19.1666H49.7666V32.478L32.9359 15.6474C32.815 15.5265 32.6566 15.4667 32.4981 15.4667C32.3396 15.4667 32.1811 15.5265 32.0602 15.6474L15.2334 32.4774V19.1666H22.0167C22.3571 19.1666 22.6333 18.8904 22.6333 18.55V16.0834C22.6333 15.743 22.3571 15.4667 22.0167 15.4667H21.4V14.2334H25.1V15.4667H24.4833C24.143 15.4667 23.8667 15.743 23.8667 16.0834V18.55C23.8667 18.8904 24.143 19.1666 24.4833 19.1666H26.3333C26.6737 19.1666 26.95 18.8904 26.95 18.55C26.95 18.2096 26.6737 17.9333 26.3333 17.9333H25.1V16.7H25.7166C26.057 16.7 26.3333 16.4237 26.3333 16.0834V13.6166C26.3333 13.2763 26.057 13 25.7166 13H20.7833C20.443 13 20.1667 13.2763 20.1667 13.6166V16.0833C20.1667 16.4236 20.443 16.6999 20.7833 16.6999H21.4V17.9333H14.6166C14.4532 17.9333 14.296 17.998 14.1807 18.1139C14.0647 18.2293 14 18.3866 14 18.55L14.0025 33.9666C14.0025 34.2163 14.1529 34.4408 14.3836 34.5364C14.46 34.5679 14.5396 34.5833 14.6192 34.5833C14.7801 34.5833 14.938 34.5204 15.0551 34.4026L32.4981 16.9534L49.9472 34.4026C50.065 34.5204 50.2229 34.5832 50.3832 34.5832C50.4628 34.5832 50.5429 34.5678 50.6194 34.5363C50.8494 34.4407 50.9999 34.2157 50.9999 33.9665V18.55C50.9999 18.2096 50.7237 17.9333 50.3833 17.9333Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.8216 46.39C23.5712 44.9403 22.304 43.8334 20.7833 43.8334C19.5691 43.8334 18.517 44.5388 18.0144 45.5612C17.9151 45.4903 17.8091 45.4274 17.6999 45.3707V35.2C17.6999 34.8597 17.4237 34.5834 17.0833 34.5834C16.7429 34.5834 16.4667 34.8597 16.4667 35.2V45.0667C15.1063 45.0667 14 46.173 14 47.5334C14 48.8938 15.1063 50 16.4667 50H23.25C24.27 50 25.1 49.17 25.1 48.15C25.1 47.3292 24.5628 46.6318 23.8216 46.39ZM23.25 48.7666H16.4667C15.7865 48.7666 15.2333 48.2135 15.2333 47.5333C15.2333 46.8531 15.7865 46.3 16.4667 46.3C17.042 46.3 17.5532 46.6342 17.7388 47.1325C17.843 47.4119 18.1317 47.5765 18.4264 47.5235C18.72 47.4704 18.9333 47.2151 18.9333 46.9166C18.9333 45.8967 19.7633 45.0667 20.7833 45.0667C21.8032 45.0667 22.6333 45.8967 22.6333 46.9166C22.6333 47.257 22.9096 47.5333 23.2499 47.5333C23.5897 47.5333 23.8666 47.8101 23.8666 48.1499C23.8666 48.4897 23.5898 48.7666 23.25 48.7666Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.5334 35.2V45.0667C49.8937 45.0667 51 46.173 51 47.5334C51 48.8937 49.8937 50 48.5333 49.9999H29.4167C29.0763 49.9999 28.8 49.7237 28.8 49.3833C28.8 49.0429 29.0763 48.7666 29.4167 48.7666H40.0141C39.9444 48.573 39.9 48.3677 39.9 48.15C39.9 47.3292 40.4372 46.6318 41.1784 46.39C41.4288 44.9403 42.696 43.8334 44.2167 43.8334C45.4309 43.8334 46.483 44.5388 46.9856 45.5612C47.0849 45.4903 47.191 45.4274 47.3001 45.3707V35.2C47.3001 34.8597 47.5763 34.5834 47.9167 34.5834C48.2571 34.5834 48.5334 34.8597 48.5334 35.2ZM48.5334 48.7666C49.2135 48.7666 49.7666 48.2137 49.7666 47.5334C49.7666 46.8532 49.2134 46.3001 48.5333 46.3001C47.958 46.3001 47.4467 46.6343 47.2611 47.1326C47.1569 47.4119 46.8664 47.5772 46.5735 47.5235C46.2801 47.4705 46.0667 47.2152 46.0667 46.9167C46.0667 45.8968 45.2366 45.0667 44.2167 45.0667C43.1967 45.0667 42.3667 45.8968 42.3667 46.9167C42.3667 47.2571 42.0904 47.5334 41.75 47.5334C41.4102 47.5334 41.1334 47.8102 41.1334 48.15C41.1334 48.4898 41.4102 48.7666 41.75 48.7666H48.5334Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.9666 25.3334C34.9666 23.973 33.8603 22.8668 32.5 22.8668C31.1396 22.8668 30.0334 23.9731 30.0334 25.3334C30.0334 26.6937 31.1396 27.8 32.5 27.8C33.8604 27.8 34.9666 26.6937 34.9666 25.3334ZM31.2666 25.3334C31.2666 24.6532 31.8198 24.1001 32.5 24.1001C33.1802 24.1001 33.7333 24.6532 33.7333 25.3334C33.7333 26.0136 33.1802 26.5668 32.5 26.5668C31.8198 26.5667 31.2666 26.0136 31.2666 25.3334Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.2833 33.9666H44.2166C44.5571 33.9666 44.8333 34.2429 44.8333 34.5833V41.3666H45.45C45.7904 41.3666 46.0666 41.6429 46.0666 41.9832C46.0666 42.3236 45.7904 42.5999 45.45 42.5999H38.05C37.7096 42.5999 37.4334 42.3236 37.4334 41.9832C37.4334 41.6429 37.7096 41.3666 38.05 41.3666H38.6666V34.5833C38.6666 34.2429 38.9429 33.9666 39.2833 33.9666ZM39.9 41.3666H43.6V38.9H39.9V41.3666ZM39.9 37.6666H43.6V35.2H39.9V37.6666Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.6666 46.9166C38.6666 46.5762 38.3903 46.3 38.05 46.3H36.2V34.5833C36.2 34.243 35.9237 33.9667 35.5833 33.9667H29.4167C29.0763 33.9667 28.8 34.243 28.8 34.5833V46.3H26.95C26.6097 46.3 26.3334 46.5762 26.3334 46.9166V49.3832C26.3334 49.7236 26.6097 49.9999 26.95 49.9999C27.2904 49.9999 27.5667 49.7236 27.5667 49.3832V47.5332H38.05C38.3903 47.5333 38.6666 47.257 38.6666 46.9166ZM34.9666 40.1333H34.35C34.0096 40.1333 33.7333 40.4096 33.7333 40.75C33.7333 41.0903 34.0096 41.3666 34.35 41.3666H34.9666V46.3H30.0333V35.2H34.9666V40.1333Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7834 33.9666H25.7166C26.0571 33.9666 26.3333 34.2429 26.3333 34.5833V41.3667H26.95C27.2904 41.3667 27.5666 41.6429 27.5666 41.9833C27.5666 42.3237 27.2904 42.6 26.95 42.6H19.55C19.2096 42.6 18.9334 42.3236 18.9334 41.9832C18.9334 41.6429 19.2096 41.3666 19.55 41.3666H20.1667V34.5833C20.1667 34.2429 20.443 33.9666 20.7834 33.9666ZM21.4 41.3666H25.1V38.9H21.4V41.3666ZM21.4 37.6666H25.1V35.2H21.4V37.6666Z"
        fill={color}
      />
    </svg>
  );
};

const QuestionCircle = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path
          d="M8 16C6.41775 16 4.87104 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346627 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346627 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87104 16 6.41775 16 8C15.9978 10.1211 15.1543 12.1547 13.6545 13.6545C12.1547 15.1543 10.1211 15.9978 8 16ZM8 1.35594C6.68593 1.35594 5.40137 1.7456 4.30876 2.47566C3.21615 3.20572 2.36456 4.24338 1.86169 5.45743C1.35881 6.67147 1.22724 8.00737 1.4836 9.2962C1.73996 10.585 2.37275 11.7689 3.30194 12.6981C4.23113 13.6273 5.41499 14.26 6.70381 14.5164C7.99263 14.7728 9.32853 14.6412 10.5426 14.1383C11.7566 13.6354 12.7943 12.7839 13.5243 11.6912C14.2544 10.5986 14.6441 9.31408 14.6441 8C14.6419 6.23855 13.9412 4.54985 12.6957 3.30432C11.4502 2.05878 9.76146 1.35809 8 1.35594Z"
          fill="black"
        />
        <path
          d="M7.79645 10.202C7.61664 10.202 7.4442 10.1306 7.31705 10.0034C7.18991 9.87627 7.11848 9.70382 7.11848 9.52402C7.11692 9.01661 7.27843 8.52212 7.57919 8.11345C7.87995 7.70478 8.30406 7.40356 8.78899 7.25419C8.99793 7.19053 9.18074 7.06113 9.31022 6.88523C9.4397 6.70933 9.50894 6.49633 9.50763 6.27791C9.50763 5.87802 9.34878 5.49451 9.06601 5.21174C8.78324 4.92897 8.39973 4.77012 7.99984 4.77012C7.59994 4.77012 7.21643 4.92897 6.93366 5.21174C6.6509 5.49451 6.49204 5.87802 6.49204 6.27791C6.49204 6.45772 6.42061 6.63017 6.29347 6.75731C6.16633 6.88445 5.99388 6.95588 5.81407 6.95588C5.63427 6.95588 5.46182 6.88445 5.33468 6.75731C5.20754 6.63017 5.13611 6.45772 5.13611 6.27791C5.13611 5.51841 5.43782 4.79 5.97488 4.25295C6.51193 3.7159 7.24033 3.41418 7.99984 3.41418C8.75935 3.41418 9.48775 3.7159 10.0248 4.25295C10.5619 4.79 10.8636 5.51841 10.8636 6.27791C10.8651 6.78532 10.7036 7.27981 10.4029 7.68848C10.1021 8.09715 9.67799 8.39837 9.19306 8.54775C8.98435 8.61178 8.80179 8.74128 8.67237 8.9171C8.54295 9.09291 8.47354 9.30571 8.47441 9.52402C8.47441 9.61305 8.45688 9.70121 8.42281 9.78346C8.38874 9.86572 8.3388 9.94046 8.27584 10.0034C8.21289 10.0664 8.13815 10.1163 8.05589 10.1504C7.97364 10.1844 7.88548 10.202 7.79645 10.202Z"
          fill="black"
        />
        <path
          d="M7.79916 12.4501C8.24847 12.4501 8.61271 12.0859 8.61271 11.6366C8.61271 11.1872 8.24847 10.823 7.79916 10.823C7.34984 10.823 6.9856 11.1872 6.9856 11.6366C6.9856 12.0859 7.34984 12.4501 7.79916 12.4501Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default withRouter(SimulatorIcon);
