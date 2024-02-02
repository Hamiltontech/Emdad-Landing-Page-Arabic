import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Partners from "@layouts/Partners";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Process from "@layouts/Process";
import { getListPage } from "../lib/contentParser";
import axios from "axios";
import { useState, useEffect } from "react";
import { set } from "date-fns";
import About from "@layouts/About";
import Faq from "@layouts/Faq";
import Workflow from "@layouts/Workflow";
import { useRouter } from "next/router";
import { IoMdArrowDropdownCircle } from "react-icons/io";



const Home = ({ frontmatter }) => {
  const router = useRouter();

  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  const [stats, setStats] = useState([]);
  const [features, setFeatures] = useState([]);

  const [arabic, setArabic] = useState(false);

  useEffect(() => {
    axios
      .get("https://strapi-155887-0.cloudclusters.net/api/statistics?locale=ar")
      .then((res) => {
        setStats(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://strapi-155887-0.cloudclusters.net/api/features?locale=ar")
      .then((res) => {
        setFeatures(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Base title={title} arabic={arabic} setArabic={setArabic}>
      <div className="hidden">
        <About arabic={arabic} setArabic={setArabic} />
        <Faq arabic={arabic} setArabic={setArabic} />
      </div>

      {/* Banner */}
      <main
        className="h-[100vh] w-full"
        dir="rtl"
      >
        <video
          autoPlay
          loop
          muted
          className=" h-full w-full object-cover"
          src="/hero.mp4"
        />
        <div className="absolute top-0 w-full">
          <div className=" m-0 h-[100vh] w-full bg-black/40 p-0">
            <div class="mx-auto grid max-w-screen-xl px-4 pt-[300px] md:pt-[300px] lg:grid-cols-12 lg:gap-8 xl:gap-0">
              <div class="mr-auto place-self-center lg:col-span-7">
                
                  <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                    منصة امداد الرقمية
                  </h1>
              
                <p class="mb-6 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-2 lg:text-xl">
                  
                    <span className="font-extrabold text-white">
                      التحول الرقمي للعمليات الشرائية واللوجستية لقطاع الأعمال
                    </span>
                 
                </p>
                <p>
                 
                    <span className="text-white/90 lg:mb-8 ">
                      {" "}
                      نظام سحابي متكامل وسهل الاستخدام لإدارة العمليات الشرائية
                      واللوجستية للمنشآت بكافة أحجامها، تسهل عملية التواصل مع
                      الموردين، وتوفر حلولًا تقنية ذكية لكافة الخدمات الشرائية
                      واللوجستية.
                    </span>
                 
                </p>
                
                  <>

                    <a
                      href="#"
                      class=" inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-center text-base font-medium  text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      تواصل معنا
                    </a>
                    <a
                      href="#"
                      class="mt-4 bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
                    >
                  
                      ابدأ الآن
                    </a>
                  </>
                
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center">
           
              <h2 className="font-extralight">
                {" "}
                لماذا تختار منصة إمداد الرقمية؟
              </h2>
              <p className="text-white">
              توفر منصة إمداد الرقمية حلولًا ذكية لتمكين المنشآت من الاستفادة من التحول الرقمي عبر رقمنة وتنظيم عمليات سلسلة الإمداد، أيًا كان مجال أو حجم المنشأة، بالإمكان تخصيص خدمات منصة إمداد الرقمية لتلائم احتياجاتها وأهدافها.

              </p>
          
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {features?.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white/10 p-5 pb-8 text-center text-white"
                key={`feature-${i}`}
              >
                <div className="mt-4 ">
                  {markdownify(item?.attributes?.Title, "h3", "h5")}
                  <p className="mt-3">{item?.attributes?.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="">
        <div class="bg-[#111827] py-24 sm:py-24">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="space-y-4 text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                التكنولوجيا بأسرها في منصة واحدة
                                </h2>
                <p class="text-lg leading-8 text-gray-300">
                يمكننا مساعدتك في تنمية جمهورك وعملك، بغض النظر عن حجمه.
                </p>
              </div>
              <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-lg text-center sm:grid-cols-2 lg:grid-cols-7">
                {stats.map((item) => (
                  <>
                    <div class="flex flex-col bg-white/10 p-8">
                      <dt class="text-sm font-light leading-6 text-gray-300">
                        {item?.attributes?.Title}
                      </dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                        {item?.attributes?.Number}
                      </dd>
                    </div>
                  </>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* blog posts */}

      {/* Partners */}
      <Partners />

      {/* workflow */}
      {/* <Workflow /> */}
<Process />
      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
